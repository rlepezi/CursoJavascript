
//*Congelar un objeto
const producto = {
    id: 74646153,
    nombre: 'Iphone 13',
    precio: 900000,
    disponible: true
};

Object.freeze(producto);
//*Cambiar
producto.disponible = false;
//*Modificar
producto.imagen = "foto.png";
console.log(producto);

console.log(Object.isFrozen(producto));

//*Sellar un objeto
const cliente = {
    nombre: 'Pedro',
    premium: true
};

//*Puedo cambiar las propiedades con otros valores
//*pero no se puede agregar y tampoco eliminar una propiedad
//*el objeto esta "sellado"

//*Sellar un objeto
Object.seal(cliente);
console.log(cliente);
//*cambiar
cliente.nombre = "Diego";
cliente.premium = false;
console.log(cliente);
//*Eliminar una propiedad
delete cliente.premium;
console.log(cliente);
//*Para comprobar si el objeto esta sellado
console.log(Object.isSealed(cliente));
