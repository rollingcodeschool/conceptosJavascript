// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

let numeroRepeciones = 30;

for(let i= numeroRepeciones; i >0 ; i--){
    // bucle que controle la columna
    for(let j= i; j>0; j--){
        document.write(i);
    }
    document.write('</br>');
}

