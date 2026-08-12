<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Ensure FPDF is available
if (!file_exists('fpdf.php')) {
    http_response_code(500);
    echo json_encode(['error' => 'FPDF library missing']);
    exit;
}

require('fpdf.php');

// Read JSON input
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON input']);
    exit;
}

// Determine form type
$isRFQ = isset($input['project_category']);

// Generate PDF
$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial', 'B', 16);

if ($isRFQ) {
    $pdf->Cell(0, 10, 'Request for Quotation (RFQ)', 0, 1, 'C');
    $pdf->SetFont('Arial', '', 12);
    $pdf->Ln(10);
    
    $pdf->Cell(50, 10, 'Project Category:', 0);
    $pdf->Cell(0, 10, $input['project_category'] ?? 'N/A', 0, 1);
    
    $pdf->Cell(50, 10, 'Area (Sq. Ft):', 0);
    $pdf->Cell(0, 10, $input['area_sqft'] ?? 'N/A', 0, 1);
    
    $pdf->Cell(50, 10, 'Floors:', 0);
    $pdf->Cell(0, 10, $input['floors'] ?? 'N/A', 0, 1);
    
    $pdf->Cell(50, 10, 'Phone:', 0);
    $pdf->Cell(0, 10, $input['phone'] ?? 'N/A', 0, 1);
    
    $pdf->Ln(5);
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->Cell(0, 10, 'Estimated Output:', 0, 1);
    
    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(50, 10, 'Budget:', 0);
    $pdf->Cell(0, 10, $input['estimated_budget'] ?? 'N/A', 0, 1);
    
    $pdf->Cell(50, 10, 'Timeline:', 0);
    $pdf->Cell(0, 10, $input['estimated_timeline'] ?? 'N/A', 0, 1);
    
    $subject = $input['_subject'] ?? 'New RFQ Submission';
} else {
    $pdf->Cell(0, 10, 'Contact Form Submission', 0, 1, 'C');
    $pdf->SetFont('Arial', '', 12);
    $pdf->Ln(10);
    
    $pdf->Cell(30, 10, 'Name:', 0);
    $pdf->Cell(0, 10, $input['name'] ?? 'N/A', 0, 1);
    
    $pdf->Cell(30, 10, 'Phone:', 0);
    $pdf->Cell(0, 10, $input['phone'] ?? 'N/A', 0, 1);
    
    $pdf->Cell(30, 10, 'Email:', 0);
    $pdf->Cell(0, 10, $input['email'] ?? 'N/A', 0, 1);
    
    $pdf->Ln(10);
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->Cell(0, 10, 'Project Scope Details:', 0, 1);
    
    $pdf->SetFont('Arial', '', 12);
    $pdf->MultiCell(0, 10, $input['message'] ?? 'N/A');
    
    $subject = $input['_subject'] ?? 'New Contact Form Inquiry';
}

$pdfOutput = $pdf->Output('S');

// Prepare Email
$to = 'info@bongshai.com';
$from = 'noreply@bongshai.com'; // Change to a valid sending address on the server
$replyTo = $input['email'] ?? $from;
$boundary = md5(time());

$headers = "From: Bongshai Website <$from>\r\n";
$headers .= "Reply-To: $replyTo\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

$body = "--$boundary\r\n";
$body .= "Content-Type: text/plain; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$body .= "A new submission has been received. Please find the details in the attached PDF.\r\n\r\n";

$body .= "--$boundary\r\n";
$body .= "Content-Type: application/pdf; name=\"submission.pdf\"\r\n";
$body .= "Content-Disposition: attachment; filename=\"submission.pdf\"\r\n";
$body .= "Content-Transfer-Encoding: base64\r\n\r\n";
$body .= chunk_split(base64_encode($pdfOutput)) . "\r\n";
$body .= "--$boundary--";

// Send email
if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email. Ensure the server can send mail via PHP mail().']);
}
?>
