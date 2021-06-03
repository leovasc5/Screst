
<?php

$url = "https://api.openweathermap.org/data/2.5/weather?q=Osasco&appid=acaa4fb70c1dcd3b8897305815823f7f";
$resultado = json_decode(file_get_contents($url));
print_r($resultado->weather);
echo '<hr>';
print_r($resultado);

// foreach($resultado->results as $clima){
//     print_r($clima);
// }


?>