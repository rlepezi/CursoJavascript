//* Objetos enJavascript

//*Un objeto literal

const mascota = {
    nombre: 'Pepa',
    edad: 7,
    vivo:true,
    razas:['kiltro','dogo','boxer','pastor aleman']
};

//* el operador punto
console.log(mascota);
console.log(mascota.nombre);//Pepa
console.log(mascota['nombre']);//Pepa (variable)
console.log(mascota.edad);//7
console.log(mascota.vivo);//true
console.log(mascota.razas[0]);//kiltro
console.log(mascota.razas[1]);//dogo

mascota.id = 1;