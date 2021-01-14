<?php

use App\Http\Controllers\pagesController;
use Illuminate\Support\Facades\Route;


//Main Pages Routing
Route::get('/', [pagesController::class, 'Home'])->middleware(['auth'])->name('Home');
Route::get('/work-overview', [pagesController::class, 'workOverview'])->middleware(['auth'])->name('Home');
Route::get('/about', [pagesController::class, 'about'])->name('About');
Route::get('/contact', [pagesController::class, 'contact'])->name('Contact');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

//Auth Routing
require __DIR__.'/auth.php';
