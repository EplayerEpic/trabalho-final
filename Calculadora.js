const Numero1 = document.querySelector('#Numero1');
const Numero2 = document.querySelector('#Numero2');
const Resultado = document.querySelector("#resultado")
let botao1 = document.querySelector("#Botao1");

botao1.onclick = Adicao;


function Adicao() {

    var n1 = Number(Numero1.value)
    var n2 = Number(Numero2.value)

    Resultado.innerHTML = n1 + n2;
}

let botao2 = document.querySelector("#Botao2");

botao2.onclick = Subtração;


function Subtração() {

    var n1 = Number(Numero1.value)
    var n2 = Number(Numero2.value)

    Resultado.innerHTML = n1 - n2;
}

let botao3 = document.querySelector("#Botao3");

botao3.onclick = Multiplicação;


function Multiplicação() {

    var n1 = Number(Numero1.value)
    var n2 = Number(Numero2.value)

    Resultado.innerHTML = n1 * n2;
}


let botao4 = document.querySelector("#Botao4");

botao4.onclick = Potencialização;


function Potencialização() {

    var n1 = Number(Numero1.value)
    var n2 = Number(Numero2.value)

    Resultado.innerHTML = n1 ** n2;
}

let botao5 = document.querySelector("#Botao5");

botao5.onclick = Divisão;


function Divisão() {

    var n1 = Number(Numero1.value)
    var n2 = Number(Numero2.value)

    Resultado.innerHTML = n1 / n2;
}



var botao = document.querySelector("#Misterio")

botao.addEventListener("click",function(){

let div = document.createElement("div")

div.insertAdjacentHTML("beforeend", '<a href = Projeto(parte2).html> . . . ')

document.body.appendChild(div)





} )




