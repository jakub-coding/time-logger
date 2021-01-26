<?php

namespace App\Http\Controllers;

use App\Models\Logger;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class pagesController extends Controller
{
    public function home(): \Inertia\Response
	{
		$user = Auth::user();
		$userLastLog = Logger::all()->where('user_id', $user->id)->last();
		$userLogs = Logger::all()->where('user_id', $user->id);

		return Inertia::render('Home', [
    		'user' => $user,
			'userLogs' => $userLogs,
			'userLastLog' => $userLastLog,
		]);
	}

	public function workOverview(): \Inertia\Response
	{
		$user = Auth::user();
		$userLogs = Logger::all()->where('user_id', $user->id);

		return Inertia::render('WorkOverview', [
			'user' => $user,
			'userLogs' => $userLogs,
		]);
	}

	public function userProfile(): \Inertia\Response
	{
		$user = Auth::user();

		return Inertia::render('UserProfile', [
			'authUser' => $user
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
