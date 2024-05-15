<?php
$conn = null;
$conn = checkDbConnection();
$works = new Works($conn);
$error = [];
$returnData = [];

if (empty($_GET)) {
    $query = checkReadAll($works);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();