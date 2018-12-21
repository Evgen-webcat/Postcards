<?php

$img = $_POST['data'];
$name = $_POST['name'];

$img = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $img));

$savePic = file_put_contents('../tmp/postcard'.$name.'.png', $img);

print_r($savePic);
?>
