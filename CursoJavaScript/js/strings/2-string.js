//* Concatenar String

const producto = 'Notebook Dell Inspiron 3000';
const precio = '2000 USD';
const stock = 1000;
const local = 'Florida';

//* concat y +
console.log(producto.concat(precio).concat(' Oferta'));
console.log("sucursal: ".concat(local));
console.log(producto.concat(precio + ' Oferta2'));
console.log('El producto ' + producto + 'tiene un precio de: ' + precio);

//* ES6 Template String
//* backtick
//* alt + 96 -> ``

console.log(`El producto ${producto} tiene un precio de: ${precio}`);