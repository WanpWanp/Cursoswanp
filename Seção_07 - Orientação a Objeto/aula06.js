{
    class Person {
        constructor(name, surname) {
            this._name = name;
            this._surname = surname;
        };

        get name() {
            return this._name;
        };

        get surname() {
            return this._surname;
        };
        
        set name(name) {
            this._name = name;
        };

        set surname(surname) {
            this._surname = surname;
        };

        toSpeak(msg) {
            console.log(`${this.name} diz ${msg}`);
        };

        eat() {
            console.log(`${this.name} está comendo bem heim.`);
        };

        toDrink() {
            console.log(`${this.name} está bebendo todas também.`);
        }
    };

    class Car {
        constructor(model) {
            this._brand = "Fiat";
            this._model = model;
        };

        get brand() {
            return this._brand;
        };

        get model() {
            return this._model;
        };

        set model(model) {
            this._model = model;
        };

        print() {
            console.log(`${this.brand} - ${this.model}`);
        };
    };

    // ! Criando objetos forma 5 - A apartir das classes

    const p1 = new Person("Willian", "Pacheco");
    const palio = new Car("Palio");
    /*console.log(p1);
    console.log(p1.name); // * Usando o get que foi definido anteriormente
    console.log(p1.surname); // * Usando o get que foi definido anteriormente*/

    p1.toSpeak("Hello World!!!");
    p1.eat();
    p1.toDrink();
    palio.print();
}

















/*// ! Criando objetos forma 1

const course = new Object();
course.name = "Manutenção de desktop e notebook";
course.price = 50.50.toFixed(2);
console.log(course);

course["Limite de alunos"] = 100;
console.log(course);

delete course["Limite de alunos"];
console.log(course);*/

/*// ! Criando objetos forma 2

const program = {
    name: "curso1",
    price: 50.50,
    tutor: {
        name: "Willian",
        contact: "xxxxxxxxx",
        formation: {
            school: "sim yes si",
            city: "BH",
        },
        formate: [
            {online: true},
            {hybrid: false}
        ]
    }
};

console.log(program);
console.log(program.name);
console.log(program.price);
console.log(program.tutor.name);
console.log(program.tutor.contact);
console.log(program.tutor.formation.school);
console.log(program.tutor.formation.city);
console.log(program.tutor.formate.online);
console.log(program.tutor.formate.hybrid);

console.log(program['tutor']);*/