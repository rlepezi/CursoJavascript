console.log("3-array");
//* 
const carrito = [];//Carrito de compras
let carritoCopia = [];
let carritoCopiaSinError = [];

//* Productos
const producto = {
    nombre: 'Iphone 13',
    precio: 900000
};

const producto2 = {
    nombre: 'Notebook Gamer Asus',
    precio: 1600000
};

const producto3 = {
    nombre: 'Teclado Gamer',
    precio: 1200000
};

const producto4 = {
    nombre: 'Monitor Dell',
    precio: 10000
};

const producto5 = {
    nombre: 'Macbook',
    precio: 18000000
};

//*Metodo push --> agregamos al final
carrito.push(producto);
carrito.push(producto2);
console.log(carrito);
console.table(carrito);

//*Metodo unshift --> agregamos al inicio
carrito.unshift(producto3);
console.table(carrito);

//*Copiar un arreglo
carritoCopia = carrito;
console.table(carrito);
console.table(carritoCopia);

//* Modificar carrito copia, pero además impacta sobre carrito

carritoCopia.push(producto4);
console.table(carrito);//Original
console.table(carritoCopia);//La copia

// Modificar carrito copia sin afectar carrito
carritoCopiaSinError = [...carrito];//* Spread operator
carritoCopiaSinError.push(producto5);

console.table(carrito);//Original
console.table(carritoCopia);//La copia
console.table(carritoCopiaSinError);//La copia sin error
