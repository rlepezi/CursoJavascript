const apiSimulador = new Promise((resolve, reject) => {

    const resultJson = false;

    const producto = {nombre: 'Iphone',color: 'space gray'};

    resultJson===true? resolve(producto): reject("error 500!");

  });

  apiSimulador.then(message => console.log(message)).catch(err => console.error(err));