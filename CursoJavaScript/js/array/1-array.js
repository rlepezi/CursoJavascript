
//* Array (Vectores) unidimencionales
//* Sirve para agrupar elementos
const numeros = [10,55,108];
console.log(numeros);
const amigos = new Array('Pedro','Juan','Diego');//Otra manera de generar un arreglo
console.log(amigos);

//* Un arreglos puede contener cualquier tipo
const arregloFull = ["Mouse",50,false,"not",null, {"Nombre":'Raúl'}];
console.log(arregloFull);
console.table(arregloFull);
// clg console.log();
// clt console.table();

//* Matrices (vector bidimencional)
const matrix = [
    [1,5,6],
    [14,55,78]
];

console.table(matrix);
console.log(matrix[0][1]);
console.log(matrix[1][2]);
console.log(matrix[0][0]);

//* Utilidades
console.error("Esto es un error");
console.warn("Esto es una advertencia");