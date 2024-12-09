<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreNurseRequest extends FormRequest
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
            'recruitment_date' => 'required|date',
            'termination_date' => 'nullable|date',
            'nom' => ['required'],
            'prenom' => ['required'],
            'cin' => ['nullable'],
            'date' => [
                'required',
                'date',
                'before_or_equal:today', // Ensures it's not in the future

            ],
            'address' => ['required'],
            'sex' => ['required', Rule::in(['male', 'female'])],
            'phone_number' => ['required', 'numeric', 'digits_between:8,12'],
            'phone_number.digits_between' => 'Le champ numéro de téléphone doit être composé d\'un nombre de chiffres compris entre :min et :max.',

        ];
    }
    public function messages()
    {
        return [
            'nom.required' => 'Le nom est requis.',
            'prenom.required' => 'Le prénom est requis.',

            'date.required' => 'La date de naissance est requise.',
            'date.date' => 'La date de naissance doit être une date valide.',
            'date.before_or_equal' => 'La date de naissance ne peut pas être dans le futur.',
            'address.required' => 'L\'adresse est requise.',
            'sex.required' => 'Le sexe est requis.',
            'sex.in' => 'Le sexe doit être soit "homme" soit "femme".',
            'phone_number.required' => 'Le numéro de téléphone est requis.',
            'phone_number.numeric' => 'Le numéro de téléphone doit être numérique.',

        ];
    }
}
