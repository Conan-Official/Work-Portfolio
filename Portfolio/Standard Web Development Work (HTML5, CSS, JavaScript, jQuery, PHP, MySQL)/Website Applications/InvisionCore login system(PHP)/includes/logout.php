<?php

if (isset($_SESSION['id'])) {
    echo " <nav class = 'top_nav'>
    <ul>
         <img class ='logo' src='./img/invisioncore12.png' alt='sublogo'/>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Support</li>
    </ul>
</nav>";
} else {
   echo "not logged out"; 
}