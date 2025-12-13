<?php
// CORS headers for development and production
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit();
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$name = isset($input['name']) ? trim($input['name']) : '';
$email = isset($input['email']) ? trim($input['email']) : '';
$message = isset($input['message']) ? trim($input['message']) : '';
$company = isset($input['company']) ? trim($input['company']) : '';
$phoneCountryCode = isset($input['phoneCountryCode']) ? trim($input['phoneCountryCode']) : '';
$phoneNumber = isset($input['phoneNumber']) ? trim($input['phoneNumber']) : '';

// Validate required fields
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields (name, email, message)']);
    exit();
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email format']);
    exit();
}

// Sanitize inputs to prevent email injection
$name = filter_var($name, FILTER_SANITIZE_STRING);
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$company = filter_var($company, FILTER_SANITIZE_STRING);
$phoneCountryCode = filter_var($phoneCountryCode, FILTER_SANITIZE_STRING);
$phoneNumber = filter_var($phoneNumber, FILTER_SANITIZE_STRING);
$message = filter_var($message, FILTER_SANITIZE_STRING);

// Build phone display
$phoneDisplay = trim($phoneCountryCode . ' ' . $phoneNumber);

// Recipient emails (configure these with your actual emails)
$recipients = [
    'hello.gitltz@gmail.com',
    'sid@gammainternationaltz.com',
    'vijay@gammainternationaltz.com',
    'Himanshu@gammainternationaltz.com',
    'info@gammainternationaltz.com'
];

// Join recipients with commas
$to = implode(', ', $recipients);

// Email subject
$subject = 'New contact inquiry from ' . $name;

// Build HTML email body
$htmlBody = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #f4f4f4; padding: 10px; margin-bottom: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #333; }
        .value { color: #666; }
        hr { border: none; border-top: 1px solid #ddd; margin: 20px 0; }
        .footer { font-size: 12px; color: #999; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Contact Inquiry</h2>
        </div>
        
        <div class="field">
            <span class="label">Name:</span>
            <span class="value">' . htmlspecialchars($name) . '</span>
        </div>
        
        <div class="field">
            <span class="label">Email:</span>
            <span class="value">' . htmlspecialchars($email) . '</span>
        </div>
        
        ' . (!empty($company) ? '
        <div class="field">
            <span class="label">Company:</span>
            <span class="value">' . htmlspecialchars($company) . '</span>
        </div>
        ' : '') . '
        
        ' . (!empty($phoneDisplay) ? '
        <div class="field">
            <span class="label">Phone:</span>
            <span class="value">' . htmlspecialchars($phoneDisplay) . '</span>
        </div>
        ' : '') . '
        
        <hr>
        
        <div class="field">
            <span class="label">Message:</span>
            <p class="value">' . nl2br(htmlspecialchars($message)) . '</p>
        </div>
        
        <div class="field">
            <p class="value">Our location: <a href="https://maps.app.goo.gl/HA9CJrTjwKpEE7cQ7" target="_blank">View on Google Maps</a></p>
        </div>
        
        <div class="footer">
            <p>This is an automated email from your website contact form.</p>
        </div>
    </div>
</body>
</html>
';

// Build plain text version
$plainTextBody = "Name: $name\n"
    . "Email: $email\n"
    . (!empty($company) ? "Company: $company\n" : "")
    . (!empty($phoneDisplay) ? "Phone: $phoneDisplay\n" : "")
    . "\nMessage:\n$message\n"
    . "\nOur location: https://maps.app.goo.gl/HA9CJrTjwKpEE7cQ7";

// Email headers
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Send email
$mailSent = mail($to, $subject, $htmlBody, $headers);

if ($mailSent) {
    // Log the submission (optional)
    $logFile = dirname(__FILE__) . '/contact_submissions.log';
    $logEntry = date('Y-m-d H:i:s') . ' | From: ' . $email . ' | Name: ' . $name . "\n";
    if (file_exists(dirname($logFile))) {
        @file_put_contents($logFile, $logEntry, FILE_APPEND);
    }
    
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => "Thank you for your inquiry. We'll get back to you within 24 hours."
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send email. Please try again later.'
    ]);
}
?>
