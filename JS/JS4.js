var Flechaesquerra4 = document.getElementById('flechae4');
var Flechadreta4 = document.getElementById('flechad4');
var castle1 = document.getElementById('castle1');
var castle2 = document.getElementById('castle2');
var castle3 = document.getElementById('castle3');
var castle4 = document.getElementById('castle4');


var contador = 0;


Flechaesquerra4.onclick = function () {
    console.log(contador);
    contador = contador - 1;
    if (contador > 3) {
        contador = 0;
    }
    if (contador <= -1) {
        contador = 3;
    }if (contador == 0) {
        castle1.style.opacity = 1;
    }
    
    else castle1.style.opacity = 0;
    if (contador == 1) {
        castle2.style.opacity = 1;
    }
    else castle2.style.opacity = 0;
    if (contador == 2) {
        castle3.style.opacity = 1;
    }
    else castle3.style.opacity = 0;
    if (contador == 3) {
        castle4.style.opacity = 1;
    }
    else castle4.style.opacity = 0;
    
    
   
}
Flechadreta4.onclick = function () {
    console.log(contador);
    contador = contador + 1;
     if (contador > 3) {
        contador = 0;
    }
    if (contador <= -1) {
        contador =3;
    }if (contador == 0) {
        castle1.style.opacity = 1;
    }
    
    else castle1.style.opacity = 0;
    if (contador == 1) {
        castle2.style.opacity = 1;
    }
    else castle2.style.opacity = 0;
    if (contador == 2) {
        castle3.style.opacity = 1;
    }
    else castle3.style.opacity = 0;
    if (contador == 3) {
        castle4.style.opacity = 1;
    }
    else castle4.style.opacity = 0;
}