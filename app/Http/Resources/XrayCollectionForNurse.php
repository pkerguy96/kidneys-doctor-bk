<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;


class XrayCollectionForNurse extends ResourceCollection
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request)
    {
        return $this->collection->map(function ($xray) {
            return [
                'patient_name' => $xray->patient->nom . ' ' . $xray->patient->prenom,
                'xray_type' => $xray->xray_type,
                'view_type' => $xray->view_type,
                'body_side' => $xray->body_side,
            ];
        })->toArray();
    }
}
