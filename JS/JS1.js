var Flechaesquerra = document.getElementById('flechae');
var Flechadreta = document.getElementById('flechad');
var Secador = document.getElementById('secador');
var illa = document.getElementById('illa');
var linx1 = document.getElementById('linx1');
var linx2 = document.getElementById('linx2');
var linx3 = document.getElementById('linx3');
var linx4 = document.getElementById('linx4');

var contador = 0;



Flechadreta.onclick = function () {
    console.log(contador);
    contador = contador - 1;
    if (contador > 5) {
        contador = 0;
    }
    if (contador <= -1) {
        contador = 5;
    }if (contador == 0) {
        Secador.style.zIndex = 1;
    }
    
    else Secador.style.zIndex = 0;
    if (contador == 1) {
        illa.style.zIndex = 1;
    }
    else illa.style.zIndex = 0;
    if (contador == 2) {
        linx1.style.opacity = 1;
    }
    else linx1.style.opacity = 0;
    if (contador == 3) {
        linx2.style.opacity = 1;
    }
    else linx2.style.opacity = 0;
    if (contador == 4) {
        linx3.style.opacity = 1;
    }
    else linx3.style.opacity = 0;
    if (contador == 5) {
        linx4.style.opacity = 1;
    }
    else linx4.style.opacity = 0;
}
    

Flechaesquerra.onclick = function () {
    console.log(contador);
    contador = contador - 1;
    if (contador > 5) {
        contador = 0;
    }
    if (contador <= -1) {
        contador = 5;
    }if (contador == 0) {
        Secador.style.zIndex = 1;
    }
    
    else Secador.style.zIndex = 0;
    if (contador == 1) {
        illa.style.zIndex = 1;
    }
    else illa.style.zIndex = 0;
    if (contador == 2) {
        linx1.style.opacity = 1;
    }
    else linx1.style.opacity = 0;
    if (contador == 3) {
        linx2.style.opacity = 1;
    }
    else linx2.style.opacity = 0;
    if (contador == 4) {
        linx3.style.opacity = 1;
    }
    else linx3.style.opacity = 0;
    if (contador == 5) {
        linx4.style.opacity = 1;
    }
    else linx4.style.opacity = 0;
}
