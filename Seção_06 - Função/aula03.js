{
    function calc_age(yearOfBirth) {
        const date = new Date();
        const age = date.getFullYear() - yearOfBirth;
        return age;
    };
}

{
    function calc_age2(yearOfBirth) {
        const date = new Date();
        const age = date.getFullYear() - yearOfBirth;
        console.log(`Sua idade é: ${age} anos.`)
    };
}

{
    let d = new Date();
    console.log(`${d.getFullYear()}`);
    console.log(`${d.getMonth()}`);
    console.log(`${d.getDay()}`);
    console.log(`${d.getHours()}`);
    console.log(`${d.getMinutes()}`);
}

{
    /*let yearOfBirth = 1995;
    let currentYear = new Date().getFullYear();
    console.log(`Quem nasce em ${yearOfBirth} em ${currentYear} tem: ${calc_age(yearOfBirth)} anos de idade.`);*/
}


{/*calc_age2(1995);*/}