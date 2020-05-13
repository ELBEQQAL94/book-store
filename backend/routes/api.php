<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// List All Books
Route::get('books', 'BookController@index');

// Get one resource
Route::get('book/{id}', 'BookController@show');

// Create new Book
Route::post('book', 'BookController@store');

// Edit Book
Route::put('book', 'BookController@store');

// DELETE Book
Route::delete('book/{id}', 'BookController@destroy');
