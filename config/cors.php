<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie', 'broadcasting/auth'], // Ensure broadcasting/auth is included here
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:5173'], // Specify your frontend origin
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true, // Required to allow cookies and auth headers
];
