{
    /*
        * Funcionário = nome, sobrenome, email, cpf, função, registro
        * Cliente = nome, sobrenome, email, cpf, renda
        * funções = descrição, salário
        * 
    */

    class PFunction {
        constructor(description, wage) {
            this._description = description,
            this._wage = wage
        };

        get description() {
            return this._description;
        };
        set description(description) {
            this._description = description;
        };

        get wage() {
            return this._wage;
        };
        set wage(wage) {
            this._wage = wage;
        };
    };

    class Person {
        constructor(name, surname, email, cpf){
            this._name = name;
            this._surname = surname;
            this._email = email;
            this._cpf = cpf;
        };

        get name(){
            return this._name;
        };
        set name(name) {
            this._name = name;
        };


        get surname(){
            return this._surname;
        };
        set surname(surname) {
            this._surname = surname
        };


        get email(){
            return this._email;
        };
        set email(email) {
            this._email = email;
        };


        get cpf(){
            return this._cpf;
        };
        set cpf(cpf) {
            this._cpf = cpf; 
        };



        // * extra
        get completName() {
            return this._name + ' ' + this._surname;
        };
        set completName(completName) {
            completName =  completName.split(' ');

            this._name = completName.shift();
            this._surname = completName.join(' ');
        };

        printDatas() {
            console.log(`${this.name} ${this.surname}`)
        };
    };

    class Collaborator extends Person {
        constructor(name, surname, email, cpf, collaboratorrole, record) {
            super(name, surname, email, cpf);
            this._collaboratorrole = collaboratorrole;
            this._record = record;
        };

        get collaboratorrole(){
            return this._collaboratorrole;
        };
        set collaboratorrole(collaboratorrole) {
            this._collaboratorrole = collaboratorrole;
        };


        get record(){
            return this._record;
        };
        set record(record) {
            this._record = record;
        };


        // !Sobrescrita de método
        printDatas() {
            super.printDatas();
            console.log(`Registro: ${this.record} Salário: R$${this.collaboratorrole.wage}`);
        };
    };

    class Client extends Person {
        constructor(name, surname, email, cpf, income) {
            super(name, surname, email, cpf);
            this._income = income;
        };
        get income(){
            return this._income;
        };
        set income(income) {
            this._income = income;
        };
    };

    const storeCashier = new PFunction('Caixa', 2000);
    const func1 = new Collaborator('Ana Carolina', 'Caires', 'carol@gmail.com', '150.125.369-20', storeCashier, '5044POS');
    const clin1 = new Client("Jorge", "Aragão", "aragao@dragao.com", "159.357.741-02", 6886.68)
    //console.log(`Nome: ${func1.name} \nSobrenome: ${func1.surname} \nNome completo: ${func1.completName}`);
    //func1.printDatas();
    func1.printDatas();
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");
    clin1.printDatas();

}

