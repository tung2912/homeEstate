<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Client;
use App\Models\Estate;
use App\Models\Subscribe;
use App\Models\User;
use Illuminate\Http\Request;

class SubscribeController extends Controller
{
    public function index() {
        $subscribes = Subscribe::all();

        return view('admin.subscribes.list',compact('subscribes'));
    }

    public function getSubscribeById($id) {
        $subscribe = Subscribe::findOrFail($id);

        return view('admin.subscribes.detail',compact('subscribe'));
    }

    public function changeStatus(Request $request, $id) {
        $subscribe = Subscribe::findOrFail($id);

        $subscribe->status = $request->status;
        $subscribe->save();

        return redirect()->route('subscribes.index');

    }

    public function classifySubscribeByStatus($status) {
        $subscribes = Subscribe::where('status',$status)->get();

        return view('admin.subscribes.list',compact('subscribes'));
    }

    public function apiAddSubForOwner(Request $request) {
        $owner_id = $request->owner_id;
        $estate_id = $request->estate_id;
        $estate = Estate::findOrFail($estate_id);
        $city = City::findOrFail($estate->city_id);
        $user = User::findOrFail($city->user_id);
        $user_id = $user->id;
        $subscribe = new Subscribe();
        $subscribe->owner_id = $owner_id;
        $subscribe->estate_id = $estate_id;
        $subscribe->user_id = $user_id;
        $subscribe->save();

        return response()->json(['New Sub'=>$subscribe]);
    }
    public function apiAddSubForClient(Request $request) {
        $client = Client::create($request->all());
        $client_id = $client->id;
        $estate_id = $request->estate_id;
        $estate = Estate::findOrFail($estate_id);
        $city = City::findOrFail($estate->city_id);
        $user = User::findOrFail($city->user_id);
        $user_id = $user->id;

        $subscribe = new Subscribe();
        $subscribe->client_id = $client_id;
        $subscribe->estate_id = $estate_id;
        $subscribe->user_id = $user_id;
        $subscribe->save();

        return response()->json(['NewSub'=>$subscribe,'New Client' =>$client]);
    }

}
