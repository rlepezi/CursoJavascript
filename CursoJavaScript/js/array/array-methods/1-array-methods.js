console.log("1-array-methods");

//*El metodo map(), crea un nuevo array y el array resultante tiene una modificacion en cada uno de sus elementos

const numeros = [10,20,30,40];

// const resultMap = numeros.map((number) => {
//     return number *2;
// });
//Lo mismo en una linea
const resultMap = numeros.map((number) =>  number *2);

//posision
// const resultMap = numeros.map((number, index) =>  {
//     console.log(number);
//     console.log(index);
// });

//console.log(numeros);
console.log(resultMap);

//* jsx
const usuarios = [
{id:1,name:'Pedro'},
{id:2,name:'Juan'},
{id:3,name:'Diego'},
];

const resultadoJsx = usuarios.map((user) => {
    return `<li>${user.name}</li>`;
});

console.log(resultadoJsx);

/*
<ul>
    <li></li>
</ul>
*/