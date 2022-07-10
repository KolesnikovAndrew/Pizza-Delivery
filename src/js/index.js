const pizza = document.getElementById("pizza");
let closeBtn = document.getElementById("close-btn");

const spinPizza = () => {
  pizza.style.transition = "5s";
  let randomDeg = Math.floor(Math.random() * (1024 - 9999));
  pizza.style.transform = `rotate(${randomDeg}deg)`;
  let audio = document.getElementById("spinPizzaSound");
  audio.play();
};
const openNavSection = (id) => {
  resetPizzaPosition();
  const piece = document.getElementById("nav-" + id);

  piece.style.visibility = "visible";
  closeBtn.style.visibility = "visible";
  closeBtn.id = `close-btn-${id}`;

  let audio = document.getElementById("pizzaSectionOpen");
  audio.play();
};
const closeNavSection = (id) => {
  document.getElementById(id).style.visibility = "hidden";
  id = id.charAt(id.length - 1);
  const piece = document.getElementById("nav-" + id);
  console.log(piece);
  piece.style.visibility = "hidden";
};

const resetPizzaPosition = () => {
  pizza.style.transition = "0s";
  pizza.style.transform = `rotate(0deg)`;
};
