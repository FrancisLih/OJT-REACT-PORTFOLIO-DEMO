<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Works.php';

$conn = null;
$conn = checkDbConnection();

$works = new Works($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("worksid", $_GET)) {

        checkPayload($data);
        $works->works_aid = $_GET['worksid'];
        $works->works_is_active = trim($data["isActive"]);
        $works->works_datetime = date("Y-m-d H:i:s");
        checkId($works->works_aid);
        $query = checkActive($works);
        http_response_code(200);
        returnSuccess($works, "works", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();