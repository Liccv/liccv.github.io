const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav");

toggleButton.addEventListener("click", () => {
  Array.from(navbarLinks).forEach((link) => {
    link.classList.toggle("active");
  });
});
