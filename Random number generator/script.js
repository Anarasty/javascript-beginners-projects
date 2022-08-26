const btnRand = document.querySelector("#rand-btn");

function randomNum() {
  let min = document.querySelector("#min");
  let max = document.querySelector("#max");

  let minValue = Number(min.value);
  let maxValue = Number(max.value);

  if (minValue > maxValue) {
    minValue = maxValue + minValue;
    maxValue = minValue - maxValue;
    minValue = minValue - maxValue;
    min.value = minValue;
    max.value = maxValue;
  }
  let num = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  document.querySelector("#rand-num").textContent = num;
}

window.addEventListener("load", randomNum());
btnRand.addEventListener("click", randomNum);
