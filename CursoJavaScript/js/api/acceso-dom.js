//* Crear las referencias
console.log("acceso-dom");
const rowCars = document.querySelector('#rowCards');
/*
//*Otra forma de obtener el elemento rowcards
const rowCards2 = document.getElementById('rowCards');
   Mismo resultado
<div class="row" id="rowCards">
         <!-- Las tarjetas deben ser creaddas con Javascript -->
</div>*/

const formdata = document.querySelector('#formData');

const getCharacters = async () => {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();// es un objeto que tiene la propiedad info y results
        return data;
    }catch (error){
        throw error;
    }
}


//¨Buscar un personaje por su nombre
const getCharacterForName = async nameCharacter => {
    try{
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nameCharacter}`);
        const data = await response.json();
        return data;
    }catch (error){
        throw error;
    }
};

const init = async() => {
    const characters = await getCharacters();
    console.log(characters);
    console.log(characters.results);//arreglo de los personajes

    createCards(characters.results);

};

init();

//Fucion que manda a crer la tarjeta
const createCards = characters => {
    console.log(characters);//recibimos el arreglo
    characters.map(personaje =>cardCharacter(personaje)) ;
};

//Funcion que es la tarjeta, recibe el objeto personaje
const  cardCharacter = (character) => {
    console.log(character);
    //*Creamos los elementos html
    /*  <div>
    <img />
        <div >
            <h5 />
            <a />
        </div>
    </div> */
    const cardBootstrap = document.createElement('div');
    const imgCard = document.createElement('img');
    const cardBody = document.createElement('div');
    const titleCharacter = document.createElement('h5');
    const btnByCharacter = document.createElement('a');

    //*Creamos los textos de los elementos
    const nameCharacter = document.createTextNode(character.name);

    const textButtonCharacter = document.createTextNode('Ir a personaje');

    //*Añadir clases
    cardBootstrap.classList.add('card','mt-4');
    imgCard.classList.add('card-img-top','mt-2');
    cardBody.classList.add('card-body');
    titleCharacter.classList.add('card-title','text-center');
    btnByCharacter.classList.add('btn','btn-secondary','mb-2');

    //*Agregar los textos a los elementos
    titleCharacter.appendChild(nameCharacter);
    btnByCharacter.appendChild(textButtonCharacter);
    imgCard.src = character.image;

    //*Renderizado (ordenar segun nivel)
    cardBootstrap.append(imgCard,cardBody,btnByCharacter);
    cardBody.append(titleCharacter)

    //*Añadir al row
    rowCars.append(cardBootstrap);
    /* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
}

//*llamar al formulario
//El elemento se envia de forma implicita en la funcion handleSubmit
formdata.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
    event.preventDesfault();
    const form = new FormData(this);
    cleanRow();
    //console.log(form.get('character'));

    //Ahora con promesa
    getCharacterForName(form.get('character')).then(data => createCards(data.results)).catch(err => console.log(err));
}

const cleanRow = () => {
    rowCars.innerHTML = '';
}
