var prices = [4.66, 4.20, 8.99, 7, 5.60];

var add = 0;

for(var i = 0; i <prices.length; i++) {
    add = add + prices[i];
}

//console.log(add.toFixed(2));


add = 0;
prices.forEach(function(valor) {
    return add = add + valor
});

//console.log(add.toFixed(3));


/*for(var i = 1000; i > 6; ) {
    //console.log(`${i} - 7 = ${i - 7}`);
    i-=7;
}*/

function adds(previous, current) {
    return previous + current;
};

var ret = prices.reduce(adds);
//console.log(ret.toFixed(4));

function filter_5(value) {
    return value > 5;
};

function rate(value) {
    return value + 5;
}
console.log(`${prices}, maiores que 5: ${prices.filter(filter_5)}, agora os maiores que 5 com taxa de 5: ${prices.filter(filter_5).map(rate)}, por fim a soma: ${prices.filter(filter_5).map(rate).reduce(adds)}`);

//prices.filter(filter_5).map(rate).reduce(ad ds)