const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds(); 

    if (hr < 10) hr = '0' + hr; // Colocando o zero

    if (min < 10) min = '0' + min; // Colocando o zero
    
    if (s < 10) s = '0' + s; // Colocando o zero

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})
