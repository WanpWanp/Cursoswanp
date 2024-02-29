class Car{
    constructor(model) {
        this._brand = "Fiat";
        this._model = model;
    };

    get brand() {
        return this._brand;
    };
    
    get model() {
        return this._model
    };
    set model(model) {
        this._model = model;
    };

    printDatas() {
        console.log(`Marca: ${this.brand} \nModelo: ${this.model}`);
    }

    static returnBrand() {
        return 'Fiat';
    }

};


const argo = new Car('Argo');
//argo.printDatas()

console.log(Car.returnBrand());

console.log(Math.random());