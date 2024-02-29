/*
    ! JavaScript object Notation - Json
*/

const course = {
    name: 'Xeque-mate Relâmpago',
    time: 50,
    price() {
        return this.time * 0.84;
    }
};
console.log(course);
// console.log(course.price());
console.log(typeof(course));

// * Convertendo o objeto para json

const json = JSON.stringify(course);
console.log(json);
console.log(typeof(json));

// * De json para Objeto

const obj = JSON.parse(json);
console.log(obj);
console.log(typeof(obj));