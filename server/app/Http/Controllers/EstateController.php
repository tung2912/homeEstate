<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Client;
use App\Models\Estate;
use App\Models\Income;
use Illuminate\Http\Request;
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


    //End for Client
}
