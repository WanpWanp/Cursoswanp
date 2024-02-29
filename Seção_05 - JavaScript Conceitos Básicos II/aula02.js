/*var nameS = new Array("JorgeS", "DaviS", "CristinaS", "PamelaS");
var names = ["Jorge", "Davi", "Cristina", "Pamela"];
var idade = [1,6,7,9,13,25,52,16,32,88];
var precos = [15.58,16.88,9.99,1.98,17]
console.log(nameS);
console.log(typeof(nameS));

console.log(names.length);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

//Alterar o valor a partir do indice

names[3] = "Julia";
console.log(names);
nameS[15] = "Erica";

console.log(nameS);
console.log(names[7]);
console.log(names[7] == undefined ? names[7] = "Luiza": names[7]);
console.log(names[7]);


//inserir no final do array
console.log(nameS);
console.log(nameS.length);
nameS.push("Edigar");

console.log(nameS);
console.log(nameS.length);
console.log(nameS.sort());

precos.sort(function(a,b) {return a - b;});
console.log(precos);

idade.sort(function(a,b) {return a - b;});
console.log(idade);
delete idade[2];
console.log(idade);
idade[2] = 21;
console.log(idade);
idade.splice(2,1);
console.log(idade);


idade.splice(2, 2, 87, 73);
idade.sort(function(a,b) {return a - b;})
console.log(idade);

for(var i =0; i < idade.length; i++) {
    console.log(idade[i]);
};
console.log(idade)
idade.pop();
console.log(idade)
var retorno = idade.pop();
console.log(retorno);
console.log(idade);

idade.shift();
console.log(idade);
var retornoShift = idade.shift();
console.log(retornoShift);
console.log(idade);

idade.unshift(1);
console.log(idade);

console.log(idade);
var novo = idade.slice(3);
console.log(novo);

var novos = idade.slice(3, 6);
console.log(novos);

var pares = [2,4,6,8,0];
var impares = [1,3,5,7,9];

var rest = pares.concat(impares);
console.log(rest.sort(function(a,b) {return a - b;}));

*/
var tabuleiro = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
console.log(tabuleiro);
console.log(tabuleiro[0][0]);
console.log(tabuleiro[0][1]);
console.log(tabuleiro[0][2]);
console.log(tabuleiro[0][3]);
console.log(tabuleiro[1][0]);
console.log(tabuleiro[1][1]);
console.log(tabuleiro[1][2]);
console.log(tabuleiro[1][3]);
console.log(tabuleiro[2][0]);
console.log(tabuleiro[2][1]);
console.log(tabuleiro[2][2]);
console.log(tabuleiro[2][3]);
console.log(tabuleiro[3][0]);
console.log(tabuleiro[3][1]);
console.log(tabuleiro[3][2]);
console.log(tabuleiro[3][3]);