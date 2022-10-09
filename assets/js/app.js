// Toggled elements
const startBtn = document.getElementById('start-button');
const stopBtn = document.getElementById('stop-button');
const countdown = document.querySelector('.countdown');
const commitMessage = document.getElementById('commit-message');
// Containers for buttons
const rerunContainer = document.getElementById('rerun');
const startBtnContainer = document.querySelector('.start-container');
const stopBtnContainer = document.querySelector('.stop-container');
// class lists (Probably will delete)
const startBtnClasslist = startBtnContainer.classList;
const stopBtnClasslist = stopBtnContainer.classList;
const commitMessageClasslist = commitMessage.classList;
// Timer sections
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
        stopBtnClasslist.replace('hidden', 'active');
        startBtnClasslist.replace('active', 'hidden');
    } else {
        startBtnClasslist.replace('hidden', 'active');
        stopBtnClasslist.replace('active', 'hidden');
    }
}

function commit() {
    // hidden
    startBtnClasslist.replace('active', 'hidden');
    stopBtnClasslist.replace('active', 'hidden');
    countdown.classList.replace('active', 'hidden');
    // active
    rerunContainer.classList.replace('hidden', 'active');
    commitMessageClasslist.replace('hidden', 'active');
}

function runAgain() {
    // hidden
    commitMessageClasslist.replace('active', 'hidden');
    rerunContainer.classList.replace('active', 'hidden');
    // active
    countdown.classList.replace('hidden', 'active');
    stopBtnClasslist.replace('hidden', 'active');
}

// Starts the application
function init() {
    let minutes = 44;
    let seconds = 59;
    minSection.innerHTML = minutes;
    secSection.innerHTML = seconds;

    // Starts the timer on the minute section
    minutes -= 1;
    minuteInterval = setInterval(() => {
        minSection.innerHTML = minutes;
        minutes -= 1;

        if (minutes < 0) {
            stopTimer();
            commit();
        }
    }, 60000);

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
    init();
    // Switches the button
    buttonToggle();
});

// Handler for stopping the timer
stopBtn.addEventListener('click', () => {
    // Stops the timer
    stopTimer();
    // Switches the button again. When pressed, the timer will restart.
    buttonToggle();
});

// Handler for reruning app
rerunContainer.addEventListener('click', () => {
    runAgain();
    init();
})


