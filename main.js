// 테마 컬러 변수

const themes = document.querySelectorAll(".theme");

//shapes 변수와 함수
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

//navigator
const navigator = document.querySelector(".navigator");

//scroll Event
window.addEventListener("scroll", () => {
  let scroll = scrollY;

  // NAV 이벤트
  console.log(scroll);
  if (scroll > 250) {
    navigator.style.display = "flex";
  } else {
    navigator.style.display = "none";
  }

  // Shapes 이벤트
  if (scroll < 2850) {
    shapesMovement();
  }
  if (scroll > 2900 && scroll < 4019) {
    shapesMovement("secondposition");
  }
  if (scroll > 4020) {
    shapesMovement("thirdposition");
  }
  if (scroll > 5120) {
    shapesMovement("fourthposition");
  }
  if (scroll > 5950) {
    shapesMovement("footerposition");
  }
});

//con2 버튼 클릭하여 리스트 변경
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
