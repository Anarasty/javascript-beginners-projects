"use strict";

const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
const stop = document.querySelector('#stop');

const wm = document.querySelector('#w_minutes');
const ws = document.querySelector('#w_seconds');

const bm = document.querySelector('#b_minutes');
const bs = document.querySelector('#b_seconds');

let startTimer;

start.addEventListener('click', () => {
    if(startTimer === undefined) {
        startTimer = setInterval(timer, 1000);
    } else {
        alert("Timer i salready running");
    }
});

reset.addEventListener('click', () => {
    wm.textContent = 25;
    ws.textContent = "00";
    bm.textContent = 5;
    bs.textContent = "00";

    document.querySelector('#counter').textContent = 0;
    stopInterval();
    startTimer = undefined;
});

stop.addEventListener('click', () => {
    stopInterval();
    startTimer = undefined;
});

function timer() {
    // work timer
    if(ws.textContent != 0) {
        ws.textContent--;
    } else if (wm.textContent != 0 && ws.textContent == 0) {
        ws.textContent = 59;
        wm.textContent--;
    }

    // break timer
    if(wm.textContent == 0 && ws.textContent == 0) {
        if(bs.textContent != 0) {
            bs.textContent--;
        } else if (bm.textContent != 0 && bs.textContent == 0) {
            bs.textContent = 59;
            bm.textContent--;
        }
    }

    if(wm.textContent == 0 && ws.textContent == 0 && bm.textContent == 0 && bs.textContent == 0) {
        wm.textContent = 25;
        ws.textContent = "00";
        bm.textContent = 5;
        bs.textContent = "00";

        document.querySelector('#counter').textContent++;
    }
}

function stopInterval() {
    clearInterval(startTimer);
}