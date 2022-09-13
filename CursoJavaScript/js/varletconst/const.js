/* const se utiliza para definir una "constante", su valor no puede cambiar, pero
hay ciertas excepciones cons los "objetos y arreglos" */

//*UpperCase
//*AutomovilDeportivo --> Convención "Upper Camel Case" (pascal Case) Nombre de clases
//*arrayNumber "Lower camel case" para declaracion de variables, funciones y metodos
const arrayNumero = [10,20,30,'Hola Mundo']; //* longitud (lenght) "4"

console.log(arrayNumero[0]);//10
console.log(arrayNumero[1]);//20
console.log(arrayNumero[2]);//30
console.log(arrayNumero[3]);//Hola Mundo
console.log(arrayNumero);//[10, 20, 30, 'Hola Mundo']

arrayNumero.push(200);
console.log(arrayNumero);//[10, 20, 30, 'Hola Mundo', 200]

//* const misConstante; no se permite declarar sin asignar un valor inicial

//*const persona = {};
const persona = {
    nombre: 'Raulito',
    nacionalidad: 'Chile',
};

console.log(persona);//{nombre: 'Raulito', nacionalidad: 'Chile'}
console.log(persona.nombre);//Raulito
console.log(persona.nacionalidad);//Chile
//*Nueva propiedad

persona.apellido = "Lepezi";
persona.nombre = "Raul Ernesto";
console.log(persona);//{nombre: 'Raul Ernesto', nacionalidad: 'Chile', apellido: 'Lepezi'}
console.log(persona.nombre);//Ernesto
console.log(persona.apellido);//Lepezi