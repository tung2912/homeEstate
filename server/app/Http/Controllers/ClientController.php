<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Estate;
use App\Models\Owner;
use App\Models\Subscribe;
use Illuminate\Http\Request;

class ClientController extends Controller
{

    public function getSubscribers() {
        $clients = Client::all();

        return view('admin.clients.subscribed', compact('clients'));
    }

    public function deleteSubscriber($subscriber_id) {
        $client = Client::findOrFail($subscriber_id);

        $client->delete();

        return redirect()->route('clients.subscribers');
    }

    public function getOwners() {
        $owners = Owner::all();

        return view('admin.clients.owners', compact('owners'));

    }

    public function getOwnerDetail($owner_id) {
        $owner = Owner::findOrFail($owner_id);

        $subscribedByOwners = Subscribe::where('owner_id', $owner_id)->get();


        $estatesOfOwners = Estate::where('owner_id', $owner_id)->get();

        return view('admin.clients.ownerDetail', compact('subscribedByOwners', 'estatesOfOwners', 'owner'));
    }

    public function apiGetOwnerDetail($owner_id) {
        $subByOwners = Subscribe::where('owner_id', $owner_id)->get();
        $estateSubByOwners = [];
        foreach($subByOwners as $subByOwner) {
            $estateSubByOwner = $subByOwner->estate;
            array_push($estateSubByOwners, $estateSubByOwner);
        }
        foreach ($estateSubByOwners as $estateSubByOwner) {
            $estateSubByOwner->city_name = $estateSubByOwner->city->name;
        }

        $estatesOfOwners = Estate::where('owner_id', $owner_id)->get();
        foreach ($estatesOfOwners as $estatesOfOwner) {
            $estatesOfOwner->city_name = $estatesOfOwner->city->name;
        }

        return response()->json(['EstateSubByOwners'=>$estateSubByOwners, 'EstatesOfOwners'=>$estatesOfOwners]);
    }


}
