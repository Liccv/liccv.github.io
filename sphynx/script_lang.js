let button_pl = document.getElementById("button_pl");
let button_en = document.getElementById("button_en");
const text_pl = document.querySelectorAll(".lang_pl");
const text_en = document.querySelectorAll(".lang_en");

function plFunction() {
  text_pl.forEach((pl) => {
    pl.style.display = "block";
  });
  text_en.forEach((en) => {
    en.style.display = "none";
  });
}

function enFunction() {
  text_pl.forEach((pl) => {
    pl.style.display = "none";
  });
  text_en.forEach((en) => {
    en.style.display = "block";
  });
}
