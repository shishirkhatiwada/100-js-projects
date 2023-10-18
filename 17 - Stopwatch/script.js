//vars and elements
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let isPaused = false;
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
const millisecondsEl = document.querySelector('#milliseconds');
const btnPlay = document.querySelector('.btn-play');
const btnPause = document.querySelector('.btn-pause');
const btnResume = document.querySelector('.btn-resume'); 
const btnReset = document.querySelector('.btn-reset');
const btnCheck = document.querySelector('.btn-check');


//events
btnPlay.addEventListener('click', start); 
btnPause.addEventListener('click', pause);
btnResume.addEventListener('click', resume); 
btnReset.addEventListener('click', reset); 


//functions
function start() {
    btnPlay.style.display = 'none'; 
    btnPause.style.display = 'block';
    btnReset.style.display = 'block'; 

    interval = setInterval(() => {
        if(!isPaused) {
            milliseconds += 1;
    
            if (milliseconds == 100) {
                seconds++;
                milliseconds = 0;
            }
    
            if (seconds == 60) {
                minutes++;
                seconds = 0;
            }
    
            millisecondsEl.textContent = formatTime(milliseconds);
            secondsEl.textContent = formatTime(seconds);
            minutesEl.textContent = formatTime(minutes);
        }

    }, 10);
}

function pause() {
    isPaused = true;
    btnResume.style.display = 'block'; 
    btnPause.style.display = 'none';
}

function resume() { 
    isPaused = false;
    btnResume.style.display = 'none'; 
    btnPause.style.display = 'block';
}

function reset() {
    isPaused = true;     
    clearInterval(interval); 
    minutes = 0;
    seconds = 0; 
    milliseconds = 0; 
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    millisecondsEl.textContent = '00';
    btnResume.style.display = 'none'; 
    btnPause.style.display = 'none';
    btnReset.style.display = 'none';
    btnPlay.style.display = 'block';
    isPaused = false; 
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
} 


