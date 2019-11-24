<?php

	require_once('conn.php');

	$currentDate = date("Y-m-d");
	
	$purchase = json_decode(file_get_contents('php://input'), true);
    $purchaseItem = $purchase['item'];
	$purchaseAmount = $purchase['amount'];
	$purchaseDate = $purchase['date'];
	
	//$sql = "SELECT * FROM purchases WHERE email LIKE '$userEmailTemp'";
	//$result = $conn->query($sql);

	//if ($result->num_rows > 0) {
	//} else {
        $sqlInsert = "INSERT INTO purchases (item, amount, date) VALUES ('$purchaseItem', '$purchaseAmount', '$purchaseDate')";
		$resultInsert = $conn->query($sqlInsert);
	//}
	

?>
