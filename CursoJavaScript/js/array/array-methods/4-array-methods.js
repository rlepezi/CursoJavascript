console.log("4-array-methods");
//Encontrar un elemento con un indice
//

const meses = ['Enro','Febrero','Marzo','Abril','Mayo','Junio'];

const carrito = [
    {nombre:'Notebook MSI', precio:160000},
    {nombre:'Mouse Razer', precio:20000},
    {nombre:'Teclado Razer', precio:17000},
    {nombre:'Audifonos Razer', precio:10000},
    {nombre:'Monitor LG', precio:2000},
];

//*for each
meses.forEach((mes,i) => {
    if(mes === 'Septiembre'){
        console.log(`Mes encontrado y su indice es: ${i}`);
    }else{
        console.log(`Mes no encontrado`);
    }
});


//*find index
//Si no lo encuentra retorna -1
const indiceEncontrado = meses.findIndex((mes) => {
    return mes == "Diciembre";
});

console.log(indiceEncontrado);

const indiceCarritoNoEncuentra = carrito.findIndex(producto => producto.precio == 100)

const indiceCarritoEncuentra = carrito.findIndex(producto => producto.precio == 2000)

console.log(indiceCarritoNoEncuentra);
console.log(indiceCarritoEncuentra);