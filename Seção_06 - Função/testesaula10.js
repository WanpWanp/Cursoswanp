/*let variable = 'global';

function printer() {
    console.log(variable);
};

function outherPrinter() {
    let variable = 'local';
    console.log(variable);
    printer();
};

outherPrinter();*/

let variable = 'global';

function externall() {
    let variable = 'local';

    function internal() {
        return variable;
    }
    return internal;
};

let toExcute = externall();
console.log(toExcute());