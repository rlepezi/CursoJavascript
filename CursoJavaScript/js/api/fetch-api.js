//https://rickandmortyapi.com/api/character
//*fetch es una funcionque retorna una promesa

const url = "https://rickandmortyapi.com/api/character";//*Todos los personajes

fetch(url).then(respuesta => {
    return respuesta.json();
}).then(data => {
    console.log(data);
}).catch(Error => {
    console.log(Error);
});