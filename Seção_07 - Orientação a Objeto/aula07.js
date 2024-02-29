{
    const course = {
        name: "javaScript",
        price: 59.90,
        courseTime: 30
    };
    console.log(course);
    /*console.log(typeof(course));
    console.log(Object.keys(course));
    console.log(Object.values(course));
    console.log(Object.entries(course));
    Object.entries(course).forEach(par => {
        console.log(`${par[0]} - ${par[1]}`)
    });

    Object.entries(course).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });*/

    /*Object.defineProperty(course, 'discount', {
        enumerable: true,
        writable: false,
        value: 35 + "%"
    });
    console.log(course);
    course.discount = 50 + "%";
    console.log(course);
    course.discount.writable = true;
    course.discount = 50 + "%";
    console.log(course);
    Object.freeze(course);
    course.price = 100;
    console.log(course);*/
}

{
    const student = [
        {name:"Denis", idade: 25, empresa:"Real"},
        {name:"Jorge", idade: 25, empresa:"BH"},
        {name:"Adonis", idade: 25, empresa:"TiDelson"},
        {name:"Henrique", idade: 25, empresa:"papelaria"}
    ];
    console.table(student);

}