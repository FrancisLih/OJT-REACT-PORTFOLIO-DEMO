<?php
$conn = null;
$conn = checkDbConnection();
$works = new Works($conn);
$error = [];
$returnData = [];
if (array_key_exists("worksid", $_GET)) {
    checkPayload($data);
    $works->works_aid = $_GET['worksid'];
    $works->works_title = checkIndex($data, "works_title");
    $works->works_image = checkIndex($data, "works_image");
    $works->works_date_published = checkIndex($data, "works_date_published");
    // $works->works_datetime = date("Y-m-d H:i:s");
    
    checkId($works->works_aid);
    // $works_name_old = checkIndex($data, "works_name_old");
    // compareName($works, $works_name_old, $works->works_name);
    $query = checkUpdate($works);
    returnSuccess($works, "works", $query);
}

checkEndpoint();