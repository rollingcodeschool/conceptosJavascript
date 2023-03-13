
const nombre= 'Anthony Edward';
const apellido= 'Stark';
const apodo = 'Tony';
const nombre1= 'Steve';
const apellido1= 'Rogers';
const apodo1 = 'Capitan america';

// funciones anonimas equivalente a funciones de expresion

// const nombreCompleto = function (nombre,apellido){
//     return nombre+', '+apellido;
// }

// const nombreCompleto = (nombre, apellido) =>{
//     return nombre+', '+apellido;
// }

const nombreCompleto = (nombre, apellido) => nombre+', '+apellido;

//funciones declarativas
function saludar(nombrePersonaje, apellido, apodo){
    const nuevoNombre = nombreCompleto(nombrePersonaje,apellido)
    document.write(`<p>Mi nombre es ${nuevoNombre}, pero me dicen ${apodo}</p>`);
}

// crear una funcion nombreCompleto(nombre y el apellido)
// Anthony Edward, stark

// function nombreCompleto(nombre, apellido){
//     const nombreLargo = nombre+', '+apellido;
//     // return nombre+', '+apellido;
//     return nombreLargo;
// }

//invocar a una funcion
saludar(nombre, apellido, apodo);

document.write(`<p>${10+450}</p>`)
console.log('test....')

saludar('Tadeo','Muñoz','Teo');

// TODO Pedir a un usuario un nombre y precio de un juego, crear un funcion que informe el precio final en pesos argentinos. Preguntar si quiere saber el precio de otro juego.

const precioFinal = precio => (precio * 1.75).toFixed(2);

do{

const nombreJuego = prompt('Ingrese el nombre de tu juego');
const precio = parseFloat(prompt('Ingrese el precio del juego'));
console.log(precioFinal(precio));
alert(`El juego ${nombreJuego} cuesta $${precioFinal(precio)} ARS (todos los impuestos incluidos)`);

}while(confirm('¿Desea consultar otro juego?'));

