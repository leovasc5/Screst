setInterval(function() {
    update();
  }, 1000);

function update(){
    var img = document.querySelector('#img');
    var msg = document.querySelector('#msg');
    var body = document.querySelector('#body');
    var titulo = document.querySelector('#tit');
    var fundo = document.querySelector('.time');

    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();
    if(String(segundo).length == 1){
        segundo = '0'+segundo;
    }
    if(String(minuto).length == 1){
        minuto = '0'+minuto;
    }
    if(String(hora).length == 1){
        hora = '0'+hora;
    }
    msg.innerText = hora +':' + minuto + ':' + segundo;

    if((hora >= 0) && (hora < 6)){
        img.src = 'img/madrugada.png';
        body.style.backgroundColor = '#353839';
        titulo.innerText = 'Boa madrugada!';
        titulo.style.color = '#f4f4f4';
        fundo.style.color = '#ffffff';
        fundo.style.backgroundColor = '#065753';
    }else if((hora >= 6) && (hora < 12)){
        img.src = 'img/manha.png';
        body.style.backgroundColor = '#87CEFA';
        titulo.innerText = 'Boa dia!';
        fundo.style.color = '#000';
        fundo.style.backgroundColor = '#67BA3F';
    }else if((hora >= 12) && (hora < 18)){
        img.src = 'img/tarde.png';
        body.style.backgroundColor = '#00BFFF';
        titulo.innerText = 'Boa tarde!';
        fundo.style.color = '#000';
        fundo.style.backgroundColor = '#00DAAB';
    }else if((hora >= 18) && (hora < 24)){
        img.src = 'img/noite.png';
        body.style.backgroundColor = '#080C2C';
        titulo.innerText = 'Boa noite!';
        titulo.style.color = '#f4f4f4';
        fundo.style.color = '#ffffff';
        fundo.style.backgroundColor = '#053E4D';
    }

}

/*Criado por Leonardo Vasconcelos Paulino 
github: https://github.com/leovasc5 || instagram: @leovasc5 */