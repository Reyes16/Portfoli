var Flechaesquerra1 = document.getElementById('flechae1');
var Flechadreta1 = document.getElementById('flechad1');

var contador = 0;
var dibuix = document.getElementById('dibuix');
var dibuix1 = document.getElementById('dibuix1');
var dibuix2 = document.getElementById('dibuix2');
var dibuix3 = document.getElementById('dibuix3');
var dibuix4 = document.getElementById('dibuix4');
var dibuix5 = document.getElementById('dibuix5');


Flechaesquerra1.onclick = function () {
    console.log(contador);
    contador = contador - 1;
    if (contador > 5) {
        contador = 0;
    }
    if (contador <= -1) {
        contador = 5;
    }if (contador == 0) {
        dibuix.style.opacity = 1;
    }
    
    else dibuix.style.opacity = 0;
    if (contador == 1) {
        dibuix1.style.opacity = 1;
    }
    else dibuix1.style.opacity = 0;
    if (contador == 2) {
        dibuix2.style.opacity = 1;
    }
    else dibuix2.style.opacity = 0;
    if (contador == 3) {
        dibuix3.style.opacity = 1;
    }
    else dibuix3.style.opacity = 0;
    if (contador == 4) {
        dibuix4.style.opacity = 1;
    }
    else dibuix4.style.opacity = 0;
    if (contador == 5) {
        dibuix5.style.opacity = 1;
    }
    else dibuix5.style.opacity = 0;
}
Flechadreta1.onclick = function () {
    console.log(contador);
    contador = contador + 1;
    if (contador > 5) {
        contador = 0;
    }
    if (contador <= -1) {
        contador = 5;
    }
    if (contador == 0) {
        dibuix.style.opacity = 1;
    }
    else dibuix.style.opacity = 0;
    if (contador == 1) {
        dibuix1.style.opacity = 1;
    }
    else dibuix1.style.opacity = 0;
    if (contador == 2) {
        dibuix2.style.opacity = 1;
    }
    else dibuix2.style.opacity = 0;
    if (contador == 3) {
        dibuix3.style.opacity = 1;
    }
    else dibuix3.style.opacity = 0;
    if (contador == 4) {
        dibuix4.style.opacity = 1;
    }
    else dibuix4.style.opacity = 0;
    if (contador == 5) {
        dibuix5.style.opacity = 1;
    }
    else dibuix5.style.opacity = 0;
    console.log('Hola');
}

