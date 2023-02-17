window.addEventListener("load", sidenVises);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

function sidenVises() {
  console.log("sidenVises");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}
