const btn = document.querySelector("button");
const div = document.querySelector("div");

const modalEventOpen = () => {
  div.classList.add("modal");
};

btn.addEventListener("click", modalEventOpen);

document.addEventListener("keydown", function (event) {
  const keyEsc = event.key === "Escape";
  if (keyEsc) {
    div.classList.remove("modal");
  }
});
