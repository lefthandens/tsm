<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('competitions', function () {
        return Inertia::render('competitions/index');
    })->name('competitions');


    Route::controller(UserController::class)->group(function () {
       Route::get('users', 'index')->name('user.index');
       
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
