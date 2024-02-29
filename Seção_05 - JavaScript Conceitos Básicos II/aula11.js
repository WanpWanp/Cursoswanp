try {
    console.log(nome);
}catch {
    console.log(`Não foi encontrado nome.`);
};
//console.log(nome);

console.log("Olá mundo...........");

function toDivide(num1, num2) {
    if(num1 === 0 || num2 === 0) {
        throw("Os valores devem ser positivos")
    } else {
        return num1 / num2;
    }
}

try {
    let ret = toDivide(8,0);
    console.log(ret); 
} catch {
    console.log("Não é possivel realizare a divisão que deseja, revise seus números.")
} finally {
    console.log("Hora de codar");
}


