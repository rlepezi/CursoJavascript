//* Las promesas sirven para trabajar con peticiones asincronas
//* NOs evita el uso excesivo de callback (callback hell)

let miPromesa = new Promise(function(resolve, reject){
    let suma = 15-5
    if(suma==10){
        resolve('Es correcto');
    }else{
        reject('No es correcto es igual a '+suma);
    }
});

miPromesa.then(function(message){
    console.log(message);
}).catch(function(err){
    console.error(err);
})
