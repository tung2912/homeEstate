<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Estate;
use App\Models\Subscribe;
use Illuminate\Http\Request;

class IncomeController extends Controller
{
    public function index() {

        $doneEstates = Estate::where('status', 4)->get();

        return view('admin.incomes.list', compact('doneEstates'));
    }
}
