/*var pares = [2,4,6,8,0];
var impares = [1,3,5,7,9];

//console.log(pares);
var toBend = pares.map(function(valor) {
    return valor * 2;
});
//console.log(toBend);

//console.log(impares);
var concatenartoBend = impares.concat(pares).map(function(valor) {
    return valor * 2;
});

//console.log(concatenartoBend);
console.log(pares);
var toBends = function toBend(valor) {
    return valor * 2;
};

var add = function add(valor) {
    return valor + 4;
};

function toDivide(valor) {
    return valor / 5;
};

var result = pares.map(toBends).map(add).map(toDivide);
//console.log(result);

var pair = pares.concat(impares);
console.log(pair);
function filterPairs(n){
    return n % 2 === 0;
};

var odd = impares.concat(pares);
console.log(odd);
function filterOdd(n){
    return n % 2 !== 0;
};


function filter_5(n){
    return n % 5 === 0;
};


var retOdd = odd.filter(filterOdd);
console.log("Impares: " + retOdd);

var retPair = pair.filter(filterPairs);
console.log("Pares: " + retPair);

var ret_5 = pair.filter(filter_5);
console.log("Multiplos de 5: " + ret_5)
console.log(ret_5);*/

var alunos = [
    {nome:"Joaquim", nota:8.5},
    {nome:"Joice", nota: 10},
    {nome:"Patricia", nota: 9.2},
    {nome:"João", nota:5.5},
    {nome:"Andros", nota:4},
];
function filter_Up_8(aluno) {
    return aluno.nota > 8;
}
var filters = alunos.filter(filter_Up_8)
console.log(filters);