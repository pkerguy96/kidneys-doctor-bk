<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBloodTestRequest extends FormRequest
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
            'operation_id' => 'nullable|exists:operations,id',
            'patient_id' => 'required|exists:patients,id',
            'blood_test' => 'required|array',
            'blood_test.*.title' => 'string',
            'blood_test.*.code' => 'string',
            'blood_test.*.DELAI' => 'nullable',
            'blood_test.*.price' => 'string',
        ];;
    }
    public function messages()
    {
        return [
            'operation_id.exists' => 'The operation ID must exist in the operations table.',
            'patient_id.exists' => 'The patient ID must exist in the patients table.',
            'blood_test.required' => 'The blood test field is required.',
            'blood_test.array' => 'The blood test field must be an array.',

        ];
    }
}
