// Toggled elements
const startBtn = document.getElementById('start-button');
const stopBtn = document.getElementById('stop-button');
const countdown = document.querySelector('.countdown');
const commitMessage = document.getElementById('commit-message');
// Containers for buttons
const rerunContainer = document.getElementById('rerun');
const startBtnContainer = document.querySelector('.start-container');
const stopBtnContainer = document.querySelector('.stop-container');
// Class lists
const startClasses = startBtnContainer.classList;
const stopClasses = stopBtnContainer.classList;
const countClasses = countdown.classList;
const msgClasses = commitMessage.classList;

// Timer sections
const minSection = document.getElementById('minutes');
const secSection = document.getElementById('seconds');
const alertSound = document.getElementById('alertSound');

let minuteInterval;
let secondInterval;
alertSound.src = "./assets/sounds/alertSound.mp3";
alertSound.load();

function stopTimer() {
    clearInterval(minuteInterval);
    clearInterval(secondInterval);
}

function buttonToggle() {
    if (startClasses.contains('active')) {
        stopClasses.replace('hidden', 'active');
        startClasses.replace('active', 'hidden');
    } else {
        startClasses.replace('hidden', 'active');
        stopClasses.replace('active', 'hidden');
    }
}

function commit() {
    // hidden
    startClasses.replace('active', 'hidden');
    stopClasses.replace('active', 'hidden');
    countClasses.replace('active', 'hidden');
    // active
    rerunContainer.classList.replace('hidden', 'active');
    msgClasses.replace('hidden', 'active');
}

function runAgain() {
    // hidden
    msgClasses.replace('active', 'hidden');
    rerunContainer.classList.replace('active', 'hidden');
    // active
    countClasses.replace('hidden', 'active');
    stopClasses.replace('hidden', 'active');
}


// Starts the application
function init() {
    let minutes = 59;
    let seconds = 59;
    minSection.innerHTML = minutes;
    secSection.innerHTML = seconds;

    // Starts the timer on the minute section
    minutes -= 1;
    minuteInterval = setInterval(() => {
        minSection.innerHTML = minutes;
        minutes -= 1;

        if (minutes < -1) {
            stopTimer();
            commit();
            alertSound.play();

        }
    }, 1000);

    // Starts the timer on the second section
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

// handler for starting the timer
startBtn.addEventListener('click', () => {
    // Starts the timer
    buttonToggle();
    init();
    // Switches the button
});

// Handler for stopping the timer
stopBtn.addEventListener('click', () => {
    // Stops the timer
    stopTimer();
    // Switches the button again. When pressed, the timer will restart.
    buttonToggle();

});

// Handler for rerunning app
rerunContainer.addEventListener('click', () => {
    runAgain();
    init();
})


