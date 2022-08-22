const pic = document.querySelector("#main-shoe");

const black = document.querySelector(".black");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const pink = document.querySelector(".pink");
const red = document.querySelector(".red");
const white = document.querySelector(".white");

const colors = document.querySelectorAll(".color");

const info = [
  {
    src: "iphone13_black.png",
  },
  {
    src: "iphone13_blue.png",
  },
  {
    src: "iphone13_green.png",
  },
  {
    src: "iphone13_pink.png",
  },
  {
    src: "iphone13_red.png",
  },
  {
    src: "iphone13_white.png",
  },
];

black.addEventListener("click", () => {
    pic.src = info[0].src;
});

blue.addEventListener("click", () => {
    pic.src = info[1].src;
});

green.addEventListener("click", () => {
    pic.src = info[2].src;
});

pink.addEventListener("click", () => {
    pic.src = info[3].src;
});

red.addEventListener("click", () => {
    pic.src = info[4].src;
});

white.addEventListener("click", () => {
    pic.src = info[5].src;
});

function color() {
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
}
colors.forEach(c => c.addEventListener('click', color));