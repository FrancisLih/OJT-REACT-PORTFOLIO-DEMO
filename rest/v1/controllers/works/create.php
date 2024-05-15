<?php
$conn = null;
$conn = checkDbConnection();
$works = new Works($conn);
if (array_key_exists("worksid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$works->works_title = checkIndex($data, "works_title");
$works->works_image = checkIndex($data, "works_image");
$works->works_description = checkIndex($data, "works_description");
$works->works_is_active = 1;
$works->works_date_published = date("Y-m-d H:i:s");
$works->works_created = date("Y-m-d H:i:s");
$works->works_datetime = date("Y-m-d H:i:s");

// isNameExist($works, $works->works_name);

$query = checkCreate($works);
returnSuccess($works, "works", $query);