"use strict";

let inputCode = document.querySelector("#input");
let inputConversion = document.querySelector("#output");
let buttonConvert = document.querySelector("#press");

buttonConvert.onclick = verifyInputCode;

function verifyInputCode() {
  let arrInput = inputCode.value;

  for (let i = 0; i < arrInput.length; i++) {
    if (arrInput[i] != 1 && arrInput[i] != 0) {
      window.alert("Please insert only BINARY values.");
      inputCode.value = "";
      return;
    }
  }

  if (arrInput != "") displayConversion(arrInput);
}

function convertBinaryToDecimal(val) {
  return parseInt(val, 2).toString(10);
}

function displayConversion(val) {
  inputConversion.value = convertBinaryToDecimal(val);
}