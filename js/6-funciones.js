//funciones declarativas
const nombre= 'Anthony Edward';
const apellido= 'Stark';
const apodo = 'Tony';
const nombre1= 'Steve';
const apellido1= 'Rogers';
const apodo1 = 'Capitan america';

function saludar(nombrePersonaje, apellido, apodo){
    const nuevoNombre = nombreCompleto(nombrePersonaje,apellido)
    document.write(`<p>Mi nombre es ${nuevoNombre}, pero me dicen ${apodo}</p>`);
}

// crear una funcion nombreCompleto(nombre y el apellido)
// Anthony Edward, stark

function nombreCompleto(nombre, apellido){
    const nombreLargo = nombre+', '+apellido;
    // return nombre+', '+apellido;
    return nombreLargo;
}

//invocar a una funcion
saludar(nombre, apellido,apodo);

document.write(`<p>${10+450}</p>`)
console.log('test....')

saludar('Tadeo','Muñoz','Teo');


// document.write(`<p>Mi nombre es ${nombre1} ${apellido1}, pero me dicen ${apodo1}</p>`);




// funciones anonimas equivalente a funciones de expresion