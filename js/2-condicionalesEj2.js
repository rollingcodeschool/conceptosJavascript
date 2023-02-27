// pedirle al usuario que seleccione un mes y le informaremos si el mes seleccionado tiene 31 dias, 30 o entre 28 y 29
// 31 dias- enero 1, marzo 3, mayo 5 , julio 7 , agosto 8, octubre 10, dic. 12
// 30 dias-  abril 4, junio 6 ,sep 9 , nov. 11
// 28 o 29 dias - feb 2

let mes = parseInt(prompt('Ingrese el número del mes (1 al 12): 1- enero, 2-marzo'));

if(mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12){
    document.write('El mes seleccionado ('+mes +') tiene 31 días<br>');
    document.write(`El mes seleccionado (${mes}) tiene 31 días`);
}else if(mes === 2){
    document.write(`El mes seleccionado (${mes}) tiene 28 o 29 días dependiendo del año`);
}else{
    document.write(`El mes seleccionado (${mes}) tiene 30 días`);
}