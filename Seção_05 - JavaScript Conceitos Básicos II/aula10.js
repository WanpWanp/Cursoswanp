 /*const nums = [1,3,5,7];

 const [num1, num2, num3, num4] = nums;
 console.log(num1);
 console.log(num2);
 console.log(num3);
 console.log(num4);


 const [nums1, ,nums3,  ] = nums;
 console.log("=====================================");
 console.log();
 console.log(nums1);
 console.log();
 console.log(nums3);
 console.log();

 const [n1, n2, n3, n4, n5 = 0, n6 = 2, n7 = 4 ] = nums;
 console.log("=====================================");
 console.log(n2);
 console.log(n3);
 console.log(n4);
 console.log(n1);
 console.log(n5);
 console.log(n6);
 console.log(n7);*/

 const product = {
    nome: "Xbox",
    preco: 5000
 };
 const {nome, preco} = product;

 console.log(`O videogame é: ${nome} e o valor é: R$${preco}`);

 const {name, price, levers = 2} = product;
 console.log(`O videogame é: ${nome}, o valor é: R$${preco} e usa-se ${levers} manetes`);