<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class usersController extends Controller
{

    public function index()
    {
        return User::all();
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        //
    }


    public function show(User $user)
    {
        //
    }


    public function edit(User $user)
    {
        //
    }


    public function update(Request $request, $id)
    {
        $user = User::all()->find($id);
        $user->update(
        	$request->all()
		);

        return response()->json([
        	"message" => "Data successfully updated !"
		], 201);
    }


    public function destroy(User $user)
    {
        //
    }
}
