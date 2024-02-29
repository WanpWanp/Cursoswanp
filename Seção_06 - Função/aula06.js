{
    function toadd(num1, num2) {
      return num1 + num2;
    };
}
  
{
    console.log(toadd(5,7));
} 

{
    var add = function toadd2(num1, num2){
        return num1 + num2;
    }
}

{
    console.log(add(5,8));
}

{
    var add2 = toadd;
}

{
    console.log(add2(5,9));
}

{
    var add3 = (num1, num2) => {
        return num1 + num2;
    };
}

{
    console.log(add3(5,10));
}

{
    var double = value => value * 2;
}
{
    console.log(double(5));
}