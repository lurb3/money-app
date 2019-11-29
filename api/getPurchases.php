<?php

	require_once('conn.php');

	//$userid = json_decode(file_get_contents('php://input'), true);
	//$useridTemp = $userid['userid'];
	$sql = "SELECT * from purchases";
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
