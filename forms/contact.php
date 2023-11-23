<?php
/**
* Requires the "PHP Email Form" library
* The "PHP Email Form" library is available only in the pro version of the template
* The library should be uploaded to: vendor/php-email-form/php-email-form.php
* For more info and help: https://bootstrapmade.com/php-email-form/
*/

// Ganti contact@example.com dengan alamat email penerima yang sebenarnya
$receiving_email_address = 'takumiharu25@gmail.com';

// Pastikan path ke PHP Email Form Library sudah benar
if (file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php')) {
  include($php_email_form);
} else {
  die('Unable to load the "PHP Email Form" Library!');
}

// Inisialisasi objek PHP_Email_Form
$contact = new PHP_Email_Form;
$contact->ajax = true;

// Set properti objek PHP_Email_Form
$contact->to = $receiving_email_address;
$contact->from_name = $_POST['name'];
$contact->from_email = $_POST['email'];
$contact->subject = $_POST['subject'];

// Uncomment kode di bawah jika ingin menggunakan SMTP untuk mengirim email. Isi dengan kredensial SMTP yang benar
/*
$contact->smtp = array(
  'host' => 'example.com',
  'username' => 'example',
  'password' => 'pass',
  'port' => '587'
);
*/

// Tambahkan pesan-pesan ke objek PHP_Email_Form
$contact->add_message($_POST['name'], 'From');
$contact->add_message($_POST['email'], 'Email');
$contact->add_message($_POST['message'], 'Message', 10);

// Kirim email dan cetak hasilnya
echo $contact->send();
?>
