//* Crear las referencias
console.log("examen");

const resultado = [0,1,2,3,4].reduce(function(sum, value){
    return sum +value;
},0);

console.log(resultado);

const result = [0,1,2,3,4].reduce((sum, value) => sum + value, 0);
//const result2 = [0,1,2,3,4].reduce(sum,value) => { sum + value }, 0);
//const result3 = numeros.reduce(sum, value) => return sum + value;
console.log(result);