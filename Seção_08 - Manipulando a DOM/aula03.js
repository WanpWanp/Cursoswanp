
function showAlert() {
    alert('Botão foi clicado')
};

function strongAlert(element) {
    element.innerHTML = "Último aviso, <b>Não clique no botão</b>";
}

function changeInfo(element) {
    let textspan = document.getElementById('info');
    console.log(textspan);
    textspan.innerText = "Quanta Desobediência, clicou no botão";
}
 function changeBGColor() {
    let colors = ['green' , 'black', 'blue', 'purple', 'yellow', 'orange', 'red', 'white', 'Greenish yellow'];
    const number = Math.floor((Math.random() * colors.length));
    const numbers = number + 1;

    document.body.style.backgroundColor = colors[number];
    console.log("QTD itens array " + colors.length)

    console.log(numbers + " - " + colors[number]);
 }

 function toWriteText(input) {
    let span = document.getElementById('text');

    span.innerHTML = input.value ;
 }