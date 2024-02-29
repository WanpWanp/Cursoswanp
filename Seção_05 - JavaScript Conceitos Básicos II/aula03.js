var materias = [
    "Port", 
    "Mate", 
    "Cien", 
    "Hist", 
    "Ingl",
    "Lite",
    "Geog",
    "Logi",
    "Espa"
];

function imprimir(materias, indice) {
    console.log(indice + " - " + materias)
};

materias.forEach(imprimir);

console.log(`===================================`);
materias.forEach(function(materias, indice) {
    console.log(`${indice} -  ${materias}`);
});

console.log(`=================     ==================`);
for(var i = 0; i < materias.length; i++) {
    console.log(`${i} - ${materias[i]}`);
}