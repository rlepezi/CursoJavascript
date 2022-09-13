console.log("asyync await");
const url = "https://rickandmortyapi.com/api/character";//*Todos los personajes con async await remmplazando then de fetch

async function getCharacters() {

    try{
        const data = await fetch(url);
        const response = await data.json();
        console.log(response);
    } catch(error){
        throw error;
    }
}

getCharacters();