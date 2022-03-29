const imagem = document.querySelector("#img");
const horas = document.querySelector("#hora");

let hora = new Date().getHours();
if(hora < 10){
    hora =`0${hora}`;
}
const mensagem = horas.textContent = `Agora são ${hora} horas`; 

    
function AdicionaImg(){
    if(hora >= 0 && hora <= 12){
        imagem.src = './img/dia.jpg';
        document.body.style.background = '#e2cd9f';
    }
    else if(hora > 12 && hora <= 18){
        imagem.src = './img/tarde.jpg';
        document.body.style.background = '#b9846f';
    }
    else {
        imagem.src ='./img/noite.jpg';
        document.body.style.background = '#515154';
    }
}

window.onload = AdicionaImg