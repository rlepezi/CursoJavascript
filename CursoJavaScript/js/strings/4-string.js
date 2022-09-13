//* Cortar String

const producto = 'Notebook Gamer Dell Inspiron 3000';

//* .slice para cortar
//* slice(desde,hasta) "donde quiero comenzar a cortar, hasta donde quiero terminar el corte"
//* Obtener la palabra Gamer
console.log(producto.slice(0,8));
console.log(producto.slice(9,14));
console.log(producto.slice(8,14).trim());

//*Split
//* Obtiene palabras de una cadena de texto que esten separadas por espacio
const productoSplit = producto.split(" ");
console.log(productoSplit);

//*Pasa tiempos

const pasaTiempos = 'Leer, Juagar, cantar, aprender a programar, css, Node';
console.log(pasaTiempos.split(","));

//Ejemplo #
const tweet = 'Aprendiendo a programar #ES6';
const resultado = tweet.split("#");
console.log(resultado);
console.log(resultado[0]);
console.log(resultado[1]);

//Mayúscula / Minúscula
const descripcion = 'Notebook Gamer MSI';
console.log(descripcion.toUpperCase());//Mayuscula
console.log(descripcion.toLowerCase());//Minuscula

const email = 'RLEPEZ@GMAIL.COM';
console.log(email.toLowerCase());//Minuscula