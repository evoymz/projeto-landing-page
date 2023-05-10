var setaDireita = document.getElementById("setaDireita");
var setaEsquerda = document.getElementById("setaEsquerda");

var Samantha = document.getElementById("samantha");
var Leonardo = document.getElementById("leonardo");
var Bruna = document.getElementById("bruna");

function rightRow() {
    Bruna.style = "display:none";
    Samantha.style = "display:flex";
    setaDireita.style = "display:none";
    setaEsquerda.style = "display:flex";
}

function leftRow() {
    Samantha.style = "display:none"
    Bruna.style = "display:flex";
    setaDireita.style = "display:flex";
    setaEsquerda.style = "display:none";

}