<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SupplierStoreRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'address' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|string|email|max:255|unique:suppliers,email',
            'contact_person' => 'nullable|string|max:255',
            'company_name' => 'nullable|string|max:255',
            'supply_type' => 'nullable|string|max:255',
            'tax_id' => 'nullable|string|max:50',
            'status' => 'nullable|in:active,inactive',
            'note' => 'nullable|string',
        ];
    }
    public function messages(): array
    {
        return [
            'name.required' => 'Le nom du fournisseur est obligatoire.',
            'name.max' => 'Le nom du fournisseur ne peut pas dépasser 255 caractères.',
            'address.max' => "L'adresse ne peut pas dépasser 255 caractères.",
            'phone.max' => 'Le numéro de téléphone ne peut pas dépasser 20 caractères.',
            'email.email' => "L'email doit être une adresse valide.",
            'email.max' => "L'email ne peut pas dépasser 255 caractères.",
            'email.unique' => "Cette adresse email est déjà utilisée.",
            'contact_person.max' => 'Le nom de la personne de contact ne peut pas dépasser 255 caractères.',
            'company_name.max' => "Le nom de l'entreprise ne peut pas dépasser 255 caractères.",
            'supply_type.max' => 'Le type de fournitures ne peut pas dépasser 255 caractères.',
            'tax_id.max' => "Le numéro d'identification fiscale ne peut pas dépasser 50 caractères.",


            'status.in' => 'Le statut doit être soit actif, soit inactif.',
            'note.string' => 'Les notes doivent être un texte valide.',
        ];
    }
}
