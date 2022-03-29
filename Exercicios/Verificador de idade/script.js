const anoDigitado = document.querySelector('#anoNascimento');
const botao = document.querySelector('#btn');
const resultado = document.querySelector('#resultado');
const sexo = document.getElementsByName('sex');
const div = document.querySelector('#div')


function verificaDados(){
    const anoAtual = new Date().getFullYear();

    if(anoDigitado.value <= 1900 || anoDigitado.value > anoAtual){
       alert('[Error] verifique o ano informado')
       anoDigitado.value = ''
       return
    }

    const idade = anoAtual - anoDigitado.value  ;

    const imagem = document.createElement('img')
    imagem.setAttribute('id','foto')

    let genero = ''

    if(sexo[0].checked){
        genero = 'Homem'
        if(idade < 3){
            imagem.setAttribute('src','./img/bebe(o).jpg')
        }else if(idade < 6){
            imagem.setAttribute('src','./img/criança(o).jpg')
        }
        else if(idade < 18){
            imagem.setAttribute('src','./img/adolecente.jpg')
        }
        else if(idade < 45){
            imagem.setAttribute('src','./img/adulto.jpg')
        }
        else{
            imagem.setAttribute('src','./img/senhor.jpg')
        }
    }else if(sexo[1].checked){
        genero = 'Mulher'
        if(idade < 3){
            imagem.setAttribute('src','./img/bebe(a).jpg')
        }else if(idade < 6){
            imagem.setAttribute('src','./img/criança(a).jpg')
        }
        else if(idade < 18){
            imagem.setAttribute('src','./img/adolescente(a).jpg')
        }
        else if(idade < 45){
            imagem.setAttribute('src','./img/adulta.jpg')
        }
        else{
            imagem.setAttribute('src','./img/senhora.jpg')
        }
    }

    resultado.textContent =`Detectamos ${genero}, com ${idade} anos`
    resultado.appendChild(imagem)
}

botao.addEventListener('click',verificaDados);
