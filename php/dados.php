<?php
    $GLOBALS['url'] = "https://api.openweathermap.org/data/2.5/weather?q=Osasco&units=metric&appid=acaa4fb70c1dcd3b8897305815823f7f";
    $GLOBALS['resultado'] = json_decode(file_get_contents($GLOBALS['url']));

    echo getTemp();
    echo getIcon();
    echo getDateToday();

    function getTemp(){
        return $temp = $GLOBALS['resultado']->main->temp;
    }

    function getIcon(){
        $icon = $GLOBALS['resultado']->weather[0]->icon;
        $url_icon = "http://openweathermap.org/img/wn/$icon@2x.png";
        return $img = "<img src='$url_icon'/>"; 
    }

    function getDateToday(){
        $d = date("d");
        $m = date("m");
        if($m == '01'){
          $m = 'Janeiro';
        }
        if($m == '02'){
          $m = 'Fevereiro';
        }
        if($m == '03'){
          $m = 'Março';
        }
        if($m == '04'){
          $m = 'Abril';
        }
        if($m == '05'){
          $m = 'Maio';
        }
        if($m == '06'){
          $m = 'Junho';
        }
        if($m == '07'){
          $m = 'Julho';
        }
        if($m == '08'){
          $m = 'Agosto';
        }
        if($m == '09'){
          $m = 'Setembro';
        }
        if($m == '10'){
          $m = 'Outubro';
        }
        if($m == '11'){
          $m = 'Novembro';
        }if($m == '12'){
          $m = 'Dezembro';
        }
        $y = date("Y");
        return $date = "$d de $m de $y";
    }

?>