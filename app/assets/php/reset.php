<!--Inserts geocoded postcodes into database-->
<?php
	require_once 'info.php';

	$dbh = new PDO("mysql:host=$hostname; dbname=$db; charset=utf8", $user, $pass, 	array(PDO::ATTR_EMULATE_PREPARES => false, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

	try {

        $sql = "
            TRUNCATE TABLE location";
        //check if prepared statement is true
        $result = $dbh->prepare($sql);
        $result->execute();

		$dbh = null; //closes database connection
	}

	catch(PDOException $e) {
		echo $e -> getMessage();
	}
?>