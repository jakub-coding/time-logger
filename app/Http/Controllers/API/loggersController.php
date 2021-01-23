<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Logger;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Log;

class loggersController extends Controller
{

    public function index()
    {
        return Logger::all()->last();
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {

    	$requestItem = Logger::create([
    		'user_id' => $request->user_id,
			'log_status' => $request->log_status,
			'started_at' => new DateTime(),
		]);

    	return response()->json([
        	"message" => "data successfully stored",
			"data_last_log" => Logger::all()->last()
		], 201);

    }


    public function show(Logger $logger)
    {
        //
    }


    public function edit(Logger $logger)
    {
        //
    }


    public function update(Request $request, $id)
    {
        $data = Logger::all()->find($id);

        $data->update([
			'log_status' => $request->log_status,
			'end_at' => new DateTime(),
		]);

        return response()->json([
        	"message" => "data successfully updated",
			"data_last_log" => Logger::all()->last()
		], 201);
    }


    public function destroy(Logger $logger)
    {
        //
    }
}
