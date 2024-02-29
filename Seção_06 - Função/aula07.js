{
    let nums = [0,1,2,3,4,5,6];

    /*function double(value) {
        return value * 2;
    };

    let res1 = nums.map(double);

    console.log(`Números originais ${nums}. \nagora dobrando os valores ${res1}.`);

    for(let i = 0; i < nums.length; i++){
        console.log(`${nums[i]} * 2 = ${res1[i]}`)
    };*/
}

{
    /*let nums = [0,1,2,3,4,5,6];

    let res2 = nums.map(function(value) {
        return value * value;
    });

    console.log(`Números originais ${nums}. \nagora multiplicando pelo mesmo valor ${res2}.`);

    for(let i = 0; i < nums.length; i++){
        console.log(`${nums[i]} * ${nums[i]} = ${res2[i]}`)
    };*/ 
}

{
    function toadd(v1, v2) {
        return v1 + v2;
    };
    let mostrar = function(n1, n2, calc = toadd) {
        console.log(calc(n1, n2));
    };
    mostrar(5,8);
    mostrar(10,122, toadd);
    mostrar(5,8, function(n1,n2) {
        return n1 + n2;
    });

    mostrar(5,100, (v1, v2) => v1 * v2);
}