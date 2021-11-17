const switchEl = document.getElementById("switch");
const armEl = document.getElementById("inner-arm");

const checkTheSwitch = ({ target: el }) => {
  if (el.checked) {
    el.disabled = true;
  } else {
    el.disabled = false;
  }
};

window.onload = () => {
  switchEl.checked = false;
  switchEl.disabled = false;
  checkTheSwitch({ target: switchEl });
};

const turnOffSwitch = () => {
  switchEl.checked = false;
  checkTheSwitch({ target: switchEl });
};

switchEl.addEventListener("change", checkTheSwitch, false);
armEl.addEventListener("transitionend", turnOffSwitch, false);
