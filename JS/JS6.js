var Flechaesquerra6 = document.getElementById('flechae6');
var Flechadreta6 = document.getElementById('flechad6');

var contador = 0;
var unity1 = document.getElementById('unity1');
var unity2 = document.getElementById('unity2');




Flechaesquerra6.onclick = function () {
    console.log(contador);
    contador = contador - 1;
    if (contador > 1) {
        contador = 0;
    }
    if (contador <= -1) {
        contador = 1;
    }if (contador == 0) {
        unity1.style.zIndex = 1;
    }
    
    else unity1.style.zIndex = 0;
    if (contador == 1) {
        unity2.style.zIndex = 1;
    }
    else unity2.style.zIndex = 0;
    
    
}
Flechadreta6.onclick = function () {
    console.log(contador);
    contador = contador + 1;
    if (contador > 1) {
        contador = 0;
    }
    if (contador <= -1) {
        contador = 1;
    }if (contador == 0) {
        unity1.style.zIndex = 1;
    }
    
    else unity1.style.zIndex = 0;
    if (contador == 1) {
        unity2.style.zIndex = 1;
    }
    else unity2.style.zIndex = 0;
}

