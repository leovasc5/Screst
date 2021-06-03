setTimeout(function() {
    location.reload();
  }, 30000);

function carregar(){
    var img = document.getElementById('#img');
    var msg = document.querySelector('#msg');
    var body = document.getElementById('body');
    var titulo = document.getElementById('tit');

    var data = new Date();
    var hora = data.getHours();
    msg.innerText = 'Agora são: ' + hora +' horas';

    if((hora >= 0) && (hora < 6)){
        img.src = '../img/madrugada.png';
        body.style.backgroundColor = '#353839';
        titulo.innerText = 'Boa madrugada!';
        titulo.style.color = '#f4f4f4';
    }else if((hora >= 6) && (hora < 12)){
        img.src = '../img/manha.png';
        body.style.backgroundColor = '#87CEFA';
        titulo.innerText = 'Boa dia!';
    }else if((hora >= 12) && (hora < 18)){
        img.src = '../img/tarde.png';
        body.style.backgroundColor = '#00BFFF';
        titulo.innerText = 'Boa tarde!';
    }else if((hora >= 18) && (hora < 24)){
        img.src = '../img/noite.png';
        body.style.backgroundColor = '#080C2C';
        titulo.innerText = 'Boa noite!';
        titulo.style.color = '#f4f4f4';
    }
}

/*Criado por Leonardo Vasconcelos Paulino 
github: https://github.com/leovasc5 || instagram: @leovasc5 */
