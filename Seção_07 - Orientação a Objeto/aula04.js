{
    class Person {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        };
    };

    class Car {
        constructor(model) {
            this.brand = "Fiat";
            this.model = model;
        };
    };
    const car1 = new Car()
    console.log(car1.brand);
}

