// * Objeto através de factory function

const person1 = (name, surname) => {
    return {
        toWalk: () => console.log(`${name} ${surname} está andando.`)
    };
};

const p1 = person1('Willian', 'Nogueira');
console.log(p1);
//console.log(typeof(p1));
//p1.toWalk();
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");

// * Criando atavés de uma função contrutora

function Person2(name, surname) {
    this.name = name;
    this.surname = surname;

    this.toWalk = function() {
        console.log(`${this.name} ${this.surname} está andando.`);
    };
};
const p2 = new Person2('Axl', 'Pacheco')
console.log(p2);
//console.log(typeof(p2));
//p2.toWalk();
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");

// Criando obbjeto através de uma classe

class Person3 {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    };

    toWalk() {
        console.log(`${this.name} ${this.surname} está andando.`);
    };
};

const p3 = new Person3('Neo', "Theone");
console.log(p3);
//console.log(typeof(p3));
//p3.toWalk();