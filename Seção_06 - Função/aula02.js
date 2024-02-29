{
    function add(num1, num2) {
        return `A soma de ${num1} e ${num2} é: ${num1 + num2}`;
    };
    
}

{
    /*const toExecute = add;
    let addnum  = add(4,5);
    console.log(addnum);
    console.log(add(5,3));
    console.log(toExecute(8,15));*/
}

{
    function subtract(num1, num2) {
        return `A subtração de ${num1} e ${num2} é: ${num1 - num2}`;
    };
}

{
    function doSomething (num1, num2, function_) {
        return function_(num1,num2);
    };
}

{
    /*console.log(doSomething(20,50, add));
    console.log(doSomething(50,30, subtract));*/
}

{
    function theOther(x) {
        return x;
    };
}

{
    /*const ret = theOther(subtract);
    console.log(ret(25,20));*/
}

function milSete() {
    for(let i = 1000; i > 0;) {
        let response = (`Quanto é ${i} - 7? `);
        if(response === i-7) {
            console.log("Acertou miserávi");
        }
        i-=7;
    };
    return milSete;
}

milSete();

/*{
    function mensage() {
        console.log("Olá mundo!!!!")
    };
}

{
    mensage();
}*/

{
    let values = [1, 34.4, true, add];

    for(let i = 0; i <values.length; i++) {
        console.log(`"${values[i]}" é do tipo: ${typeof(values[i])}`);
    };
}