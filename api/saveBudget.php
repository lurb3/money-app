<?php

	require_once('conn.php');

	$currentDate = date("Y-m-d");
	
	$budget = json_decode(file_get_contents('php://input'), true);
    $budgetTemp = $budget['totalBudget'];
    $userID = $budget['userid'];
    $currentDate = date('Y-m-d');

	$sql = "SELECT userID FROM budgets WHERE userID LIKE $userID";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
        $sqlUpdate = "UPDATE budgets SET totalBudget = $budgetTemp, updateDate = $currentDate WHERE userID LIKE $userID";
        $resultUpdate = $conn->query($sqlUpdate);
        echo "updated";
    } else {
        $sqlInsert = "INSERT INTO budgets (totalBudget, userID, insertDate) VALUES ($budgetTemp, $userID, $currentDate)";
		$resultInsert = $conn->query($sqlInsert);
        echo "inserted";
    }
        

        
	

?>
