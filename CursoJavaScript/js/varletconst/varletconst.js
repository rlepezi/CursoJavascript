//*Comentarios:
//*Variabes - va,let y const
//*Javascript es un lenguaje de tipo dinamico
//*Una variable puede contener distintos tipos de datos

//Con var se presta para errores
console.log("Aun no declarada "+nombre);
var nombre = "Pedro";
nombre = 2000;
var nombre = "Pascal";
console.log("Hola Mundo "+nombre);

//Con let anuncia errores
let precio = 200;
//let precio = "Hola";
precio = 847.45;

let oferta = 1000;

console.log(oferta);
console.log(precio);
console.log(typeof oferta);//Saber el tipo de dato
console.log(typeof precio);//Saber el tipo de dato

const PI = 3.14151692;
//No puede tener otro valor
//PI = 4.0;
console.log(PI);

//* EXISTEN EXCEPCIONES CON LOS ARREGLOS Y OBJETOS
