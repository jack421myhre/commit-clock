const startBtn = document.getElementById('start-button');
const stopBtn = document.getElementById('stop-button');
const startBtnContainer = document.querySelector('.start-container');
const stopBtnContainer = document.querySelector('.stop-container');
const startBtnClasslist = startBtnContainer.classList;
const stopBtnClasslist = stopBtnContainer.classList;
const minSection = document.getElementById('minutes');
const secSection = document.getElementById('seconds');

let minuteInterval;
let secondInterval;

function stopTimer() {
    clearInterval(minuteInterval);
    clearInterval(secondInterval);
}

function buttonToggle() {
    if (startBtnClasslist.contains('active')) {
        startBtnClasslist.replace('active', 'hidden');
        stopBtnClasslist.replace('hidden', 'active');
    } else {
        startBtnClasslist.replace('hidden', 'active');
        stopBtnClasslist.replace('active', 'hidden');
    }
}

function init() {
    let minutes = 29;
    let seconds = 59;
    minSection.innerHTML = minutes;
    secSection.innerHTML = seconds;


    minutes -= 1;
    minuteInterval = setInterval(() => {
        minSection.innerHTML = minutes;
        minutes -= 1;

        if (minutes < 0) {
            stopTimer();
        }
        // Add function to change to 'TIME TO COMMIT!'
    }, 60000);

    seconds -= 1;
    secondInterval = setInterval(() => {
        secSection.innerHTML = seconds;
        seconds -= 1;

        if (seconds < 0) {
            seconds = 59;
        }
    }, 1000);

};


// -----------------------
// --- Event Listeners ---
// -----------------------
startBtn.addEventListener('click', () => {
    // Starts the timer
    init();
    // Switches the button
    buttonToggle();
});

stopBtn.addEventListener('click', () => {
    // Stops the timer
    stopTimer();
    // Switches the button again. When pressed, the timer will restart.
    buttonToggle();
});


