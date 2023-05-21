<?php
// Kullanıcı adı ve şifreyi tanımlayın
$storedUsername = "b221210005@sakarya.edu.tr";
$storedPassword = "b221210005";

// POST verilerini alın
$username = $_POST['email'];
$password = $_POST['password'];

// Kullanıcı adı ve şifre doğrulaması yapın
if ($username === $storedUsername && $password === $storedPassword) {
    // Giriş başarılı olduğunda hoşgeldin sayfasına yönlendirin
    header('Location: hosgeldin.php');
    exit;
} else {
    // Giriş başarısız olduğunda hata mesajıyla birlikte giriş sayfasına yönlendirin
    header('Location: Giriş.html?error=incorrect');
    exit;
}
?>



  