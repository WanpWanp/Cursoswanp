{
    const courses = [
        "Matemática",
        "Português",
        "Ciências",
        "Geografia",
        "História",
        "Literatura",
        "Inglês",
        "Biologia",
        "Fisíca",
        "Quimica",
    ];

    /*function toPresent(course, index) {
        console.log(`Usando a função toPresent ------ Curso ${index + 1}:  ${course}`)
    };
    
    courses.forEach(toPresent); //usando callback;

    console.log("=====================================================================================");

    courses.forEach(function(course, index) {
        console.log(`Usando a função Lambda ------ Curso ${index + 1}: ${course}`);
    });

    console.log("=====================================================================================");

    courses.forEach((course, index) => console.log(`Usando a função Arrow Function ------ Curso ${index + 1}: ${course}`));*/
}

{
    const prices = [25.55, 78.92, 54.66, 12.63, 12, 99, 38.55, 15, 23.75];
    let smaller = [];
    let smaller2 = [];
    for(let p in prices) {
        if(prices[p] < 50) {
            smaller.push(prices[p]);
        };
    };

    console.log(`Preços menores que 50: ${smaller} `);

    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < 30) {
            smaller2.push(prices[i]);
        };
    };console.log(`Preços menores que 30: ${smaller2} `);

    let smaller3 = prices.filter(function(price){
        return price < 25;
    });

    console.log(`Preços menores que 25: ${smaller3} `);

    let smaller4 = prices.filter(price => price < 20);

    console.log(`Preços menores que 20: ${smaller4} `);
}