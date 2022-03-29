const campo = document.querySelector('#campo')
const botao = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')



botao.addEventListener('click',seuPais)

function  seuPais(){
const pais = campo.value
console.log(pais)
if(pais == 'Brasil'){
    resultado.textContent = `Seu pais é ${pais} você e brasileiro`
}else{
    resultado.textContent = `Seu pais é ${pais} você e extrangeiro`
}
}