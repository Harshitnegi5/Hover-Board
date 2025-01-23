let container = document.querySelector(".main > .container");

let colors = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let square = 500;

for (let i = 0; i < square; i++) {
  let square = document.createElement("div");

  square.classList.add("box");

  container.appendChild(square);

  square.addEventListener("mouseenter", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));
}
function setColor(element) {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    hex += getRandomColors();
  }
  element.style.background = hex;
  element.style.boxShadow = ` 0 2px ${hex}, 0 0 10px ${hex}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = ` 0 0 2px #000`;
}

const getRandomColors = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
