<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\V1\fileuploadController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/file-upload/{id}', [fileuploadController::class, 'show']);

/* Route::post('/api/v1/resetlink', [PasswordResetController::class, 'sendResetLinkEmail'])->withoutMiddleware(VerifyCsrfToken::class);
Route::post('/api/v1/reset', [PasswordResetController::class, 'resetPassword'])->withoutMiddleware(VerifyCsrfToken::class); */
