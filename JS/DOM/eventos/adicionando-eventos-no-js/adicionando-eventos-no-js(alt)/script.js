const elH1 = document.querySelector("h1");
const elBody = document.querySelector("body");

const changeBgAndColorTexts = () => {
  elBody.style.backgroundColor = "#b32";
  elBody.style.color = "#2c2";
};

const reset = () => {
  elBody.style.backgroundColor = "#fff";
  elBody.style.color = "#000";
};

elH1.onclick = changeBgAndColorTexts;
elBody.ondblclick = reset;
