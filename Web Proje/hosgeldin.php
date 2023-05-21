<?php
// Kullanıcı adını alın
$username = $_POST['username'];

// Hoşgeldin mesajını oluştur
$welcomeMessage = "Hoşgeldin, " . $username . "!";

// Hoşgeldin mesajını göster
echo "<h2>" . $welcomeMessage . "</h2>";
?>