let inicio = document.querySelector('#inicio');
let passos = document.querySelector('#passos');
let final = document.querySelector('#final');
const btn = document.querySelector('#btn');
let resultado = document.querySelector('#resultado');



function verificaPassos(){

  if(inicio.value.length == 0 || passos.value.length == 0 || final.value.length == 0 ){
    resultado.innerHTML = 'Impossivel contar, preencha todos os campos'
  }else{
    resultado.innerHTML = 'Contando: '
    let ini = Number(inicio.value);
    let p = Number(passos.value);
    let f = Number(final.value);

    if(ini > f){
      //Decrescente
      for(let i=ini;i>=f;i-=p){
        resultado.innerHTML += `\u{1F449} ${i}`
      }

    }else{
      //Crescente
      for(let i=ini;i <=f;i+= p){
        resultado.innerHTML += `\u{1F449} ${i}`
      }
    }
  resultado.innerHTML +=`\u{1F3C1}`
  }
}

btn.addEventListener('click',verificaPassos)
