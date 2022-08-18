"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const dollars = document.querySelector('#dollars');
    const cents = document.querySelector('#cents');

    dollars.addEventListener('input', (e) => {
        e.preventDefault();
        let dollarsValue = dollars.value;
        cents.textContent = Math.round(dollarsValue * 100);
    });
});