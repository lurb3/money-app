<?php

	require_once('conn.php');

	$currentDate = date("Y-m-d");
	
	$purchase = json_decode(file_get_contents('php://input'), true);
    $purchaseItem = $purchase['item'];
	$purchaseAmount = $purchase['amount'];
	$purchaseDate = $purchase['date'];
	$userid = $purchase['userid'];
	
	//$sql = "SELECT * FROM purchases WHERE email LIKE '$userEmailTemp'";
	//$result = $conn->query($sql);

	//if ($result->num_rows > 0) {
	//} else {
        $sqlInsert = "INSERT INTO purchases (item, amount, date, userID) VALUES ('$purchaseItem', '$purchaseAmount', '$purchaseDate', $userid)";
		$resultInsert = $conn->query($sqlInsert);
	//}
	

?>
