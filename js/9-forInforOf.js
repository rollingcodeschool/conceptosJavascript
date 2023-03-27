//for in recorre objetos
//for(variable in object){
//     toda la logica
// }

const heroe = { nombre:'Tony Stark', personaje:'Ironman', poder:'tecnologia'};
const colores =['azul','amarillo','verde','rojo']

for(let i in heroe){
    console.log(i);
    console.log(heroe[i])
}

for(let i of colores){
    console.log(i);
}

for(let i in colores){
    console.log(i);
    console.log(colores[i]);
}

