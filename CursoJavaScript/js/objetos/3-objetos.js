const producto = {
    id: 74646153,
    nombre: 'Iphone 13',
    precio: 900000,
    disponible: true
};

const cliente = {
    nombre: 'Pedro',
    premium: true
};

console.log(cliente.nombre);
console.log(producto.nombre);

const {nombre,precio} = producto;
//Se aplica alias a nombre:nombreCliente
const {nombre:nombreCliente,premium} = cliente;
console.log(nombre);
console.log(nombreCliente);

//Cambiar la propiedad de un objeto
producto.disponible = false;

//*Eliminar una propiedad del objeto
delete producto.id;
console.log(producto);