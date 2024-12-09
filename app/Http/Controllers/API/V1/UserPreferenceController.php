<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\OperationPreferenceRequest;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\UserPreference;

class UserPreferenceController extends Controller
{
    use HttpResponses;
    public function DashboardKpiUserPref(Request $request)
    {
        if (!$request->input('period')) {
            return $this->error(null, 'Veuillez sélectionner une période', 501);
        }
        $user = Auth::user();
        $doctorId = ($user->role === 'nurse') ? $user->doctor_id : $user->id;
        if (!$user) {
            return $this->error(null, 'Aucun utilisateur trouvé', 501);
        }
        UserPreference::where('doctor_id', $doctorId)->update([
            'kpi_date' => $request->input('period'),
        ]);
        return $this->success('success', 'La préférence a été modifiée', 200);
    }
}
