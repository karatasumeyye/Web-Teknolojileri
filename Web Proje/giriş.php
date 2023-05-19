<?php
// Kullanıcı adı ve şifreyi PHP kodunda tanımlayın
$storedUsername = "b221210005@sakarya.edu.tr";
$storedPassword = "b221210005";

// Login sayfasından kullanıcı adı ve şifreyi alın
$username = $_POST['username'];
$password = $_POST['password'];

// Kullanıcı adı ve şifrenin boş olup olmadığını kontrol edin
if (empty($username) || empty($password)) {
  // Eğer kullanıcı adı veya şifre boşsa, hata mesajıyla birlikte login sayfasına yönlendirin
  header('Location: Giriş.html?error=empty');
  exit;
}

// Kullanıcı adı ve şifreyi kontrol edin
if ($username === $storedUsername && $password === $storedPassword) {
  // Login işlemi başarılı olduğunda hoş geldiniz mesajını göstermek için bir değişken tanımlayın
  $welcomeMessage = "Hoş geldiniz, $username!";
  
  // Hoş geldiniz mesajıyla birlikte post edilen sayfada gösterin
  echo "<h2>$welcomeMessage</h2>";
} else {
  // Kullanıcı adı veya şifre yanlışsa, hata mesajıyla birlikte login sayfasına yönlendirin
  header('Location: Giriş.html?error=incorrect');
  exit;
}
?>


  