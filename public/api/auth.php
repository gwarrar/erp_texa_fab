<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $username = $input['username'] ?? '';
    $password = $input['password'] ?? '';
    
    if ($username === ADMIN_USERNAME && password_verify($password, ADMIN_PASSWORD_HASH)) {
        $token = createToken($username);
        echo json_encode([
            'success' => true,
            'token' => $token,
            'user' => [
                'username' => $username,
                'role' => 'admin'
            ]
        ]);
    } else {
        http_response_code(401);
        echo json_encode(['error' => 'Invalid credentials']);
    }
} elseif ($method === 'GET') {
    // Verify token
    $headers = getallheaders();
    $authHeader = $headers['Authorization'] ?? '';
    
    if (strpos($authHeader, 'Bearer ') === 0) {
        $token = substr($authHeader, 7);
        if (verifyToken($token)) {
            echo json_encode(['valid' => true]);
        } else {
            http_response_code(401);
            echo json_encode(['valid' => false, 'error' => 'Token expired']);
        }
    } else {
        http_response_code(401);
        echo json_encode(['valid' => false, 'error' => 'No token provided']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>
