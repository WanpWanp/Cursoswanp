{
    /*
        * Funcionário = nome, sobrenome, email, cpf, função, registro
        * Cliente = nome, sobrenome, email, cpf, renda
        * funções = descrição, salário
        * 
    */

    class Function {
        constructor(description, wage) {
            this._description = description,
            this._wage= wage
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
        constructor(name, surname, email, cpf, birth){
            this._name = name;
            this._surname = surname;
            this._email = email;
            this._cpf = cpf;
            this._birth = birth;
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


        get birth(){
            return this._birth;
        };
        set birth(birth) {
            this._birth = birth; 
        };

        // * extra
        get completName() {
            return this._name + ' ' + this._surname;
        };
        set completName(completName) {
            completName =  completName.split(' ');

            this._name = completName.shift();
            this._surname = completName.join(' ');
        }
    };

    class Collaborator extends Person {
        constructor(name, surname, email, cpf, collaboratorrole, record, birth) {
            super(name, surname, email, cpf, birth);
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
    };

    class Client extends Person {
        constructor(name, surname, email, cpf, income, birth) {
            super(name, surname, email, cpf, birth);
            this._income = income;
        };
        get income(){
            return this._income;
        };
        set income(income) {
            this._income = income;
        };
    };

    // const c1 = new Client("Willian", "Pacheco", "will@gmail.com", "111.111.111-11", 10000);
    // const c2 = new Client("Davi", "Pereira", "will@gmail.com", "22.222.222-22", 15000);
    // const g1 = new Client("Rose", "Rocha", "will@gmail.com", "199.511.067-28", 20000, "11/06/1995");

    // console.log(c1);
    // console.log(c1.completName);
    // console.log(c2);
    // console.log(c2.completName);
    // console.log(g1);
    // g1.completName = "Gabriela Rodrigues";
    //console.log(g1.completName);

    const attorney = new Function('Advogada', 6500);
    const support = new Function('Criminal', 2500);

    console.log(attorney);
    console.log(support);

    const r1 = new Collaborator("Raquel", "Silva", "raquel@adv.com", "199.604.184-27", attorney, "Adv0666");
    const f2 = new Collaborator("Joaquim", "Jorge", "jorquim@adv.com", "197.504.082.48", support, "Rsa0666");


    console.log(r1);
    console.log(f2);
    
}