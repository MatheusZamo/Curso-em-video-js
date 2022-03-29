const numero = document.querySelector('#num');
const selecao = document.querySelector('#sel');
const botao = document.querySelector('#btn');


function multiplica(){
    const num = Number(numero.value)

    if(num.length == 0){
        alert('[ERROR] insira um valor')
    }else

        selecao.innerHTML=''
        for(let i = 1;i <= 10;i++){
            let item = document.createElement('option')
            item.text = `${i} x ${num} = ${num*i}`
            selecao.appendChild(item)
        }
}
botao.addEventListener('click',multiplica)