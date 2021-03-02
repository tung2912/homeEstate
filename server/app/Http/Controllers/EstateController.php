<?php

namespace App\Http\Controllers;

use App\Http\Requests\EstateRequest;
use App\Models\City;
use App\Models\Client;
use App\Models\Estate;
use App\Models\Image;
use App\Models\Income;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use function PHPUnit\Framework\isNull;

class EstateController extends Controller
{

    //for dashboard
    public function index()
    {
        $estates = Estate::all();


        return view('admin.estates.list', compact('estates'));

    }


    public function getEstateById($id)
    {
        $estate = Estate::findOrFail($id);


        return view('admin.estates.detail', compact('estate'));
    }


    public function changeEstateStatus(Request $request, $id)
    {
        $estate = Estate::findOrFail($id);

        $estate->status = $request->input('status');
        $estate->save();


        return redirect()->route('estates.index');
    }

    public function classifyEstateByStatus($status)
    {

        $estates = Estate::where('status', $status)->get();

        return view('admin.estates.list', compact('estates'));

    }

    //End for Dashboard

    //For client

    public function apiNewEstEstate() {
        $estates = Estate::orderBy('created_at','ASC')->limit(10)->get();

        foreach($estates as $estate) {
            foreach($estate->images as $image) {
                $estate->image = $image->url;
            }
        }
        return response()->json(['estates'=>$estates]);
        $estates = Estate::orderBy('created_at', 'ASC')->limit(10)->where('status','=', 2)->get();

        foreach ($estates as $estate) {
            $city = $estate->city->name;
            $estate->city_name = $city;
        }

        return response()->json($estates,200);
    }

    public function apiEstateDetail($id) {
        $estate = Estate::find($id);
        $city = $estate->city;

        if(is_null($estate)) {
            return response()->json(['message' => 'Estate not found'], 404);
        }

        return response()->json([$estate, $city], 200);
    }



    public function apiEstateAroundMillion() {
        $estates = Estate::whereBetween('price',[500000,1000000])->where('status','=', 2)->get();

        foreach ($estates as $estate) {
            $city = $estate->city->name;
            $estate->city_name = $city;
        }

        return response()->json($estates,200);
    }

    public  function apiEstateAffordable() {
        $estates = Estate::where('price', '<=', 500000)->where('status','=', 2)->get();

        foreach ($estates as $estate) {
            $city = $estate->city->name;
            $estate->city_name = $city;
        }

        return response()->json($estates,200);
    }

    public function apiEstateLuxury() {
        $estates = Estate::where('price','>=',1500000)->where('status','=', 2)->get();

        foreach ($estates as $estate) {
            $city = $estate->city->name;
            $estate->city_name = $city;
        }

        return response()->json($estates, 200);
    }

    public function apiUploadEstate(EstateRequest $request) {
        $estate = Estate::create($request->all());

        if ($request->hasFile('image1')) {
            $pathImage = Storage::disk('s3')->put('images', $request->image1,'public');
            // $image1 = $request->file('image1');
            // $image1Name = $image1->getClientOriginalName();
            // $image1Name = time(). '.' .$image1Name;
            // $pathImage = $image1->storeAs('public',$image1Name, 's3');

            Image::create([
                'estate_id' => $estate->id,
                'url' => $pathImage
            ]);
        }
        if ($request->hasFile('image2')) {

            $pathImage = Storage::disk('s3')->put('images', $request->image2,'public');
            Image::create([
                'estate_id' => $estate->id,
                'url' => $pathImage
            ]);
        }
        if ($request->hasFile('image3')) {

            Storage::disk('s3')->put('images', $request->image3,'public');
            Image::create([
                'estate_id' => $estate->id,
                'url' => $pathImage
            ]);
        }
        return response()->json('ok');

    }
    public function searchEstatesByCity($searchValue) {

        $estateResult = Estate::where("city_name", "like", "%" . $searchValue . "%")->get();

        return response()->json($estateResult, 200);
    }


    //End for Client
}
