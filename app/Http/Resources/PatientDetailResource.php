<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Carbon;

class PatientDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nom' => $this->nom,
            'prenom' => $this->prenom,
            'cin' => $this->cin,
            'date' => $this->formatDate($this->date),
            'address' => $this->address,
            'sex' => $this->sex,
            'phoneNumber' => $this->phone_number,
            'mutuelle' => $this->mutuelle,
            'note' => $this->note,
            'allergy' => $this->allergy,
            'disease' => $this->disease,
            'referral' => $this->referral,
            'appointments' => $this->mapAppointments(optional($this->appointments)),
            'operations' => $this->mapOperations(optional($this->operations)),
            'upcomingAppointmentsCount' => $this->countAppointments($this->appointments, 'upcoming'),
            'pastAppointmentsCount' => $this->countAppointments($this->appointments, 'past'),
            'ordonances' => $this->mapOrdonances(optional($this->Ordonance)),
            'operationNotes' => $this->mapOperationNotes($this->operationsNote),

        ];
    }
    protected function mapOperationNotes($operationNotes)
    {
        return optional($operationNotes)->map(function ($note) {
            return [
                'note' => $note->note,
                'date' => $note->created_at ? Carbon::parse($note->created_at)->format('Y-m-d H:i:s') : null,
            ];
        }) ?? [];
    }
    protected function mapOrdonances($ordonances)
    {

        return optional($ordonances)->map(function ($ordonance) {

            return [
                'id' => $ordonance->id,
                'date' => $ordonance->date ? Carbon::parse($ordonance->date)->format('Y-m-d ') : null,
            ];
        }) ?? []; // Return an empty array if null
    }

    protected function formatDate($date)
    {
        return $date ? Carbon::parse($date)->format('Y-m-d') : null;
    }
    protected function countAppointments($appointments, $type)
    {
        return optional($appointments)->filter(function ($appointment) use ($type) {
            $now = Carbon::now();
            $appointmentDate = Carbon::parse($appointment->date);

            if ($type === 'upcoming') {
                return $appointmentDate->isFuture();
            } elseif ($type === 'past') {
                return $appointmentDate->isPast();
            }

            return false;
        })->count(); // Return the count of filtered appointments
    }
    protected function mapAppointments($appointments)
    {
        return optional($appointments)->map(function ($appointment) {

            return [
                'id' => $appointment->id,
                'date' => $appointment->date ? \Carbon\Carbon::parse($appointment->date)->format('Y-m-d H:i:s') : null,
                'note' => $appointment->note,
            ];
        }) ?? []; // Return an empty array if null
    }

    protected function mapOperations($operations)
    {
        return optional($operations)->map(function ($operation) {
            return [
                'total_cost' => $operation->total_cost,
                'note' => $operation->note,
                'date' => optional($operation->created_at)->format('Y-m-d H:i:s'),
                'operation_type' => $this->resolveOperationType($operation), // Unified operation type
            ];
        }) ?? []; // Return an empty array if null
    }

    /**
     * Resolve the operation type.
     * Include `operationdetails`, `xrays`, and `outsourceOperations` data.
     *
     * @param  \App\Models\Operation|null  $operation
     * @return array
     */
    protected function resolveOperationType($operation)
    {
        if (!$operation) {
            return []; // Return empty array if operation is null
        }

        // Extract data as arrays directly to prevent issues
        $operationDetails = optional($operation->operationdetails)->map(function ($detail) {
            return [
                'id' => $detail->id,
                'operation_type' => $detail->operation_name,
                'price' => $detail->price,
                'date' => optional($detail->created_at)->format('Y-m-d H:i:s'),
                'source' => 'Procédures',
            ];
        })->toArray() ?? []; // Convert to array or return empty

        $xrayTypes = optional($operation->xray)->map(function ($xray) {
            return [
                'id' => $xray->id,
                'operation_type' => $xray->xray_type ?? 'X-Ray',
                'price' => $xray->price ?? null,
                'date' => optional($xray->created_at)->format('Y-m-d H:i:s'),
                'source' => 'Radiographie',
            ];
        })->toArray() ?? []; // Convert to array or return empty

        $outsourceOperations = optional($operation->externalOperations)->map(function ($external) {
            return [
                'id' => $external->id,
                'operation_type' => $external->operation_type,
                'price' => $external->total_price,
                'date' => optional($external->created_at)->format('Y-m-d H:i:s'),
                'source' => 'Opération externe',
            ];
        })->toArray() ?? []; // Convert to array or return empty

        // Safely merge arrays
        return array_merge($operationDetails, $xrayTypes, $outsourceOperations);
    }
}
