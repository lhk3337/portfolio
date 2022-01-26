"use strict";
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  // console.log("window.scrollY", window.scrollY);
  // console.log("homeHeight", homeHeight);
  // console.log(window.scrollY / homeHeight);
  if (window.scrollY < homeHeight) {
    home.style.opacity = 1 - window.scrollY / homeHeight;
  }
});

const navMenuBtn = document.querySelectorAll(".navbar__menu__item");

for (let i = 0; i < navMenuBtn.length; i++) {
  navMenuBtn[i].addEventListener("click", (event) => {
    scrollIntoView(event);
  });
}

const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", (event) => {
  scrollIntoView(event);
});

const scrollIntoView = (event) => {
  const {
    target: {
      dataset: { tag },
    },
  } = event;
  document.querySelector(tag).scrollIntoView({ behavior: "smooth" });
};
