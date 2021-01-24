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
		$last_log_php = Logger::all()->last();
		$last_records = Logger::all()->where('user_id', $user->id);

		return Inertia::render('Home', [
    		'user' => $user,
			'last_records' => $last_records,
			'last_log_php' => $last_log_php,
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
