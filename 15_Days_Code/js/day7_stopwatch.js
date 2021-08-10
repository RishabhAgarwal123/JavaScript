const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const clear = document.querySelector('#clear');
const time = document.querySelector('#time');
let miliSeconds = 0, seconds = 0, minutes = 0, t;

const format = function (data) {
    return (data ? (data <= 9 ? '0' + data : data) : '00');
}

const addTime = function () {
    miliSeconds = Date.now() - timenow;
    let seconds = Math.floor(miliSeconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let mili;
    if (miliSeconds.toString().length <= 2) {
        mili = `${format(miliSeconds.toString().split('')[miliSeconds.toString().length - 2])}`;
    } else {
        mili = `${miliSeconds.toString().split('')[miliSeconds.toString().length - 3]}${miliSeconds.toString().split('')[miliSeconds.toString().length - 2]}`;
    }
    time.innerHTML = format(minutes) + ' : ' + format(seconds) + '.' + mili;
}

const callTimer = function () {
    timenow = Date.now();
    t = setInterval(addTime, 33);
}

const stopTimer = function () {
    clearTimeout(t);
    start.disabled = false;
}

const clearTimer = function () {
    time.textContent = '00 : 00.0';
    miliSeconds = 0, minutes = 0;
}