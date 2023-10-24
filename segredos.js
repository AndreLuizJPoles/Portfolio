var minhaFoto = document.getElementById("minha-foto");
var cartas = document.getElementById("cartas");
var cont = 0;
var i = 0;

minhaFoto.addEventListener("click", fotoSegredo);
cartas.addEventListener("click", carta)

function fotoSegredo() {
    cont++;
    if (cont >= 5) {
        minhaFoto.src = "./imgs/akechi.png"
    }
}

function carta() {
    i++;
    if (i >= 10) {
        window.location.assign("./segredo.html");
    }
}

