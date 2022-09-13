const sitioWeb = {
    nombre: 'Google',
    link: { enlace: 'www.google.cl'},
    redesSociales: {
        youtube:{
            enlace: 'youtube.com/google',
            nombre: 'Google'
        }
    }
};

console.log(sitioWeb.redesSociales.youtube.enlace);//'youtube.com/google'

//* Destructuring (Desmenuzar)
//const {enlace,nombre} = sitioWeb.redesSociales.youtube;
//console.log(sitioWeb.redesSociales.youtube.enlace);//'youtube.com/google'

//console.log(enlace);//'youtube.com/google'
//console.log(nombre);//'Google'

// const {nombre, link, redesSociales} = sitioWeb;
// const {youtube} = redesSociales;
// const {enlace} = youtube;

const {nombre, link, redesSociales, redesSociales: {youtube: {enlace}}} = sitioWeb;


console.log(enlace);//'Google'

