let container = document.querySelector(".main > .container");

let colors = ["#86E272", "#F7A4E0", "#6BB4F9", "#FFE669", "#FF3D3E", "#DAA4FF"];


let square = 500;

for (let i = 0; i < square; i++) {
  let square = document.createElement("div");

  square.classList.add("box");

  container.appendChild(square);

  square.addEventListener("mouseenter", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));
}
function setColor(element) {
  const color = getRandomColors();
  element.style.background = color;
  element.style.boxShadow = ` 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = ` 0 0 2px #000`;
}

function getRandomColors(){
    return colors[Math.floor(Math.random() * colors.length)]
}