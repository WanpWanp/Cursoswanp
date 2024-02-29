{
    function toadd() {
        let add = 0;
        for(let i = 0; i < arguments.length; i++) {
            add += arguments[i];
        };
        return add;
    }
}

{
    /*console.log(toadd(1,2,66,7,4,2))*/
}

{
    function printValues(num1,num2) {
        for(let i in arguments) {
            console.log(`Posição no array: ${i}, Valor encontrado na posição: ${arguments[i]}`);
        };
    };
}

{
    /*printValues(5,3,7,9.58);
    console.log("==========================")
    console.log(printValues(toadd(5,6,15,20)));
    console.log(typeof(arguments));*/
}

//Gambiarra 1 para poder definir valores padrões em JavaScript

{
    function toadd2(num1, num2, num3) {
        num1 = num1 || 0;
        num2 = num2 || 1;
        num3 = num3 || 2;

        return num1 + num2 + num3;
    };
}

{
    /*let num1 = 5;
    let num2 = 6;
    let num3 = 10;
    console.log(`A soma de ${5}, ${6} e ${10} é: ${toadd2(5, 6, 10)}`);
    console.log(`A soma de ${num1}, ${num2} e ${num3} é: ${toadd2(num1, num2, num3)}`);
    console.log(`A soma dos valores padrões é: ${toadd2()}`);
    console.log(`A soma dos valores de num1 = ${num1} mais os valores de padrões num2 e num3 é: ${toadd2(num1)}`);
    console.log(`A soma dos valores de num1 = ${num1}, num2 = ${num2} mais o valor de padrão de num3 é: ${toadd2(num1, num2)}`);
    console.log(`A soma dos valores sendo 0 é: ${toadd2(0,0,0)}`);*/
}

//Gambiarra 2 para poder definir valores padrões em JavaScript
{
    function toadd3(num1, num2, num3) {
        num1 = isNaN(num1) ? 0 : num1;
        num2 = isNaN(num2) ? 1 : num2;
        num3 = isNaN(num3) ? 2 : num3;

        return num1 + num2 + num3;
    };
}

{
    /*let num1 = 5;
    let num2 = 6;
    let num3 = 10;
    console.log(`A soma de ${5}, ${6} e ${10} é: ${toadd3(5, 6, 10)}`);
    console.log(`A soma de ${num1}, ${num2} e ${num3} é: ${toadd3(num1, num2, num3)}`);
    console.log(`A soma dos valores padrões é: ${toadd3()}`);
    console.log(`A soma dos valores de num1 = ${num1} mais os valores de padrões num2 e num3 é: ${toadd3(num1)}`);
    console.log(`A soma dos valores de num1 = ${num1}, num2 = ${num2} mais o valor de padrão de num3 é: ${toadd3(num1, num2)}`);
    console.log(`A soma dos valores sendo 0 é: ${toadd3(0,0,0)}`);*/
}

{
    function toadd4(num1 = 0, num2 = 1, num3 = 2) {
        return num1 + num2 + num3;
    };
}

{
    /*let num1 = 5;
    let num2 = 6;
    let num3 = 10;
    console.log(`A soma de ${5}, ${6} e ${10} é: ${toadd4(5, 6, 10)}`);
    console.log(`A soma de ${num1}, ${num2} e ${num3} é: ${toadd4(num1, num2, num3)}`);
    console.log(`A soma dos valores padrões é: ${toadd4()}`);
    console.log(`A soma dos valores de num1 = ${num1} mais os valores de padrões num2 e num3 é: ${toadd4(num1)}`);
    console.log(`A soma dos valores de num1 = ${num1}, num2 = ${num2} mais o valor de padrão de num3 é: ${toadd4(num1, num2)}`);
    console.log(`A soma dos valores sendo 0 é: ${toadd4(0,0,0)}`);
    console.log(`A resposta dos valores sendo diferente de númerico: ${toadd4("a","b","c")}`);
    console.log(`A resposta dos valores sendo diferente de númerico: ${toadd4(true,false,"c")}`);
    console.log(`A resposta dos valores sendo diferente de númerico: ${toadd4(true,false,5)}`);
    console.log(`A resposta dos valores sendo diferente de númerico: ${toadd4(true,toadd,5)}`);
    console.log(`A resposta dos valores sendo diferente de númerico: ${toadd4(true,5, false)}`);
    console.log(true == 1);
    console.log(0 == false);*/
}

{
    function toadd5(num1 = 0, num2 = 1, num3 = 2) {
        if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)) {
            return num1 + num2 + num3;
        } else {
            return `Não foi possível somar ${num1}, ${num2}, ${num3} pois um ou mais não são do tipo númerico`;
        };
    };
}

{
    let num1 = 5;
    let num2 = 6;
    let num3 = 10;
    console.log(`A soma de ${5}, ${6} e ${10} é: ${toadd5(5, 6, 10)}`);
    console.log(`A soma de ${num1}, ${num2} e ${num3} é: ${toadd5(num1, num2, num3)}`);
    console.log(`A soma dos valores padrões é: ${toadd5()}`);
    console.log(`A soma dos valores de num1 = ${num1} mais os valores de padrões num2 e num3 é: ${toadd5(num1)}`);
    console.log(`A soma dos valores de num1 = ${num1}, num2 = ${num2} mais o valor de padrão de num3 é: ${toadd5(num1, num2)}`);
    console.log(`A soma dos valores sendo 0 é: ${toadd5(0,0,0)}`);
    console.log(`A resposta dos valores sendo diferente de númerico: ${toadd5("a","b","c")}`);
    console.log(`A resposta dos valores sendo diferente de númerico: ${toadd5(true,false,"c")}`);
    console.log(`A resposta dos valores sendo diferente de númerico: ${toadd5(true,false,5)}`);
    console.log(`A resposta dos valores sendo diferente de númerico: ${toadd5(true,toadd,5)}`);
    console.log(`A resposta dos valores sendo diferente de númerico: ${toadd5(true,5, false)}`);
    console.log(true == 1);
    console.log(0 == false);
}