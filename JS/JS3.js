var Flechaesquerra3 = document.getElementById('flechae3');
var Flechadreta3 = document.getElementById('flechad3');
var ilu1 = document.getElementById('ilu1');
var ilu2 = document.getElementById('ilu2');
var ilu3 = document.getElementById('ilu3');
var ilu4 = document.getElementById('ilu4');
var ilu5 = document.getElementById('ilu5');

var contador = 0;


Flechaesquerra3.onclick = function () {
    console.log(contador);
    contador = contador - 1;
    if (contador > 4) {
        contador = 0;
    }
    if (contador <= -1) {
        contador = 4;
    }if (contador == 0) {
        ilu1.style.opacity = 1;
    }
    
    else ilu1.style.opacity = 0;
    if (contador == 1) {
        ilu2.style.opacity = 1;
    }
    else ilu2.style.opacity = 0;
    if (contador == 2) {
        ilu3.style.opacity = 1;
    }
    else ilu3.style.opacity = 0;
    if (contador == 3) {
        ilu4.style.opacity = 1;
    }
    else ilu4.style.opacity = 0;
    if (contador == 4) {
        ilu5.style.opacity = 1;
    }
    else ilu5.style.opacity = 0;
    
   
}
Flechadreta3.onclick = function () {
    console.log(contador);
    contador = contador + 1;
    if (contador > 4) {
        contador = 0;
    }
    if (contador <= -1) {
        contador = 4;
    }if (contador == 0) {
        ilu1.style.opacity = 1;
    }
    
    else ilu1.style.opacity = 0;
    if (contador == 1) {
        ilu2.style.opacity = 1;
    }
    else ilu2.style.opacity = 0;
    if (contador == 2) {
        ilu3.style.opacity = 1;
    }
    else ilu3.style.opacity = 0;
    if (contador == 3) {
        ilu4.style.opacity = 1;
    }
    else ilu4.style.opacity = 0;
    if (contador == 4) {
        ilu5.style.opacity = 1;
    }
    else ilu5.style.opacity = 0;
}