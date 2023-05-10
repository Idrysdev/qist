<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontController extends Controller
{
    public function about(){
        return view('pages.about');
    }
    public function universites(){
        return view('pages.universite');
    }
    public function participants(){
        return view('pages.participants');
    }

    public function stands(){
        return view('pages.stands');
    }
}
