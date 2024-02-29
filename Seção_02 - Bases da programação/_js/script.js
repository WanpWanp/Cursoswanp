function gritar() {
    alert("Vai a merda! pq clicou?");
}
function perguntar() {
    var name;
    name = prompt("Qual seu nome? ");
    alert(`Olá Sr(a). ${name}`);
}

function mudartexto() {
    var h1 = document.getElementsByTagName("h1");
    if(h1[0].innerHTML == "TecGuilty") {
        h1[0].innerHTML = "TecGuilty Tecnologia";
        h1[1].innerHTML = "TecGuilty"
    } else {
        h1[0].innerHTML = "TecGuilty";
        h1[1].innerHTML = "";
    }

}