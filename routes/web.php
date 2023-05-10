<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FrontController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', function () {
    return view('index');
});

Route::get('/contacetr-nous' , [FrontController::class ,'about'])->name('about');
Route::get('/les-universites-et-institus-en-vue-3d' , [FrontController::class ,'universites'])->name('universites');
Route::get('/les-stands-en-3d-des-univetsites-et-instituts' , [FrontController::class ,'participants'])->name('participants');
Route::get('/une-stands' , [FrontController::class ,'stands'])->name('participants.stands');


