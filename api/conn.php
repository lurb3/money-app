<?php
	header('Access-Control-Allow-Origin: *', 'Access-Control-Allow-Headers: Content-Type');
    $servername = "gustavomonteiro.pt";
    $username = "gustavom_budget";
    $password = "(xyK#pU?jTkR";
    $dbname="gustavom_money_app";

// Create connection
global $conn;
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
}

?>
