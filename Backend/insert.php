<?php
// $hostname = "localhost";
// $username = "root";
// $password = "";
// $database = "ruchika_khairkar";
// $connection = mysqli_connect($hostname, $username, $password, $database);

// if (!$connection) {
//     echo "Not connected";
// }


// //$firstname = $_POST['firstname'];
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $name = $_POST['name'];
//     $email = $_POST['email'];
//     $phone = $_POST['phone'];
//     $message = $_POST['message'];

//     $insert = "INSERT INTO `contactme`(`name`, `email`, `phone`, `message`) VALUES ('$name', '$email','$phone', '$message')";

//     $query = mysqli_query($connection, $insert);

//     if ($query) {
//         echo "inserted successfully";
//     } else {
//         echo "failed to insert";
//     }
// }
?>



<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

$hostname = "localhost";
$username = "root";
$password = "";
$database = "ruchika_khairkar";
$connection = mysqli_connect($hostname, $username, $password, $database);

if (!$connection) {
    echo json_encode(["status" => "error", "message" => "Failed to connect to database"]);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data['name'];
    $email = $data['email'];
    $phone = $data['phone'];
    $message = $data['message'];

    $insert = "INSERT INTO `contactme`(`name`, `email`, `phone`, `message`) VALUES ('$name', '$email','$phone', '$message')";

    $query = mysqli_query($connection, $insert);

    if ($query) {
        echo json_encode(["status" => "success", "message" => "Data inserted successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to insert data"]);
    }
}
?>