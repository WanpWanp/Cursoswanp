class Collaborator {
    constructor(name, wage, area, bonus) {
        this._name = name;
        this._wage = wage;
        this._area = area;
        this._bonus = bonus;
    };

    get name() {
        return this._name;
    };
    get wage() {
        return this._wage
    };
    get area() {
        return this._area
    };
    get bonus() {
        return this._bonus
    };

    set name(name) {
        this._name = name;
    };
    set wage(wage) {
        this._wage = wage;
    };
    set area(area) {
        this._area = area;
    };
    set bonus(bonus) {
        this._bonus = bonus;
    };

    print() {
        console.log(`Informaçõe do colaborador TecGuilty: \nNome - ${this.name} \nÁrea - ${this.area} \nSalário - ${this.wage} \nBônus Salário - ${this.bonus}`);
    };
};

const willian = new Collaborator("Willian", 1800, "Serviço Secreto do Brazil", 50);
//console.log(willian);
console.log(`Nome: ${willian.name}`);
console.log(`Salário: R$ ${willian.wage}`);
console.log(`Área: ${willian.area}`);
console.log(`Bônus: ${willian.bonus}%`);
console.log(`No final ${willian.name} que atua na área ${willian.area} terá o salário de R$ ${willian.wage + (willian.wage * willian.bonus / 100)}`);