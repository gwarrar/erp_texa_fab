<?php
// TexaCore Admin Configuration
// IMPORTANT: Change these values before deploying to production!

define('ADMIN_USERNAME', 'admin');
define('ADMIN_PASSWORD_HASH', password_hash('TexaCore2024!', PASSWORD_DEFAULT)); // Change this password!
define('JWT_SECRET', 'your-secret-key-change-this-in-production');
define('DATA_PATH', __DIR__ . '/../data/');
define('UPLOADS_PATH', __DIR__ . '/../uploads/');

// CORS Headers for API
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Helper function to verify admin token
function verifyToken($token) {
    // Simple token verification - in production use proper JWT
    $parts = explode('.', $token);
    if (count($parts) !== 2) return false;
    
    $payload = json_decode(base64_decode($parts[0]), true);
    $signature = $parts[1];
    
    if (!$payload || !isset($payload['exp'])) return false;
    if ($payload['exp'] < time()) return false;
    
    $expectedSignature = hash('sha256', $parts[0] . JWT_SECRET);
    return hash_equals($expectedSignature, $signature);
}

// Helper function to create token
function createToken($username) {
    $payload = [
        'username' => $username,
        'exp' => time() + (24 * 60 * 60) // 24 hours
    ];
    $payloadEncoded = base64_encode(json_encode($payload));
    $signature = hash('sha256', $payloadEncoded . JWT_SECRET);
    return $payloadEncoded . '.' . $signature;
}

// Helper function to check authentication
function requireAuth() {
    $headers = getallheaders();
    $authHeader = $headers['Authorization'] ?? '';
    
    if (strpos($authHeader, 'Bearer ') !== 0) {
        http_response_code(401);
        echo json_encode(['error' => 'Unauthorized']);
        exit;
    }
    
    $token = substr($authHeader, 7);
    if (!verifyToken($token)) {
        http_response_code(401);
        echo json_encode(['error' => 'Invalid or expired token']);
        exit;
    }
}

// Ensure directories exist
if (!file_exists(DATA_PATH)) {
    mkdir(DATA_PATH, 0755, true);
}
if (!file_exists(UPLOADS_PATH)) {
    mkdir(UPLOADS_PATH, 0755, true);
}
if (!file_exists(UPLOADS_PATH . 'images/')) {
    mkdir(UPLOADS_PATH . 'images/', 0755, true);
}
?>
