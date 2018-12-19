<?php

$img = $_POST['data'];
$name = $_POST['name'];

$img = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $img));

file_put_contents('../tmp/postcard'.$name.'.png', $img);
?>
