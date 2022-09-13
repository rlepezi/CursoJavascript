const persona = {
    nombre: 'Raul',
    redesSoliales: {
        youtube: 'youtube.com/raul',
        facebook: 'facebook.com/raul',
    },
};

let copiaPersona ={};

let copiaSinErrorPrimeraIntento ={};
let copiaSinErrorSegundoIntento ={};
//copiaPersona = persona;
//copiaSinErrorPrimeraIntento = {...persona};

// console.log(persona);//*Original
// console.log(copiaPersona);//*Copia
// copiaPersona.nombre = "Pedro";
// console.log(persona);//*Original
// console.log(copiaPersona);//*Copia

// copiaSinErrorPrimeraIntento.nombre = "Ernesto";
// copiaSinErrorPrimeraIntento.redesSoliales.youtube = "youtube.com/raulernesto";
// console.log(persona);//*Original
// console.log(copiaSinErrorPrimeraIntento);//*Copia

//*Solucion final
//console.log(JSON.stringify(persona));

//La copia
copiaSinErrorSegundoIntento = JSON.parse(JSON.stringify(persona));

console.table(persona);
console.table(copiaSinErrorSegundoIntento);

copiaSinErrorSegundoIntento.nombre = "Pedro";
console.table(persona);
console.table(copiaSinErrorSegundoIntento);
copiaSinErrorSegundoIntento.redesSoliales.youtube = "youtube.com/es6";
console.table(persona);
console.table(copiaSinErrorSegundoIntento);