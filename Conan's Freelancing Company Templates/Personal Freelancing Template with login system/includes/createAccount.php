<?php
session_start(); 
if (isset($_POST['submit'])) {
   include_once "connections.php";
   $username = mysqli_real_escape_string($_POST['username']);
   $password = mysqli_real_escape_string($_POST['password']);
   $email = mysqli_real_escape_string($_POST['email']);
   
   if (empty($username) || empty($password) || empty($email)) {
        header("Location: ../createAccount?emptyFields");
   }

   if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       header("Location: ../createAccount?emailInvalid");
   }
    
   $sql = "SELECT * FROM users WHERE username='$username' OR email='$email';";
   $result = mysqli_query($conn, $sql);
   $resultCheck = mysqli_num_rows($result);
   if (resultCheck > 0) {
       header("Location: ../createAccount?usernameTaken");
   } else {
       $newPassword = password_hash($password, PASSWORD_DEFAULT);
       $insert = "INSERT INTO users(username, pass, email) VALUES('$username', '$newPassword', '$email');";
       mysqli_query($conn, $insert);
   }


} else {
    header("Location: ../createAccount.php?createAccount=Unscucessful");
}