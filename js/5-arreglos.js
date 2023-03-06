// Arrays
// crear un arreglo vacio
let colores = [];

//crear una arreglo con valores
let peliculas = ['Ant-man','Endgame', 2019, true];

// mostrar el arreglo
document.write(peliculas);

//recorrer el arreglo
// length: devuelve la cantidad de elementos del arreglo
//array.length

document.write('<h2>Mostrar el arreglo de peliculas</h2>');
document.write('<ul>');

for(let posicion=0; posicion < peliculas.length; posicion++){
    document.write(`<li>${peliculas[posicion]}</li>`);
}
document.write('</ul>');

document.write(`<p>Cantidad de peliculas: ${peliculas.length}</p>`);

// agregar un item al arreglo
document.write('<h2>Agregar un item al principio del arreglo</h2>');

peliculas.unshift('Thor love and thunder', 'Iron Man');

document.write('<ul>');
for(let posicion=0; posicion < peliculas.length; posicion++){
    document.write(`<li>${peliculas[posicion]}</li>`);
}
document.write('</ul>');

document.write('<h2>Agregar un item al final del arreglo</h2>');

peliculas.push('Civil war');

document.write('<ul>')
for(let posicion=0; posicion < peliculas.length; posicion++){
    document.write(`<li>${peliculas[posicion]}</li>`);
}
document.write('</ul>')


document.write('<h2>Agregar un item en una posicion particular del arreglo (4)</h2>');

peliculas.splice(4,0,'Spiderman: No way home')

document.write('<ul>');
for(let posicion=0; posicion < peliculas.length; posicion++){
    document.write(`<li>${peliculas[posicion]}</li>`);
}
document.write('</ul>');

// modificar elementos del arreglo
document.write('<h2>Modificar un elemento del arreglo (6)</h2>');

peliculas[6] = 'Dr. Strange';

document.write('<ul>');
for(let posicion=0; posicion < peliculas.length; posicion++){
    document.write(`<li>${peliculas[posicion]}</li>`);
}
document.write('</ul>');

// Eliminar items del arreglo
document.write('<h2>Eliminar el primer elemento del arreglo</h2>');

peliculas.shift();

document.write('<ul>');
for(let posicion=0; posicion < peliculas.length; posicion++){
    document.write(`<li>${peliculas[posicion]}</li>`);
}
document.write('</ul>');

document.write('<h2>Eliminar el ultimo elemento del arreglo</h2>');

peliculas.pop();

document.write('<ul>');
for(let posicion=0; posicion < peliculas.length; posicion++){
    document.write(`<li>${peliculas[posicion]}</li>`);
}
document.write('</ul>');

document.write('<h2>Eliminar un elemento de una posicion particular del arreglo (4)</h2>');

// peliculas.splice(4,1);
peliculas.splice(2,3);

document.write('<ul>');
for(let posicion=0; posicion < peliculas.length; posicion++){
    document.write(`<li>${peliculas[posicion]}</li>`);
}
document.write('</ul>');






