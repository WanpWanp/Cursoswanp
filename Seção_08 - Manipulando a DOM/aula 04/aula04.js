/*let iText = document.getElementById('produto');
let spans = document.getElementsByTagName('span');
let span = document.getElementsByClassName('text');
let span1 = document.getElementsByClassName('text')[1];

console.log(iText);
console.log(spans);
console.log(span);
console.log(span[0]);
console.log(span[1].textContent);
console.log(span[2].innerHTML);
span[1].textContent = "Estudo de JavaScript";
span[2].innerHTML = "A mágia da programação";
console.log(span[1].textContent);
console.log(span[2].innerHTML);
console.log(span1.innerHTML);

span1.style.textTransform = 'uppercase';*/

let buscaSelector = document.querySelector('input');
let buscaSelectorAll = document.querySelectorAll('.text');
let btn = document.querySelector('button.btn');
let input = document.querySelector('input[name=produto]');
console.log(buscaSelector);
console.log(buscaSelectorAll);
console.log(buscaSelectorAll[1].innerHTML);
console.log(buscaSelectorAll[2].textContent);

btn.onclick = function alertar() {
    alert('botão clicado \n Seu texto do input é ' + input.value);
};


btn.onmouseover = function() {
    let colors = ['green' , 'black', 'blue', 'purple', 'yellow', 'orange', 'red', 'white', 'Greenish yellow'];
    const number = Math.floor((Math.random() * colors.length));
    const numbers = number + 1;

    document.body.style.backgroundColor = colors[number];
};