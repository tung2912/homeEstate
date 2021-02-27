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

    public function apiEstateList() {
        return response()->json(Estate::all(),200);
    }

    public function apiEstateDetail($id) {
        $estate = Estate::find($id);
        $city = $estate->city;

        if(is_null($estate)) {
            return response()->json(['message' => 'Estate not found'], 404);
        }

        return response()->json([$estate, $city], 200);
    }

    public function searchEstatesByCity(Request $request) {

        $estateResult = Estate::where('city_name', 'LIKE', '%' . $request . '%')->get();

        return response()->json($estateResult, 200);
    }


    //End for Client
}
