<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreXrayRequest extends FormRequest
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
            'patient_id' => 'required|exists:patients,id',
            'operation_id' => 'nullable|exists:operations,id',
            'xrays' => 'required|array',
            'xray_type' => 'nullable|string|max:255',
            'xray_name' => 'nullable|string|max:255',
            'price' => 'nullable|numeric|min:0',
        ];
    }

    public function messages(): array
    {
        return [
            'patient_id.required' => 'L\'identifiant du patient est requis.',
            'patient_id.exists' => 'Le patient sélectionné n\'existe pas.',
            'operation_id.exists' => 'L\'opération sélectionnée n\'existe pas.',
            'xray_type.string' => 'Le type de radiographie doit être une chaîne de caractères.',
            'xray_type.max' => 'Le type de radiographie ne peut pas dépasser 255 caractères.',
            'xray_name.string' => 'Le nom de la radiographie doit être une chaîne de caractères.',
            'xray_name.max' => 'Le nom de la radiographie ne peut pas dépasser 255 caractères.',
            'price.numeric' => 'Le prix doit être un nombre.',
            'price.min' => 'Le prix ne peut pas être négatif.',
        ];
    }
}
