<?php
    $ID_User = $_POST['id_user'];
    $Password_User = $_POST['password_user'];
    $Name_User = $_POST['name_user'];
    $LastName_User = $_POST['lastname_user'];
    $PhoneNumber_User = $_POST['phonenumber_user'];
    $Email_User = $_POST['email_user'];
    $RoomNumber_User = $_POST['roomnumber_user'];
    
//Database connection
$conn = new mysqli('localhost','root','domitory');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into registration(id_user,password_user,name_user,lastname_user,phonenumber_user,email_user,roomnumber_user)
    values(?,?,?,?,?,?,?)");
    $stmt->bind_param("ssssisi",$ID_User,$Password_User,$Name_User,$LastName_User,$Tel_User,$Email_User,$RoomNumber_User);
    $stmt->execute();
    echo "registration SUccessfully...";
    $stmt->close();
    $conn->close();
}









?>
