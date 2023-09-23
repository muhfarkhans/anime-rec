<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AnimeController extends Controller
{
    public function index()
    {
        $ch = curl_init();
        $url = "https://api.jikan.moe/v4/recommendations/anime";
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $response = curl_exec($ch);
        if (curl_errno($ch)) {
            echo 'cURL error: ' . curl_error($ch);
        }
        curl_close($ch);

        $anime = json_decode($response);

        return Inertia::render('Anime/List', [
            'anime' => $anime,
        ]);
    }
}