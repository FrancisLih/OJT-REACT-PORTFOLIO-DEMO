<?php
$conn = null;
$conn = checkDbConnection();
$works = new Works($conn);

$error = [];
$returnData = [];
if (array_key_exists("worksid", $_GET)) {
    $works->works_aid = $_GET['worksid'];
    checkId($works->works_aid);

    $query = checkDelete($works);
    returnSuccess($works, "works", $query);
}

checkEndpoint();