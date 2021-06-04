<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="30">
    <link rel='stylesheet' href='css/main.css'>
    <script src='js/main.js'></script>
    <link href="img/time.ico" type="image/x-icon" rel="icon"/>
    <title>Screst</title>
</head>
<body id='body'>
    <header>
        <h1 id='tit'>Screst</h1>
    </header>
        
    <section class="time">
        <h3><div id='msg'>
            Carregando...
        </div></h3>
        <?php
            include "php/dados.php";
            echo getDateToday().'<hr>';
            echo getIcon().'<br>';
            echo '<b>'.getTemp().'ºC</b><br>';
            echo getCity();
        ?>
        <div id='foto'>
            <img id='img' width='30%'>
        </div>
    </section>

</body>
</html>

<!-- Criado por Leonardo Vasconcelos Paulino -->
<!-- github: https://github.com/leovasc5 || instagram: @leovasc5 -->
