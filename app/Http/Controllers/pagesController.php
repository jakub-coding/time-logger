<?php

namespace App\Http\Controllers;

use App\Models\Logger;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class pagesController extends Controller
{
    public function home(): \Inertia\Response
	{
		$user = Auth::user();
		$last_log = Logger::all()->last();

		return Inertia::render('Home', [
    		'user' => $user,
			'last_log' => $last_log
		]);
	}

	public function workOverview(): \Inertia\Response
	{
		$user = Auth::user();

		return Inertia::render('WorkOverview', [
			'user' => $user
		]);
	}

	public function about(): \Inertia\Response
	{
		return Inertia::render('About');
	}

	public function contact(): \Inertia\Response
	{
		return Inertia::render('Contact');
	}
}
