"use strict";

// 스크롤을 아래로 움직일때 메뉴바 애니메이션 효과 주기
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// 위 화살표 버튼 클릭시 맨 위로 올라가는 버튼 생성하기
const home = document.querySelector(".home__container");
const arrowUpBtn = document.querySelector(".arrow__up");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  //  console.log("window.scrollY", window.scrollY);
  //   console.log("homeHeight", homeHeight - 200);
  //   console.log("opacity", window.scrollY / homeHeight);
  if (window.scrollY < homeHeight) {
    home.style.opacity = 1 - window.scrollY / homeHeight;
  }
});

// 스크롤을 아래로 움직이면 홈부분이 투명하게 변하게 설정하기
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUpBtn.classList.add("visible");
  } else {
    arrowUpBtn.classList.remove("visible");
  }
});

arrowUpBtn.addEventListener("click", () => {
  document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
});

// Project filter
const work__categories = document.querySelector(".work__categories");
const work__projects = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
work__categories.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter === false) {
    return;
  }

  ///Button selected
  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");
  const target = e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("selected");

  work__projects.classList.add("animation");
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.lang) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    work__projects.classList.remove("animation");
  }, 200);
});

// menu bar 버튼 클릭시 항목에 자동으로 스크롤 이동
const navMenuBtn = document.querySelectorAll(".navbar__menu__item");

for (let i = 0; i < navMenuBtn.length; i++) {
  navMenuBtn[i].addEventListener("click", (event) => {
    navbarMenu.classList.remove("open");
    scrollIntoView(event);
  });
}

//navbar toogle button handler responsive screen
const navbarMenu = document.querySelector(".navbar__menu");
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");

navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

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

// project category Count
const category__count = document.querySelectorAll(".category__count");
const vanillaJSCount = Array.from(projects).filter((project) => project.dataset.lang === "vanillaJS").length;
const reactjsCount = Array.from(projects).filter((project) => project.dataset.lang === "reactjs").length;
const reactTSCount = Array.from(projects).filter((project) => project.dataset.lang === "reactTS").length;

category__count[0].innerText = projects.length;
category__count[1].innerText = vanillaJSCount;
category__count[2].innerText = reactjsCount;
category__count[3].innerText = reactTSCount;

// console.log(Array.from(projects).filter((project) => project.dataset.lang === "reactjs")); ES6
// console.log(Array.prototype.slice.call(projects).filter((project) => project.dataset.lang === "reactjs"));
// console.log(projects.filter((project) => project.dataset.lang === "reactjs"));
