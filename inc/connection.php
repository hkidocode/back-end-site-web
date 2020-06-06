<?php

$dsn = 'mysql:host=localhost;dbname=compte;port=800';
$username = 'root';
$password = '';
$options = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
);

try {
    // create a connection to database
    $db = new PDO($dsn, $username, $password, $options);
    // set the PDO error mode to exception
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     // prepare SQL and bind parameters
     $stmt = $db->prepare("INSERT INTO users (fullname, email, password) VALUES (:fullname, :email, :password)");
     $stmt->bindParam(':fullname',$_POST["fname"]);
     $stmt->bindParam(':email',$_POST["email"]);
     $stmt->bindParam(':password',$_POST["password"]);
     $stmt->execute();
} catch (Exception $e) {
    echo $e->getMessage();
}


?>