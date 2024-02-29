let btn = document.querySelectorAll('#soma');
let btnPrevia = document.querySelectorAll('#vPrevia');
let input = document.querySelectorAll('input');

input.forEach(input => {
    input.oninput = function limitarLength() {
        if(input.value.length > input.maxLength) {
            input.value = input.value.slice(0, input.maxLength);
        };
    };
});


input.forEach(input => {
    input.addEventListener("keydown", function(e) {
        //const a = e.key;
        console.log("Teste du carai");
        if(!input.oninput) {
            e.preventDefault()
        };
    });
});
input.oninput = function checkChar(e) {
    const char =  String.fromCharCode(e.key);
    const pattern = [0-9];
    console.log(e.key);
    
    if(char.match(pattern)) {
        console.log("aqui é " + char);
         return true;
    };

};


function somar() {
    let soma = parseInt(input[0].value) + parseInt(input[1].value) + parseInt(input[2].value) + parseInt(input[3].value) + parseInt(input[4].value);
    document.querySelector('#resultado').innerHTML = soma;
    console.log(soma);
}

function mostarPrevia() {
    for(var i = 0; i < input.length; i++) {
        console.log("Input" + i + " - " + input[i]);
    }
    let previa = 20000 + (parseInt(num1.value) - 2);
    console.log("O valor digitado foi: " + previa)
    console.log(previa);
    alert(`Resultado final será: ${previa}`);
}

function toWriteText(input) {
    let span = document.getElementById('resultado');

    span.innerHTML = input.value ;
 }

 function limitar(input) {
    if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
 }



/*let input = document.querySelectorAll('input');
let soma = 0;

btn.onclick = function somar(num1,num2,num3,num4,num5) {
    for ( var i = 0; i < input.length; i++ ){
        
        soma += input[i];
    }
    //console.log(somar(inputUser[0], inputUser[1], input[0], inputUser[2], inputUser[4]));
    
    //return (num1 + num2 + num3 + num4 + num5);
    return soma;
}





console.log(soma);*/
/*console.log(inputUser);*/

/*let contarCaracteres = function contarCaracteres() {
    console.log('Contador');
};
inputUser[0].onkeypress = contarCaracteres;
inputUser[1].onkeypress = contarCaracteres;
inputUser[2].onkeypress = contarCaracteres;
input[2].onkeypress = contarCaracteres;
input[4].onkeypress = contarCaracteres;


let num1 = input_[0].value;
let num2 = input_[1].value;
let num3 = input_[2].value;
let num4 = input_[3].value;
let num5 = input_[4].value;
console.log("Aqui num1: " + num1);
console.log("Aqui num2: " + num2);
console.log("Aqui num3: " + num3);
console.log("Aqui num4: " + num4);
console.log("Aqui num5: " + num5);
console.log(input);





console.log(somar(num1,num2,num3,num4,num5));
*/