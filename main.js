// 테마 컬러 변수
const themes = document.querySelectorAll(".theme");

// shapes 변수와 함수
const shapes = document.querySelectorAll(".shape");

function shapesMovement(e) {
  for (const item of shapes) {
    item.classList.remove("secondposition");
    item.classList.remove("thirdposition");
    item.classList.remove("fourthposition");
    item.classList.remove("footerposition");
    item.classList.add(e);
  }
}

// navigator
const navigator = document.querySelector(".navigator");

// scroll Event
window.addEventListener("scroll", () => {
  let scroll = scrollY;

  // NAV 이벤트
  console.log(scroll);
  if (scroll > 1000) {
    navigator.style.display = "flex";
  } else {
    navigator.style.display = "none";
  }

  // Shapes 이벤트
  if (scroll < 1900) {
    shapesMovement();
  }
  if (scroll > 2500) {
    shapesMovement("secondposition");
  }
  if (scroll > 3200) {
    shapesMovement("thirdposition");
  }
  if (scroll > 4500) {
    shapesMovement("fourthposition");
  }
  if (scroll > 5700) {
    shapesMovement("footerposition");
  }
});

// scroll 감지에 따른 페이지 이동
const elm = document.querySelectorAll(".section");
const elmCount = elm.length;
let isScrolling = false;

elm.forEach(function (item, index) {
  item.addEventListener("wheel", function (event) {
    event.preventDefault();

    if (!isScrolling) {
      isScrolling = true;

      let delta = 0;

      if (!event) event = window.event;
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) delta = -event.detail / 3;

      let moveTop = window.scrollY;
      let elmSelector = elm[index];

      // wheel down: move to next section
      if (delta < 0) {
        if (elmSelector !== elmCount - 1) {
          try {
            moveTop =
              window.pageYOffset +
              elmSelector.nextElementSibling.getBoundingClientRect().top;
          } catch (e) {}
        }
      }
      // wheel up: move to previous section
      else {
        if (elmSelector !== 0) {
          try {
            moveTop =
              window.pageYOffset +
              elmSelector.previousElementSibling.getBoundingClientRect().top;
          } catch (e) {}
        }
      }

      const body = document.querySelector("html");
      window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });

      setTimeout(function () {
        isScrolling = false;
      }, 300); // 0.3초 동안 감지하지 않도록 설정
    }
  });
});

// con2 버튼 클릭하여 리스트 변경
const con2 = document.querySelector(".con2");
const changeButtons = con2.querySelectorAll(".appear");
const con2SubHeadings = con2.querySelectorAll(".con2heading");
const con2lists = con2.querySelectorAll(".lists");

function fadeslideclick() {
  for (let item of con2SubHeadings) {
    item.classList.toggle("active");
  }
  for (let item of con2lists) {
    item.classList.toggle("active");
  }
}

for (let item of changeButtons) {
  item.addEventListener("click", fadeslideclick);
}

// 스크롤 위치에 따라 섹션으로 자동 스크롤
const sectionButtons = document.querySelectorAll(".section-button");

sectionButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const targetSection = elm[index];
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
