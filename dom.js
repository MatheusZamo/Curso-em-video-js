const titulo = document.querySelector('#titulo')
titulo.style.color = 'yellow'
titulo.style.fontSize = '50px'
titulo.style.background = 'green' 
titulo.textContent = 'D.O.M'

const paragrafo1 = document.querySelector('#paragrafo1')
paragrafo1.innerHTML = 'Isso não e tão dificil assim'
paragrafo1.style.fontSize = '20px'
paragrafo1.style.fontWeight = 'bold'

const paragrafo2 = document.querySelector('#paragrafo2')
paragrafo2.style.fontFamily = 'cursive'
paragrafo2.innerText = 'O segredo e .... Praticar'

const div = document.querySelector('#bloco')
div.style.color='white'
div.style.fontSize = '20px'
div.textContent = 'Interaja...'
div.style.width = '200px'
div.style.height = '200px'
div.style.background = 'green'
div.style.lineHeight = '200px'
div.style.textAlign = 'center'


div.addEventListener('mouseenter',entrou)
div.addEventListener('mouseout',saiu)
div.addEventListener('click',clicou)

function entrou(){
    div.textContent = 'Entrou'
}
function saiu(){
    div.textContent = 'Saiu'
}
function clicou(){
    div.textContent = 'Clicou'
    div.style.background = 'red'
}

const numero1 = document.querySelector('#num1')
const numero2 = document.querySelector('#num2')
const resultado = document.querySelector('#res')
const botao = document.querySelector('#btn')

botao.addEventListener('click',soma)

function soma(){
    const valor1 = parseInt(numero1.value)
    const valor2 = parseInt(numero2.value)
    
    const soma = valor1 + valor2
    resultado.textContent = `O resultado de ${valor1} + ${valor2} e ${soma}`
}


