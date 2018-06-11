<!--Inserts geocoded postcodes into database-->
<?php
	require_once 'info.php';

	$dbh = new PDO("mysql:host=$hostname; dbname=$db; charset=utf8", $user, $pass, 	array(PDO::ATTR_EMULATE_PREPARES => false, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

	try {
		//check if request method is post
		if($_SERVER['REQUEST_METHOD'] == 'POST') {
			//check if post values exist and assign them to variables
			if (isset($_POST['postcode'], $_POST['lat'],$_POST['lng'])) {
				
				$postcode = $_POST['postcode'];
				$lat = $_POST['lat'];        
				$lng = $_POST['lng'];
				//sql to insert values into database
				$sql = "
					INSERT INTO location (postcode, lat, lng)
					VALUES (:postcode, :lat, :lng)";
				//check if prepared statement is true
				if($result = $dbh->prepare($sql)) {
					//bind paramters to actual values
					$result->bindParam(':postcode', $postcode, PDO::PARAM_STR);
					$result->bindParam(':lat', $lat, PDO::PARAM_INT);
					$result->bindParam(':lng', $lng, PDO::PARAM_INT);
					//execute sql
					$result->execute();
				}
			}
		}

		$dbh = null; //closes database connection
	}

	catch(PDOException $e) {
		echo $e -> getMessage();
	}
?>