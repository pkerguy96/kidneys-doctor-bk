<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\File_Upload;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use App\Models\Patient;
use App\Traits\FileUpload;
use App\Traits\HttpResponses;
use Illuminate\Support\Str;
use ZipArchive;
use Illuminate\Support\Facades\DB;

class fileuploadController extends Controller
{
    use HttpResponses;
    use FileUpload;
    /**
     * Display a listing of the resource.
     */

    public function index(Request $request)
    {
        try {
            // Retrieve search query and pagination parameters
            $searchQuery = $request->input('searchQuery');
            $perPage = $request->get('per_page', 20);

            // Start the query
            $query = file_upload::select('cluster', 'folder_path', 'created_at', 'type', 'patient_id')
                ->groupBy('cluster', 'folder_path', 'created_at', 'type', 'patient_id');

            // Apply search filters if a query is provided
            if (!empty($searchQuery)) {
                $query->where(function ($subQuery) use ($searchQuery) {
                    $subQuery->where('type', 'like', "%{$searchQuery}%")
                        ->orWhere('created_at', 'like', "%{$searchQuery}%");

                    // Join with patients table for name search
                    $subQuery->orWhereHas('patient', function ($patientQuery) use ($searchQuery) {
                        $patientQuery->where('nom', 'like', "%{$searchQuery}%")
                            ->orWhere('prenom', 'like', "%{$searchQuery}%");
                    });
                });
            }

            // Paginate the results
            $patientClusters = $query->paginate($perPage);

            // Format the results with URLs
            $patientClusters->getCollection()->transform(function ($file) {
                $cluster = $file->cluster;
                $file->urls = Storage::disk('public')->url($file->folder_path);
                return $file;
            });

            // Return paginated response
            return response()->json($patientClusters, 200);
        } catch (\Throwable $th) {
            Log::error($th);
            return response()->json(['error' => 'An error occurred while retrieving the file URLs'], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            if ($request->hasFile('files')) {

                $patient  = Patient::findorfail($request->patient_id);
                $patientFolder = $patient->p_folder;

                $uploadedFiles = $request->file('files');

                $cluster = 'cluster' . Str::random(10);
                $counter = 1;
                foreach ($uploadedFiles as $uploadedFile) {

                    $originalFilename = $uploadedFile->getClientOriginalName();
                    $newFilename = 'dicom_' . $counter . '_' . Str::random(5) . '.' . $uploadedFile->getClientOriginalExtension();
                    $path = $this->UploadFile($uploadedFile, $patientFolder, '', 'public', $newFilename);

                    file_upload::create([
                        'patient_id' => $request->patient_id,
                        'original_name' => $originalFilename,
                        'folder_path' => $path,
                        'type' => $request->type,
                        'cluster' => $cluster,
                        'order' => $counter
                    ]);
                    $counter++;
                }
                return response()->json([
                    'message' => 'upload created successfully',
                ], 201);
            }
        } catch (\Throwable $th) {
            // Log the exception for debugging
            Log::error($th);

            return response()->json([
                'message' => 'An error occurred during file upload.',
                'error' => $th->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        try {
            // Log the cluster id for debugging
            Log::info("Cluster ID: " . $id);

            $patientClusters = file_upload::select('cluster', 'folder_path', DB::raw('MAX(`order`) as file_order'))
                ->where('cluster', $id)
                ->groupBy('cluster', 'folder_path')
                ->orderBy('file_order', 'asc') // Order by the aggregated order column
                ->get();
            // Log the query result for debugging
            Log::info("Patient Clusters: ", $patientClusters->toArray());

            if ($patientClusters->isEmpty()) {
                return response()->json(['error' => 'empty'], 404);
            }

            $data = [];
            foreach ($patientClusters as $file) {
                $url = asset("storage/" . $file->folder_path);
                $data[] = $url;
            }

            return view('welcome', compact('data'));
        } catch (\Throwable $th) {
            Log::error($th);
            return response()->json(['error' => 'An error occurred while retrieving the file URLs'], 500);
        }
    }


    public function uploadsInfo(Request $request)
    {
        try {
            $patientClusters = file_upload::select('cluster', 'folder_path', 'created_at', 'patient_id', 'type', 'original_name')
                ->groupBy('cluster', 'folder_path', 'created_at', 'patient_id', 'type', 'original_name')
                ->get();

            if ($patientClusters->isEmpty()) {
                return response()->json(['error' => 'No files found for the patient', 'data' => []]);
            }

            $datesByClusters = [];
            $sizesByClusters = [];
            $clusterType = [];
            $clusterMime = [];
            $patients = [];

            foreach ($patientClusters as $file) {
                $cluster = $file->cluster;

                // Calculate size of each file
                $sizeInBytes = Storage::disk('public')->size($file->folder_path);
                $sizeInKB = $sizeInBytes / 1024 / 1024;
                $sizesByClusters[$cluster][] = $sizeInKB;

                // Collect file dates
                $datesByClusters[$cluster][] = $file->created_at->toDateTimeString();

                // Collect MIME types and types
                $clusterMime[$cluster][] = Storage::disk('public')->mimeType($file->folder_path);
                $clusterType[$cluster][] = $file->type;

                // Collect patient info
                if (!isset($patients[$cluster][$file->patient_id])) {
                    $patientInfo = Patient::withTrashed()->find($file->patient_id);
                    $patients[$cluster][$file->patient_id] = [
                        'nom' => $patientInfo->nom . ' ' . $patientInfo->prenom,
                    ];
                }
            }

            // Prepare final response
            $Uploadsinfo = [];
            foreach ($sizesByClusters as $cluster => $sizes) {
                $Uploadsinfo[$cluster] = [
                    'patientName' => array_values($patients[$cluster]),
                    'clusterName' => $cluster,
                    'type' => $clusterType[$cluster][0],
                    'dates' => $datesByClusters[$cluster],
                    'totalSize' => array_sum($sizes),
                    'mimeType' => $clusterMime[$cluster],
                ];
            }

            // Return response
            return response()->json(['data' => $Uploadsinfo], 200)
                ->header('Access-Control-Allow-Origin', '*')
                ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
                ->header('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Authorization');
        } catch (\Throwable $th) {
            Log::error($th);
            return response()->json(['error' => 'An error occurred while retrieving the file URLs'], 500);
        }
    }

    /* ZIp downlload function */
    public function downloadZip(Request $request, $clusterId)
    {
        try {
            $files = file_upload::where('cluster', $clusterId)->get();
            if ($files->isEmpty()) {
                return response()->json(['error' => 'No files found for this cluster'], 404);
            }

            $zip = new ZipArchive;
            $zipFileName = "download_{$clusterId}.zip";
            $zipPath = storage_path("app/public/" . $zipFileName);

            if ($zip->open($zipPath, ZipArchive::CREATE) === TRUE) {
                foreach ($files as $file) {
                    $zip->addFile(storage_path("app/public/{$file->folder_path}"), basename($file->folder_path));
                }
                $zip->close();
            }

            return response()->download($zipPath)->deleteFileAfterSend();
        } catch (\Throwable $th) {
            Log::error($th);
            return response()->json(['error' => 'Failed to generate ZIP file'], 500);
        }
    }






    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {

            $files = file_upload::where('cluster', $id)->get();
            if ($files->isEmpty()) {
                return $this->error(null, 'No cluster found', 404);
            }
            foreach ($files as $file) {

                Storage::disk('public')->delete($file->folder_path);
            }
            foreach ($files as $file) {
                $file->delete();
            }
            Storage::disk('public')->delete("download_{$files[0]->cluster}.zip");
            return $this->success(null, 'Files deleted successfully', 200);
        } catch (\Throwable $th) {
            Log::error($th);
            return $this->error(null, $th, 404);
        }
    }
}
