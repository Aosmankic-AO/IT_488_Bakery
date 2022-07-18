<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '','bakery','3306');


// Check connection
if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit();
      }




// get the post records
$firstName = $_POST['firstName'];
$middleName = $_POST['middleName'];
$lastName = $_POST['lastName'];
$favoritePastry = $_POST['favoritePastry'];

// database insert SQL code
$sql = "INSERT INTO `membership` (`firstName`, `middleName`, `lastName`, `favoritePastry`) 
        VALUES ('$firstName', '$middleName', '$lastName', '$favoritePastry')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	header("Location:submitted.html");

}

?>
