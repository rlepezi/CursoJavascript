console.log("promesas_arrow");
let miPromesa = new Promise((resolve, reject) => {
    const suma = 15-5

    suma == 10?resolve('Es correcto'):reject('No es correcto');
});

miPromesa.then(message => console.log(message)).catch(err => console.error(err));

//*Mas simple
miPromesa.then(console.log).catch(console.log);

