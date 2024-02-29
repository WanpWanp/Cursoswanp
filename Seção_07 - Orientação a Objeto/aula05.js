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
            console.log(`${this.name.surname} está bebendo todas também.`);
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
        }
    };
}

