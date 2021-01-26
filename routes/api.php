<?php

use App\Http\Controllers\API\loggersController;
use App\Http\Controllers\pagesController;
use App\Http\Controllers\usersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Base API Routing
Route::apiResource("/logger", loggersController::class);
Route::apiResource("/users", usersController::class);

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
