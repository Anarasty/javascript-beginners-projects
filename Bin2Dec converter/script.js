"use strict";

const input = document.querySelector("#input");
const output = document.querySelector("#output");
const errorField = document.querySelector(".error");
const limitField = document.querySelector("#limit");

let LIMIT = 8;

window.onload = function () {
  limitField.value = LIMIT;
};

function validate(text = "") {
  //letter validation
  if (/[a-zа-я]/gi.test(text)) {
    errorField.textContent =
      "You have entered a letter, but only numbers allowed";
    return false;
  }
  //limit validation
  if (text.length > LIMIT) {
    errorField.textContent = `Limit of digits ${LIMIT}`;
    return false;
  }
  //1 and 0 validation
  if (/[2-9]/g.test(text)) {
    errorField.textContent = "You have to enter only 1 and 0";
    return;
  }

  return true;
}

function convert(sequence = "") {
  const splitted = [...sequence],
    sequenceLength = splitted.length;

  let result = 0;

  for (let i = sequenceLength - 1; i >= 0; i--) {
    const digit = Number(splitted[sequenceLength - i - 1]);
    result += digit * Math.pow(2, i);
  }

  return result;
}

input.addEventListener("input", ({ target: { value } }) => {
  if (validate(value)) {
    errorField.textContent = "";
    const result = convert(value);
    output.value = result;
  } else {
    output.value = "";
  }
});

limitField.addEventListener("change", ({ target: { value } }) => {
  LIMIT = Number(value);
});
