<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AppointmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [

            'patient_id' => 'required|integer',
            'date' => ['required', 'date', 'after_or_equal:today'],
            'note' => 'nullable|string|max:255',
        ];
    }
    public function messages()
    {
        return [
            'patient_id.required' => 'Le nom de patient est requis.',
            'date.required' => 'La date de naissance est requise.',
            'date.required' => 'La date est requise.',
            'date.date' => 'La date doit être une date valide.',
            'date.after_or_equal' => 'La date doit être égale ou postérieure à la date actuelle.',
        ];
    }
}
