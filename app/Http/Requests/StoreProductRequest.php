<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
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
            'bar_code' => 'nullable|string|max:255',
            'product_name' => 'required|string|max:255',
            'product_family' => 'required|string|max:255',
            'product_nature' => 'nullable|string|max:255',
            'min_stock' => 'nullable|integer|min:0', // Ensure min_stock is a positive integer or null
            'qte' => 'nullable|integer|min:0',
        ];
    }
    public function messages(): array
    {
        return [
            'bar_code.string' => 'Le code-barres doit être une chaîne de caractères.',

            'bar_code.max' => 'Le code-barres ne doit pas dépasser 255 caractères.',

            'product_name.required' => 'Le nom du produit est obligatoire.',
            'product_name.string' => 'Le nom du produit doit être une chaîne de caractères.',

            'product_name.max' => 'Le nom du produit ne doit pas dépasser 255 caractères.',

            'product_family.required' => 'La famille de produit est obligatoire.',
            'product_family.string' => 'La famille de produit doit être une chaîne de caractères.',
            'product_family.max' => 'La famille de produit ne doit pas dépasser 255 caractères.',

            'product_nature.string' => 'La nature du produit doit être une chaîne de caractères.',
            'product_nature.max' => 'La nature du produit ne doit pas dépasser 255 caractères.',

            'min_stock.integer' => 'Le stock minimum doit être un nombre entier.',
            'min_stock.min' => 'Le stock minimum ne peut pas être inférieur à 0.',
            'qte.integer' => 'Le stock minimum doit être un nombre entier.',
            'qte.min' => 'Le stock minimum ne peut pas être inférieur à 0.',
        ];
    }
}
