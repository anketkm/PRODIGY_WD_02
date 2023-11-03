let ms = 0, s = 0, m = 0;
let timer;
const display = document.getElementById('display');

function start() {
    if (!timer) {
        timer = setInterval(run, 10);
    }
}

function run() {
    ms++;
    if (ms === 100) {
        ms = 0;
        s++;
    }
    if (s === 60) {
        s = 0;
        m++;
    }
    display.innerHTML = `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}:${ms < 10 ? "0" + ms : ms}`;
}

function stop() {
    clearInterval(timer);
    timer = false;
}

function reset() {
    clearInterval(timer);
    timer = false;
    ms = 0;
    s = 0;
    m = 0;
    display.innerHTML = "00:00:00";
}
