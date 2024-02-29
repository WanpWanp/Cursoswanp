{
    function Person(n, s, race = "Humano") {
        //Atributos privados só conseguimo usar dentro da função contrutora
        let height = 0.30;
        let weigth = 0.5;
        let age = 0;
        let name = n;
        let sex = s;

        //Atributos públicos pode ser acessado de fora da função contrutora
        this.race = race;

        //Método privados só conseguimos usar dentro da função contrutora
        const  printDatas = function() {
            console.log(`Nome: ${name} Idade: ${age} Peso: ${weigth} Altura: ${height} Sexo: ${sex} Raça: ${race}`);
        };

        //Método público podemos conseguimos usar dentro da função contrutora
        this.birth = function() {
            age += 1;
            printDatas();
        };

        this.weigth = function() {
            weigth += 1.033;
        };
    
        this.getAge = function() {
            return age;
        };
        this.getWeigth = function() {
            return weigth;
        };
    };
}

//instanciando um objeto (Axl)
const axl = new Person("Axl", "Masculino");
/*console.log(axl);
console.log(axl.weigth);*/

axl.birth();
axl.weigth();
axl.birth();
axl.weigth();
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
//instanciando um objeto (Carol)
const carol = new Person("Ana Carolina", "Feminino");

carol.birth();
carol.weigth();
carol.birth();
carol.weigth();