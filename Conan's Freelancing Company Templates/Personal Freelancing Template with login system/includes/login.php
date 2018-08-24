<?php 

include_once "connections.php";
if (isset($_POST['submit'])) {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    if (empty($username) || empty($password)) {
        header("Location: ../index.php?loginEmptyFields");
    }

    $sql = "SELECT * FROM users WHERE username='$username' OR email='$username'"; 
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);
    if ($resultCheck < 1) {
        header("Location: ../index.php?usernameNotFound");
    } else {
        if ($row = mysqli_fetch_assoc($result)) {
            $passwordUC = password_verify($password, $row['pass']);
            
        } 

        if ($passwordUC == false) {
            header("Location: ../index.php?invalidPassword");
        } else if ($passowrdUC == true) {
            $_SESSION['id']= $row['id'];
            $_SESSION['user'] = $row['username'];
            $_SESSION['email'] = $row['email'];
            header("Location: ../index.php?loginSuccessful");
            exit(); 
        }
    }



} else {
    header("Location: ../index.php?login=unsuccessful");
}
