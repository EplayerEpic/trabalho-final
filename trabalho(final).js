var Ddlc = prompt("Digite algo para continuar")

if (Ddlc == "Diego") {

    let div = document.createElement('div')

    div.insertAdjacentHTML("beforeend", "<a href = EasterEgg.html> ...")

    document.body.appendChild(div)



}


else if (Ddlc == "Monitores") {

    let div = document.createElement('div')

    div.insertAdjacentHTML("beforeend", "<a href = Obrigado.html> ...")

    document.body.appendChild(div)





}

else {

    alert("Ok pode continuar!")

}