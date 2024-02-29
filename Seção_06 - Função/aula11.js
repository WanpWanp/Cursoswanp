{
    function factoryCourses(n, p) {
        const discount = 0.9;
        return {
            name: n,
            price: (p * discount).toFixed(2)
        };
    };

    //console.log(factoryCourses("Programação para leigos", 29.99));
    //console.log(factoryCourses("Programação para expert", 100));
}

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

    var course = [];
    for(let i =0;  i < 5; i++) {
        course.push(factoryCourses(`Curso ${[i + 1]}` , `${19.99 + i * 3}`));
    };

    console.log(course);
}