
const timerBtn = document.getElementById('timer-button');
let minSection = document.getElementById('minutes');
let secSection = document.getElementById('seconds');


function init() {
    let minutes = 9;
    let seconds = 9;
    minSection.innerHTML = minutes;
    secSection.innerHTML = seconds;

    function endTimer() {
        clearInterval(minuteInterval);
        clearInterval(secondInterval);

    }

    minutes -= 1;
    const minuteInterval = setInterval(() => {
        minSection.innerHTML = minutes;
        minutes -= 1;

        if (minutes < 0) {
            endTimer();
        }
    }, 1000);




    seconds -= 1;
    const secondInterval = setInterval(() => {
        secSection.innerHTML = seconds;
        seconds -= 1;

        if (seconds < 0) {
            seconds = 9;
        }
    }, 1000);


    // ----------------------
    // --- Event Listener ---
    // ----------------------

};

init();
