console.log("simulacion-api");

function apiSimulador() {

    return new Promise(function(resolve, reject){
  
      let resultJson = true;
  
      if(resultJson) {
  
        const producto = {
  
          nombre: 'Iphone',
  
          color: 'space gray',
  
        }
  
        resolve(producto);
  
      } else {
  
        reject("error 500!");
  
      }
  
    });
  
  }
  
  apiSimulador().then(function(producto) {
  
    console.log(producto);
  
  }).catch(function(err) {
  
    console.error(err);
  
  }); //* 19