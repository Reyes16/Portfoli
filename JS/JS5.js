var Flechaesquerra5 = document.getElementById('flechae5');
var Flechadreta5 = document.getElementById('flechad5');

var contador = 0;
var anim1 = document.getElementById('anim1');
var anim2 = document.getElementById('anim2');
var anim3 = document.getElementById('anim3');
var anim4 = document.getElementById('anim4');
var anim5 = document.getElementById('anim5');



Flechaesquerra5.onclick = function () {
    console.log(contador);
    contador = contador - 1;
    if (contador > 4) {
        contador = 0;
    }
    if (contador <= -1) {
        contador = 4;
    }if (contador == 0) {
        anim1.style.zIndex = 1;
    }
    
    else anim1.style.zIndex = 0;
    if (contador == 1) {
        anim2.style.zIndex = 1;
    }
    else anim2.style.zIndex = 0;
    if (contador == 2) {
        anim3.style.zIndex = 1;
    }
    else anim3.style.zIndex = 0;
    if (contador == 3) {
        anim4.style.zIndex = 1;
    }
    else anim4.style.zIndex = 0;
    if (contador == 4) {
        anim5.style.zIndex = 1;
    }
    else anim5.style.zIndex = 0;
    
}
Flechadreta5.onclick = function () {
    console.log(contador);
    contador = contador + 1;
    if (contador > 4) {
        contador = 0;
    }
    if (contador <= -1) {
        contador = 4;
    }
    if (contador == 0) {
        anim1.style.zIndex = 1;
    }
    
    else anim1.style.zIndex = 0;
    if (contador == 1) {
        anim2.style.zIndex = 1;
    }
    else anim2.style.zIndex = 0;
    if (contador == 2) {
        anim3.style.zIndex = 1;
    }
    else anim3.style.zIndex = 0;
    if (contador == 3) {
        anim4.style.zIndex = 1;
    }
    else anim4.style.zIndex = 0;
    if (contador == 4) {
        anim5.style.zIndex = 1;
    }
    else anim5.style.zIndex = 0;
}

