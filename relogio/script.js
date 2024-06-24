const ps = document.getElementsByClassName("second-hand"); // selecionando os ponteiros
const pm = document.getElementsByClassName("min-hand");
const ph = document.getElementsByClassName("hour-hand");


function showTime() { 
const date = new Date(); // horario agora
const h = date.getHours(); // horas
const m = date.getMinutes();  // minutos
const s = date.getSeconds(); // segundos


const hands = document.querySelectorAll('.hand'); // juntando e selecionando os ponteiros
const hDeg = 30*h +m/2; // ponteiro de horas rotação em graus
const mDeg = 6*m;// ponteiro de minutos rotação em graus
const sDeg = 6*s; // ponteiro de segundos rotação em graus

 hands.forEach(hand => {
        if (hand.classList.contains('hour-hand')) {
            hand.style.transform = `rotate(${hDeg}deg)`; // rotação dos ponteiro
        } else if (hand.classList.contains('min-hand')) {
            hand.style.transform = `rotate(${mDeg}deg)`; 
        } else if (hand.classList.contains('second-hand')) {
            hand.style.transform = `rotate(${sDeg}deg)`; 
        }
    });


console.log(h, m, s); 
}


setInterval(showTime, 1000); // vai rodar a cada segundo