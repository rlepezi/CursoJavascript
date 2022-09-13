//* Funciones en Javascript

//* Variables
let numero1 = 4;
let numero2 = 10;

//Vamos a declarar una funcion tradicional

// El llamado a la funcion para que se ejecute
sumar(numero1,numero2);

function sumar (a,b) {
    let resultado = a+b;
    //console.log("El resultado es " + resultado);
    //console.log(`El resultado es ${resultado}`);
    return resultado;
}

numero1 = 3;

// El llamado a la funcion para que se ejecute
sumar(numero1,numero2);

const resultadoSuma = sumar(numero1,numero2);

console.log("El resultado es " + resultadoSuma);

//Funcion anonima (no tienen nombre y utiliza function)
const sumarAnonimo = function(a,b){
    return a + b;
};
console.log(sumarAnonimo(numero1,numero2));

//* Arrow function (no tienen nombre y utiliza =>)
const sumarArrow = (a,b) => {
    return a + b;
}
console.log(sumarArrow(numero1,numero2));

//Antes del return hay codigo y lleva {}
const sumarArrow2 = (a,b) => {
    let resultado = a+b;
    resultado = resultado *10;
    return resultado;
}

console.log(sumarArrow2(numero1,numero2));

//Antes del return no hay codigo y no lleva {} ni return
const sumarArrow3 = (a,b) => a+b;
console.log(sumarArrow3(numero1,numero2));

//Unico Parametro, se puede omitir el ()
const sumarArrow4 = nombre => nombre;
console.log(sumarArrow4('Raul'));

