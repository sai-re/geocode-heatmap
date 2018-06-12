<?php
	//gets geocoded data from db and displays as json
	require_once 'info.php';
    
	$dbh = new PDO("mysql:host=$hostname; dbname=$db; charset=utf8", $user, $pass, 	array(PDO::ATTR_EMULATE_PREPARES => false, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    
	try {
		
		header("Content-type:application/json");

        $sql = "select * FROM location";
        $result = $dbh->prepare($sql);//prepares query
        $result->execute();
        
		//setting fetch mode to get data as associative array
		$result->setFetchMode(PDO::FETCH_ASSOC);

		//create new array
	 	$emparray = [];
		//loop over results while running fetch
		while ($row = $result->fetch()):
			//places results into empty array
			$emparray[] = $row;
		endwhile;

		// unset($emparray[0]);
		// changes array keys into indexes
		// $emparray = array_values($emparray);
		echo json_encode($emparray);

		$dbh = null; //closes database connection
        
    }
	catch(PDOException $e) {
		echo $e -> getMessage();
	}
?>
