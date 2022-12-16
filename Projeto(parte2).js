let nome = document.querySelector('#nome')

let senha = document.querySelector('#senha')

let botao = document.querySelector('#botao')

let img = document.querySelector('#img')

botao.addEventListener("click", function () {
    if (nome.value === "Dan Salvato" && senha.value === "Ddlc") {
        if (img.style.display == "none") {

            img.style.display = "block"

        }
        else{

            img.style.display = "none"
        }
    }

   
})

