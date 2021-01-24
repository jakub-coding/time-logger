<?php

use App\Http\Controllers\pagesController;
use Illuminate\Support\Facades\Route;


//Main Pages Routing -> with Auth
Route::get('/', [pagesController::class, 'Home'])->middleware(['auth'])->name('Home');
Route::get('/overview', [pagesController::class, 'workOverview'])->middleware(['auth'])->name('Home');
Route::get('/user-profile', [pagesController::class, 'userProfile'])->middleware(['auth'])->name('User Profile');

//Main Pages Routing
Route::get('/about', [pagesController::class, 'about'])->name('About');
Route::get('/contact', [pagesController::class, 'contact'])->name('Contact');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

//Auth Routing
require __DIR__.'/auth.php';
