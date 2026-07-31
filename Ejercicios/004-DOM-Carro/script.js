// ── Selección de elementos ──────────────────────────────────────
const redColor    = document.querySelector(".red");
const blackColor  = document.querySelector(".black");
const imageCard   = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const grayColor   = document.getElementsByClassName("gray")[0];
const cartButton  = document.getElementById("button");
const itemTag     = document.getElementsByTagName("h3")[0];

// ── Imágenes por color (URLs públicas) ─────────────────────────
const IMAGES = {
  red:   "https://i.postimg.cc/cH2pJdny/red-benz.webp",
  gray:  "https://i.postimg.cc/BvyYTMQ2/gray-benz.jpg",
  black: "https://i.postimg.cc/NGRJX8hr/black-benz.jpg",
};

// ── Función reutilizable para cambiar color ─────────────────────
function changeColor(color) {
  imageCard.style.backgroundImage  = `url("${IMAGES[color]}")`;
  cartButton.style.backgroundColor = color === "black" ? "#111" : color;
  itemTag.style.backgroundColor    = color === "black" ? "#111" : color;
}

// ── Eventos — colores ───────────────────────────────────────────
redColor.addEventListener("click",   () => changeColor("red"));
grayColor.addEventListener("click",  () => changeColor("gray"));
blackColor.addEventListener("click", () => changeColor("black"));

// ── Eventos — botones ───────────────────────────────────────────
cartButton.addEventListener("click", () => {
  cartButton.style.display = "none";
  feedbackBtn.classList.add("show");
});

feedbackBtn.addEventListener("click", () => {
  feedbackBtn.classList.remove("show");
  cartButton.style.display = "block";
});
