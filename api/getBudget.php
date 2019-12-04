<?php

	require_once('conn.php');

	$useridTemp = $_GET['userid'];
	$sql = "SELECT totalBudget FROM budgets WHERE userid LIKE $useridTemp";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
        $i=0;
		while($row = $result->fetch_assoc()) {
            $fields[$i] = $row;
            $i++;
		}

		echo json_encode($fields);
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}

?>
