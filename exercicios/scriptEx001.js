(function(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');

    var data = new Date();
    var hora = data.getHours();
    //var hora = Number(prompt("Que horas são?"));
    msg.innerHTML = `Agora são ${hora} horas.`;

    if(hora >= 0 && hora < 12){
        img.src = "/images/manha-260x260.png";
        document.body.style.background = '#ffdb00';
    } else if (hora >= 12 && hora <= 18){
        img.src = '/images/tarde-250x250.png';
        document.body.style.background = '#c67b5c';
    } else {
        img.src = '/images/noite-250x250.png';
        document.body.style.background = '#13243e';
    }
})();