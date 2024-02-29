let to_add = function toAdd(num1, num2) {
    let add = `Vai ser realizado a operação: Soma.  ${num1} + ${num2} = ${num1 + num2}`;
    return add;
};
let to_sub = function toSub(num1, num2) {
    let sub = `Vai ser realizado a operação: Subtração. ${num1} - ${num2} = ${num1 - num2}`;
    return sub;
};
let to_mult = function toMult(num1, num2) {
    let mult = `Vai ser realizado a operação: Multiplicação. ${num1} * ${num2} = ${num1 * num2}`;
    return mult;
};
let to_div = function toDiv(num1, num2) {
    let div = `Vai ser realizado a operação: Divisão. ${num1} / ${num2} = ${Math.floor(num1 / num2)}`;
    return div;
};
let to_mod = function(num1, num2) {
    let mod = `Vai ser realizado a operação: Modulo de divisão (resto da divisão). ${num1} % ${num2} = ${num1 % num2}`;
    return mod;
};


let to_MultTable = function multiplicationTable(num1, num2, function_1, function_2, function_3, function_4, function_5) {
    return `${function_1(num1, num2)} \n${function_2(num1, num2)} \n${function_3(num1, num2)} \n${function_4(num1, num2)} \n${function_5(num1, num2)}`;
};
console.log(to_MultTable(9,5, to_add, to_sub, to_mult, to_div, to_mod));
console.log("======================================================================================");

let to_div2 = function toDiv(num1, num2) {
    let div = `Vai ser realizado a operação: Divisão. ${num1} / ${num2} = ${Math.floor(num1 / num2)}`;
    let res = Math.floor(num1 / num2);
    let resu = res * num2;
    let resreu = num1 % num2;
    let resusres = num1 - num2;
    let res2 = resusres / num2;
    let final = res + res2;
    console.log(`Teste com resu: ${num1} / ${num2} = ${res}, resto ${resreu} -> ${num1} - ${num2} = ${resusres} \n${resusres} / ${num2} = ${res2} \nResultado final ${final} sem resto.`);
    return div;
};
to_div2(9,5);