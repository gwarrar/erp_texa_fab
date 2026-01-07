<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    // Get data - public access
    $file = $_GET['file'] ?? '';
    $allowedFiles = ['hero', 'features', 'testimonials', 'pricing', 'faq', 'settings', 'footer', 'trust', 'stats', 'solutions', 'pages', 'news', 'cta', 'announcement', 'contact', 'users'];
    
    if (!in_array($file, $allowedFiles)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid file requested']);
        exit;
    }
    
    $filePath = DATA_PATH . $file . '.json';
    
    if (file_exists($filePath)) {
        $content = file_get_contents($filePath);
        echo $content;
    } else {
        echo json_encode([]);
    }
    
} elseif ($method === 'POST' || $method === 'PUT') {
    // Save data - requires authentication
    requireAuth();
    
    $input = json_decode(file_get_contents('php://input'), true);
    $file = $input['file'] ?? '';
    $data = $input['data'] ?? null;
    
    $allowedFiles = ['hero', 'features', 'testimonials', 'pricing', 'faq', 'settings', 'footer', 'trust', 'stats', 'solutions', 'pages', 'news', 'cta', 'announcement', 'contact', 'users'];
    
    if (!in_array($file, $allowedFiles)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid file']);
        exit;
    }
    
    if ($data === null) {
        http_response_code(400);
        echo json_encode(['error' => 'No data provided']);
        exit;
    }
    
    $filePath = DATA_PATH . $file . '.json';
    
    // Create backup
    if (file_exists($filePath)) {
        $backupPath = DATA_PATH . 'backups/';
        if (!file_exists($backupPath)) {
            mkdir($backupPath, 0755, true);
        }
        copy($filePath, $backupPath . $file . '_' . date('Y-m-d_H-i-s') . '.json');
    }
    
    // Save new data
    $result = file_put_contents($filePath, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    
    if ($result !== false) {
        echo json_encode(['success' => true, 'message' => 'Data saved successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to save data']);
    }
    
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>
