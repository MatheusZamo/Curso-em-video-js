let numero = document.querySelector('#input');
const btnInserir = document.querySelector('#btnInserir');
let campo = document.querySelector('#select');
const btnFinalizar = document.querySelector('#btnFinalizar');
let resultado = document.querySelector('#resul');
let numeros = [];

btnInserir.addEventListener('click',insiraNumero);

function insiraNumero(){
    let num = Number(numero.value);
    if(num <=0 || num >100){
        alert('[ERROR] Verifique o numero inserido');
    }
    else if( numeros.indexOf(num) != -1){
        alert('[ERROR] O numero ja existe na lista')
    }else{
        numeros.push(num);
        const item = document.createElement('option');
        item.textContent = `Valor ${num} inserido`;
        campo.appendChild(item);
    }
    numero.value='';
    numero.focus();
    resultado.innerHTML ='';

}

btnFinalizar.addEventListener('click',valoresFinais)

function valoresFinais(){
   if(numeros.length == 0){
       alert('[ERROR] insira numeros na lista')
   } else{
       let total = numeros.length;
       let menor = numeros[0];
       let maior = numeros[0];
       let soma = 0;
       let media = 0;

       for(let i =0;i<numeros.length;i++){
           soma += numeros[i]
           console.log(soma)
           if(numeros[i]< menor){
               menor = numeros[i]
           }
           if(numeros[i] > maior){
               maior = numeros[i]
           }
       }

       media = soma/total
      resultado.innerHTML +=`<p>O total de valores na lista são ${total} numeros<p/>`
      resultado.innerHTML += `<p>O menor valor da lista e o numero ${menor}<p/>`
      resultado.innerHTML += `<p>O maior valor da lista e o numero ${maior}<p/>`
      resultado.innerHTML += `<p>A soma dos valores e  ${soma}<p/>`
      resultado.innerHTML += `<p>A media dos valores e ${media}<p/>`
   }
}