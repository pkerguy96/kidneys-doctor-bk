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
            'blood_test' => 'nullable|string',
            'blood_test.*' => 'string',
        ];
    }
    public function messages()
    {
        return [
            'operation_id.required' => 'An operation ID is required.',
            'operation_id.exists' => 'The operation ID must exist in the operations table.',
            'blood_test.*.string' => 'Each blood test must be a valid string.',
        ];
    }
    protected function prepareForValidation()
    {
        $this->merge([
            'blood_test' => isset($this->blood_test) && is_array($this->blood_test)
                ? implode(',', $this->blood_test)
                : $this->blood_test
            /* 'xray_type' => isset($this->xray_type) && is_array($this->xray_type)
                ? implode(',', $this->xray_type)
                : $this->xray_type,
            'view_type' => isset($this->view_type) && is_array($this->view_type)
                ? implode(',', $this->view_type)
                : $this->view_type,
            'body_side' => isset($this->body_side) && is_array($this->body_side)
                ? implode(',', $this->body_side)
                : $this->body_side, */
        ]);
    }
}
