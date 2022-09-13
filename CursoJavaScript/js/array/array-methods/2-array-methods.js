console.log("2-array-methods");
//El metodo reduce es un acumulador
//*Toma una cantidad de datos y nos retorna un resultado acumulado


const carrito = [
    {nombre:'Notebook MSI', precio:16000},
    {nombre:'Mouse Razer', precio:20000},
    {nombre:'Audifonos Razer', precio:10000},
    {nombre:'Monitor LG', precio:2000},
];

const resultadoReduce = carrito.reduce((total,producto)=> total + producto.precio,0 )

console.log(carrito);
console.log(resultadoReduce);

//*Numerico con separador de miles
console.log(`El total es: ${Intl.NumberFormat().format(resultadoReduce)}`);

// let numeros = [10,20,30];
// numeros[10] = 'hello';
// console.log(numeros.length);
// console.log(numeros);