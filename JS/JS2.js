var Flechaesquerra2 = document.getElementById('flechae2');
var Flechadreta2 = document.getElementById('flechad2');
var photoshop3 = document.getElementById('photoshop3');
var photoshop1 = document.getElementById('photoshop1');
var photoshop2 = document.getElementById('photoshop2');
var contador = 0;


Flechaesquerra2.onclick = function () {
    console.log(contador);
    contador = contador - 1;
    if (contador > 3) {
        contador = 0;
    }
    if (contador <= -1) {
        contador = 3;
    }if (contador == 0) {
        photoshop3.style.opacity = 1;
    }
    
    else photoshop3.style.opacity = 0;
    if (contador == 1) {
        photoshop1.style.opacity = 1;
    }
    else photoshop1.style.opacity = 0;
    if (contador == 2) {
        photoshop2.style.opacity = 1;
    }
    else photoshop2.style.opacity = 0;
    if (contador == 3) {
        photoshop2.style.opacity = 1;
    }
   
}
Flechadreta2.onclick = function () {
    console.log(contador);
    contador = contador + 1;
   if (contador > 3) {
        contador = 0;
    }
    if (contador <= -1) {
        contador = 3;
    }if (contador == 0) {
        photoshop3.style.opacity = 1;
    }
    
    else photoshop3.style.opacity = 0;
    if (contador == 1) {
        photoshop1.style.opacity = 1;
    }
    else photoshop1.style.opacity = 0;
    if (contador == 2) {
        photoshop2.style.opacity = 1;
    }
    else photoshop2.style.opacity = 0;
    if (contador == 3) {
        photoshop2.style.opacity = 1;
    }
}