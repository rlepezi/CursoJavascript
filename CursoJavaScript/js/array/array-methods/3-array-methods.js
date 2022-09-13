console.log("3-array-methods");
//El metodo Filer sirve para filtrar
//Nos retorna un nuevo array filtrado de acuerdo a una condicion

const carrito = [
    {nombre:'Notebook MSI', precio:160000},
    {nombre:'Mouse Razer', precio:20000},
    {nombre:'Teclado Razer', precio:17000},
    {nombre:'Audifonos Razer', precio:10000},
    {nombre:'Monitor LG', precio:2000},
];

const resultadoFilter = carrito.filter((producto)=> producto.precio < 20000 )
console.log(carrito.length);
console.log(carrito);
console.log(resultadoFilter.length);
console.log(resultadoFilter);

//Distinto a
const resultadoFilterDistinto = carrito.filter((producto)=> producto.nombre !== 'Monitor LG' )
console.log(resultadoFilterDistinto);

//Igual a
const resultadoFilterIgual = carrito.filter((producto)=> producto.nombre == 'Notebook MSI' )
console.log(resultadoFilterIgual);

//Contiene a (Pendiente)
const resultadoFilterContiene = carrito.filter((producto)=> producto.nombre == 'Notebook MSI' )
console.log(resultadoFilterContiene);