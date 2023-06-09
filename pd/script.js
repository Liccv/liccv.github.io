const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav");

toggleButton.addEventListener("click", () => {
  Array.from(navbarLinks).forEach((link) => {
    link.classList.toggle("active");
  });
});

var dots = document.getElementsByClassName("dots");
var moreText = document.getElementsByClassName("more");
var btn1 = document.getElementById("read-more1");
var btn2 = document.getElementById("read-more2");
var btn3 = document.getElementById("read-more3");

function readMore1() {
  if (dots[0].style.display === "none") {
    dots[0].style.display = "inline";
    btn1.innerHTML = "Czytaj więcej";
    moreText[0].style.display = "none";
  } else {
    dots[0].style.display = "none";
    btn1.innerHTML = "Schowaj";
    moreText[0].style.display = "inline";
  }
}

function readMore2() {
  if (dots[1].style.display === "none") {
    dots[1].style.display = "inline";
    btn2.innerHTML = "Czytaj więcej";
    moreText[1].style.display = "none";
  } else {
    dots[1].style.display = "none";
    btn2.innerHTML = "Schowaj";
    moreText[1].style.display = "inline";
  }
}

function readMore3() {
  if (dots[2].style.display === "none") {
    dots[2].style.display = "inline";
    btn3.innerHTML = "Czytaj więcej";
    moreText[2].style.display = "none";
  } else {
    dots[2].style.display = "none";
    btn3.innerHTML = "Schowaj";
    moreText[2].style.display = "inline";
  }
}
