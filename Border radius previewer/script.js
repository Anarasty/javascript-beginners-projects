"use strict";

const borderContainer = document.querySelector("#border_radius_container");

const borderRadiusInputContainer = document.querySelector(
  "#border_radius_input"
);
const borderTopLeft = document.querySelector("#top_left");
const borderTopRight = document.querySelector("#top_right");
const borderBottomRight = document.querySelector("#bottom_right");
const borderBottomLeft = document.querySelector("#bottom_left");

const resultBorderRadius = document.querySelector("#border_radius");

resultBorderRadius.innerHTML = getComputedStyle(
  borderContainer,
  null
).getPropertyValue("border-radius");

borderRadiusInputContainer.addEventListener("input", () => {
  borderContainer.style.borderTopLeftRadius = borderTopLeft.value + "px";
  borderContainer.style.borderTopRightRadius = borderTopRight.value + "px";
  borderContainer.style.borderBottomRightRadius =
    borderBottomRight.value + "px";
  borderContainer.style.borderBottomLeftRadius = borderBottomLeft.value + "px";

  resultBorderRadius.innerHTML = borderContainer.style.borderRadius;
});

console.log(1);
