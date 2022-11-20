//nav
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const Top = document.querySelector("#op");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    Top.classList.remove("hidden");
    Top.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    Top.classList.remove("flex");
    Top.classList.add("hidden");
  }
};

//hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
