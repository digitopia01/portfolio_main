document.addEventListener("DOMContentLoaded", function (event) {
  /*
   * Get the direction by which an element as been hovered.
   *
   * It is done by determining in which quadrant is the mouse
   * inside the element when mouseenter/mouseleave event starts.
   * This is done using trigonometry on the pointer position
   * relative to the center of the element.
   * @see https://freelance-drupal.com/node/79 for details
   *
   * @param event
   *   The event triggering the computation.
   *
   * @result string
   *   Can be 'top', 'right', 'bottom', 'left' depending on the situation.
   */
  const getHoverDirection = function (event) {
    var directions = ["top", "right", "bottom", "left"];
    var item = event.currentTarget;

    // Width and height of current item
    var w = item.offsetWidth;
    var h = item.offsetHeight;

    // Calculate the x/y value of the pointer entering/exiting, relative to the center of the item.
    // Scale (sort of normalize) the coordinate on smallest side to the scale of the longest.
    var x =
      (event.clientX - item.getBoundingClientRect().left - w / 2) *
      (w > h ? h / w : 1);
    var y =
      (event.clientY - item.getBoundingClientRect().top - h / 2) *
      (h > w ? w / h : 1);

    // Calculate the angle to the center the pointer entered/exited
    // and convert to clockwise format (top/right/bottom/left = 0/1/2/3).
    var d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

    return directions[d];
  };

  // Loop over items (in a IE11 compatible way).
  var items = document.getElementsByClassName("hover");
  for (var i = 0; i < items.length; i++) {
    // Loop over the registered event types.
    ["mouseenter", "mouseleave"].forEach(function (eventname) {
      items[i].addEventListener(
        eventname,
        function (event) {
          // Retrieve the direction of the enter/leave event.
          var dir = getHoverDirection(event);

          // Reset classes.
          // event.currentTarget.className = 'item hover';
          // > If support for IE11 is not needed.
          // event.currentTarget.classList.remove('mouseenter', 'mouseleave', 'top', 'right', 'bottom', 'left');
          // > If support for IE11 is needed.
          event.currentTarget.classList.remove("mouseenter");
          event.currentTarget.classList.remove("mouseleave");
          event.currentTarget.classList.remove("top");
          event.currentTarget.classList.remove("right");
          event.currentTarget.classList.remove("bottom");
          event.currentTarget.classList.remove("left");

          // Add the event and direction classes.
          // > If support for IE11 is not needed.
          // event.currentTarget.classList.add(event.type, dir);
          // > If support for IE11 is needed.
          event.currentTarget.className += " " + event.type + " " + dir;
        },
        false
      );
    });
  }

  // nav 클릭 시 스크롤 이동

  const gnbItems = document.querySelectorAll(".nav");
  const section = document.querySelectorAll(".section");

  gnbItems.forEach((gnbItem, index) => {
    gnbItem.addEventListener("click", (e) => {
      e.preventDefault();

      const sectionTop = section[index].offsetTop;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    });
  });

  // css root 컬러 변수 가져오기

  const root = document.documentElement;
  const rootStyle = getComputedStyle(root);
  const theme1_1 = rootStyle.getPropertyValue("--theme1-1"),
    theme1_2 = rootStyle.getPropertyValue("--theme1-2"),
    theme1_3 = rootStyle.getPropertyValue("--theme1-3"),
    theme1_4 = rootStyle.getPropertyValue("--theme1-4"),
    theme1_5 = rootStyle.getPropertyValue("--theme1-5"),
    theme2_1 = rootStyle.getPropertyValue("--theme2-1"),
    theme2_2 = rootStyle.getPropertyValue("--theme2-2"),
    theme2_3 = rootStyle.getPropertyValue("--theme2-3"),
    theme3_1 = rootStyle.getPropertyValue("--theme3-1"),
    theme3_2 = rootStyle.getPropertyValue("--theme3-2"),
    theme3_3 = rootStyle.getPropertyValue("--theme3-3"),
    theme3_4 = rootStyle.getPropertyValue("--theme3-4"),
    theme4_1 = rootStyle.getPropertyValue("--theme4-1"),
    theme4_2 = rootStyle.getPropertyValue("--theme4-2"),
    theme5_1 = rootStyle.getPropertyValue("--theme5-1"),
    theme5_2 = rootStyle.getPropertyValue("--theme5-2"),
    svgTheme1_1 = rootStyle.getPropertyValue("--svg-theme1-1"),
    svgTheme1_2 = rootStyle.getPropertyValue("--svg-theme1-2"),
    svgTheme1_3 = rootStyle.getPropertyValue("--svg-theme1-3"),
    svgTheme1_4 = rootStyle.getPropertyValue("--svg-theme1-4"),
    svgTheme1_5 = rootStyle.getPropertyValue("--svg-theme1-5"),
    svgTheme2_1 = rootStyle.getPropertyValue("--svg-theme2-1"),
    svgTheme2_2 = rootStyle.getPropertyValue("--svg-theme2-2"),
    svgTheme2_3 = rootStyle.getPropertyValue("--svg-theme2-3"),
    svgTheme3_1 = rootStyle.getPropertyValue("--svg-theme3-1"),
    svgTheme3_2 = rootStyle.getPropertyValue("--svg-theme3-2"),
    svgTheme3_3 = rootStyle.getPropertyValue("--svg-theme3-3"),
    svgTheme4_1 = rootStyle.getPropertyValue("--svg-theme4-1"),
    svgTheme4_2 = rootStyle.getPropertyValue("--svg-theme4-2"),
    svgTheme5_1 = rootStyle.getPropertyValue("--svg-theme5-1"),
    svgTheme5_2 = rootStyle.getPropertyValue("--svg-theme5-2"),
    svgThemeWhite = rootStyle.getPropertyValue("--white"),
    svgThemeBlack = rootStyle.getPropertyValue("--black"),
    svgThemeYellow = rootStyle.getPropertyValue("--yellow");

  // 테마 컬러 변수
  const themes = document.querySelectorAll(".theme");

  // theme 변경할 DOM 요소 변수
  const filter_1 = document.querySelectorAll(".filter_1"),
    filter_2 = document.querySelectorAll(".filter_2"),
    filter_3 = document.querySelectorAll(".filter_3"),
    filter_4 = document.querySelectorAll(".filter_4"),
    filter_5 = document.querySelectorAll(".filter_5"),
    visualText = document.querySelectorAll(".visualText"),
    color_1 = document.querySelectorAll(".color_1"),
    color_2 = document.querySelectorAll(".color_2"),
    color_3 = document.querySelectorAll(".color_3"),
    color_4 = document.querySelectorAll(".color_4"),
    color_5 = document.querySelectorAll(".color_5"),
    background_1 = document.querySelectorAll(".background_1"),
    background_2 = document.querySelectorAll(".background_2"),
    background_3 = document.querySelectorAll(".background_3"),
    background_4 = document.querySelectorAll(".background_4"),
    background_5 = document.querySelectorAll(".background_5"),
    randomBg = document.querySelectorAll(".randomBg"),
    themeEtcCol1 = document.querySelector(".themeEtcCol1"),
    themeEtcBg1 = document.querySelector(".themeEtcBg1"),
    themeEtcBg2 = document.querySelectorAll(".themeEtcBg2"),
    themeEtcBg3 = document.querySelectorAll(".themeEtcBg3"),
    themeEtcCol2 = document.querySelectorAll(".themeEtcCol2"),
    themeEtcCol3 = document.querySelectorAll(".themeEtcCol3"),
    themeEtcFil1 = document.querySelectorAll(".themeEtcFil1"),
    shapes = document.querySelectorAll(".shape");

  // theme color 클릭 시 테마 변경 함수

  for (const buttons of themes) {
    buttons.addEventListener("click", themeColorChange);
  }

  // 파도 색상 저장

  let waveColors = [];

  // 블로그 포스팅 랜덤 컬러 지정

  const props = [
    "--random1",
    "--random2",
    "--random3",
    "--random4",
    "--random5",
    "--random6",
    "--random7",
    "--random8",
  ];

  randomBg.forEach((item) => {
    const randomProp = props[Math.floor(Math.random() * props.length)];
    const randomColor = rootStyle.getPropertyValue(randomProp);
    item.style.backgroundColor = randomColor;
  });

  // Original Theme 오리지널 테마

  console.log("테마 1이/가 선택되었습니다");
  waveColors = [theme1_3, theme1_4, theme1_5];
  document.body.style.backgroundColor = "white";
  visualText.forEach((item) => (item.style.color = "black"));

  filter_1.forEach((item) => (item.style.filter = svgTheme1_1));
  filter_2.forEach((item) => (item.style.filter = svgTheme1_2));
  filter_3.forEach((item) => (item.style.filter = svgTheme1_3));
  filter_4.forEach((item) => (item.style.filter = svgTheme1_4));
  filter_5.forEach((item) => (item.style.filter = svgTheme1_5));

  color_1.forEach((item) => (item.style.color = theme1_1));
  color_2.forEach((item) => (item.style.color = theme1_2));
  color_3.forEach((item) => (item.style.color = theme1_3));
  color_4.forEach((item) => (item.style.color = theme1_4));
  color_5.forEach((item) => (item.style.color = theme1_5));

  background_1.forEach((item) => (item.style.backgroundColor = theme1_1));
  background_2.forEach((item) => (item.style.backgroundColor = theme1_2));
  background_3.forEach((item) => (item.style.backgroundColor = theme1_3));
  background_4.forEach((item) => (item.style.backgroundColor = theme1_4));
  background_5.forEach((item) => (item.style.backgroundColor = theme1_5));

  document.documentElement.style.setProperty("--pseudoFilter", svgTheme1_5);
  document.documentElement.style.setProperty("--pseudoColor", theme1_2);
  document.documentElement.style.setProperty("--pseudoBorder", theme1_3);

  themeEtcBg3.forEach((item) => (item.style.backgroundColor = theme1_1));

  function themeColorChange(event) {
    const eventClassName = event.target.className;
    if (eventClassName.includes("theme1")) {
      console.log("테마 1이/가 선택되었습니다");
      waveColors = [theme1_3, theme1_4, theme1_5];
      document.body.style.backgroundColor = "white";
      visualText.forEach((item) => (item.style.color = "black"));

      filter_1.forEach((item) => (item.style.filter = svgTheme1_1));
      filter_2.forEach((item) => (item.style.filter = svgTheme1_2));
      filter_3.forEach((item) => (item.style.filter = svgTheme1_3));
      filter_4.forEach((item) => (item.style.filter = svgTheme1_4));
      filter_5.forEach((item) => (item.style.filter = svgTheme1_5));

      color_1.forEach((item) => (item.style.color = theme1_1));
      color_2.forEach((item) => (item.style.color = theme1_2));
      color_3.forEach((item) => (item.style.color = theme1_3));
      color_4.forEach((item) => (item.style.color = theme1_4));
      color_5.forEach((item) => (item.style.color = theme1_5));

      background_1.forEach((item) => (item.style.backgroundColor = theme1_1));
      background_2.forEach((item) => (item.style.backgroundColor = theme1_2));
      background_3.forEach((item) => (item.style.backgroundColor = theme1_3));
      background_4.forEach((item) => (item.style.backgroundColor = theme1_4));
      background_5.forEach((item) => (item.style.backgroundColor = theme1_5));

      document.documentElement.style.setProperty("--pseudoFilter", svgTheme1_5);
      document.documentElement.style.setProperty("--pseudoColor", theme1_2);
      document.documentElement.style.setProperty("--pseudoBorder", theme1_3);

      themeEtcBg3.forEach((item) => (item.style.backgroundColor = theme1_1));
    } else if (eventClassName.includes("theme2")) {
      filter_1.forEach((item) => (item.style.filter = svgTheme2_1));
      filter_2.forEach((item) => (item.style.filter = svgTheme2_2));
      filter_3.forEach((item) => (item.style.filter = svgTheme2_3));
      filter_4.forEach((item) => (item.style.filter = svgTheme2_1));
      filter_5.forEach((item) => (item.style.filter = svgThemeWhite));

      color_1.forEach((item) => (item.style.color = theme2_1));
      color_2.forEach((item) => (item.style.color = theme2_2));
      color_3.forEach((item) => (item.style.color = theme2_3));
      color_4.forEach((item) => (item.style.color = theme1_4));
      color_5.forEach((item) => (item.style.color = "white"));

      background_1.forEach((item) => (item.style.backgroundColor = theme2_1));
      background_2.forEach((item) => (item.style.backgroundColor = theme2_2));
      background_3.forEach((item) => (item.style.backgroundColor = theme2_3));
      background_4.forEach((item) => (item.style.backgroundColor = theme1_4));
      background_5.forEach((item) => (item.style.backgroundColor = theme1_5));

      document.documentElement.style.setProperty(
        "--pseudoFilter",
        svgThemeWhite
      );
      document.documentElement.style.setProperty("--pseudoColor", theme2_1);
      document.documentElement.style.setProperty("--pseudoBorder", "white");

      console.log("테마 2이/가 선택되었습니다");
      waveColors = [theme2_1, theme2_2, theme2_3];
      document.body.style.backgroundColor = "black";
      visualText.forEach((item) => (item.style.color = "white"));
      themeEtcCol1.style.color = theme2_3;
      themeEtcBg1.style.backgroundColor = theme2_3;
      themeEtcCol2.forEach((item) => (item.style.color = "white"));
      themeEtcCol3.forEach((item) => (item.style.color = "black"));
      themeEtcBg2.forEach((item) => (item.style.backgroundColor = "black"));
      themeEtcBg3.forEach((item) => (item.style.backgroundColor = theme2_1));
      themeEtcFil1.forEach((item) => (item.style.filter = svgThemeWhite));
    } else if (eventClassName.includes("theme3")) {
      filter_1.forEach((item) => (item.style.filter = svgTheme3_2));
      filter_2.forEach((item) => (item.style.filter = svgTheme3_2));
      filter_3.forEach((item) => (item.style.filter = svgTheme3_3));
      filter_4.forEach((item) => (item.style.filter = svgTheme2_1));
      filter_5.forEach((item) => (item.style.filter = svgThemeBlack));

      color_1.forEach((item) => (item.style.color = theme3_4));
      color_2.forEach((item) => (item.style.color = theme3_4));
      color_3.forEach((item) => (item.style.color = theme3_4));
      color_4.forEach((item) => (item.style.color = theme3_4));
      color_5.forEach((item) => (item.style.color = theme3_4));

      background_1.forEach((item) => (item.style.backgroundColor = theme3_1));
      background_2.forEach((item) => (item.style.backgroundColor = theme3_2));
      background_3.forEach((item) => (item.style.backgroundColor = theme3_3));
      background_4.forEach((item) => (item.style.backgroundColor = theme1_4));
      background_5.forEach((item) => (item.style.backgroundColor = theme1_5));

      document.documentElement.style.setProperty(
        "--pseudoFilter",
        svgThemeBlack
      );
      document.documentElement.style.setProperty("--pseudoColor", theme3_2);
      document.documentElement.style.setProperty("--pseudoBorder", theme3_4);

      console.log("테마 3이/가 선택되었습니다");
      waveColors = [theme3_1, theme3_2, theme3_1];
      document.body.style.backgroundColor = "white";
      visualText.forEach((item) => (item.style.color = theme3_2));
      themeEtcCol1.style.color = theme3_2;
      themeEtcBg1.style.backgroundColor = theme3_2;
      themeEtcCol2.forEach((item) => (item.style.color = theme3_4));
      themeEtcCol3.forEach((item) => (item.style.color = theme3_4));
      themeEtcBg2.forEach((item) => (item.style.backgroundColor = "black"));
      themeEtcBg3.forEach((item) => (item.style.backgroundColor = theme3_2));
      themeEtcFil1.forEach((item) => (item.style.filter = svgThemeBlack));
      shapes.forEach((item) => (item.style.filter = svgTheme3_1));
    } else if (eventClassName.includes("theme4")) {
      filter_1.forEach((item) => (item.style.filter = svgTheme4_2));
      filter_2.forEach((item) => (item.style.filter = svgTheme4_2));
      filter_3.forEach((item) => (item.style.filter = svgTheme4_2));
      filter_4.forEach((item) => (item.style.filter = svgTheme4_2));
      filter_5.forEach(
        (item) =>
          (item.style.filter =
            "invert(50%) sepia(3%) saturate(12%) hue-rotate(352deg) brightness(92%) contrast(81%)")
      );

      color_1.forEach((item) => (item.style.color = theme4_2));
      color_2.forEach((item) => (item.style.color = theme4_2));
      color_3.forEach((item) => (item.style.color = theme4_2));
      color_4.forEach((item) => (item.style.color = theme4_2));
      color_5.forEach((item) => (item.style.color = "#555"));

      background_1.forEach((item) => (item.style.backgroundColor = theme4_1));
      background_2.forEach((item) => (item.style.backgroundColor = theme4_2));
      background_3.forEach((item) => (item.style.backgroundColor = theme4_1));
      background_4.forEach((item) => (item.style.backgroundColor = theme4_2));
      background_5.forEach((item) => (item.style.backgroundColor = theme4_1));

      document.documentElement.style.setProperty(
        "--pseudoFilter",
        "invert(33%) sepia(5%) saturate(11%) hue-rotate(30deg) brightness(93%) contrast(90%)"
      );
      document.documentElement.style.setProperty("--pseudoColor", "#555");
      document.documentElement.style.setProperty("--pseudoBorder", "#555");

      console.log("테마 4이/가 선택되었습니다");
      waveColors = [theme4_2, "rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0.3)"];
      document.body.style.backgroundColor = "white";
      visualText.forEach((item) => (item.style.color = theme4_1));
      themeEtcCol1.style.color = theme4_2;
      themeEtcBg1.style.backgroundColor = theme4_2;
      themeEtcCol2.forEach((item) => (item.style.color = theme4_2));
      themeEtcCol3.forEach((item) => (item.style.color = "white"));
      themeEtcBg2.forEach((item) => (item.style.backgroundColor = "white"));
      themeEtcBg3.forEach((item) => (item.style.backgroundColor = theme4_2));
      themeEtcFil1.forEach((item) => (item.style.filter = svgThemeBlack));
      shapes.forEach((item) => (item.style.filter = svgTheme4_2));
    } else if (eventClassName.includes("theme5")) {
      filter_1.forEach((item) => (item.style.filter = svgTheme2_1));
      filter_2.forEach((item) => (item.style.filter = svgTheme2_2));
      filter_3.forEach((item) => (item.style.filter = svgTheme2_3));
      filter_4.forEach((item) => (item.style.filter = svgTheme2_1));
      filter_5.forEach((item) => (item.style.filter = svgThemeWhite));

      color_1.forEach((item) => (item.style.color = theme2_1));
      color_2.forEach((item) => (item.style.color = theme2_2));
      color_3.forEach((item) => (item.style.color = theme2_3));
      color_4.forEach((item) => (item.style.color = theme1_4));
      color_5.forEach((item) => (item.style.color = "white"));

      background_1.forEach((item) => (item.style.backgroundColor = theme2_1));
      background_2.forEach((item) => (item.style.backgroundColor = theme2_2));
      background_3.forEach((item) => (item.style.backgroundColor = theme2_3));
      background_4.forEach((item) => (item.style.backgroundColor = theme1_4));
      background_5.forEach((item) => (item.style.backgroundColor = theme1_5));

      document.documentElement.style.setProperty(
        "--pseudoFilter",
        svgThemeWhite
      );
      document.documentElement.style.setProperty("--pseudoColor", theme2_1);
      document.documentElement.style.setProperty("--pseudoBorder", "white");

      console.log("테마 5이/가 선택되었습니다");
      waveColors = [
        "rgba(255, 206, 50, 0.8)",
        "rgba(255, 206, 50, 0.5)",
        "rgba(255, 206, 50, 0.2)",
      ];
      document.body.style.backgroundColor = "black";
      visualText.forEach((item) => (item.style.color = theme5_2));
      themeEtcCol1.style.color = theme5_1;
      themeEtcBg1.style.backgroundColor = theme5_1;
      themeEtcCol2.forEach((item) => (item.style.color = "white"));
      themeEtcCol3.forEach((item) => (item.style.color = "black"));
      themeEtcBg2.forEach((item) => (item.style.backgroundColor = "black"));
      themeEtcBg3.forEach((item) => (item.style.backgroundColor = theme2_1));
      themeEtcFil1.forEach((item) => (item.style.filter = svgThemeWhite));

      shapes.forEach((item) => (item.style.filter = svgTheme2_1));
    }
  }

  // shapes 함수

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
    // console.log(scroll);
    if (scroll > 1000) {
      navigator.style.display = "flex";
      setTimeout(() => {
        navigator.style.opacity = "1";
      }, 300);
    } else {
      navigator.style.opacity = "0";
      setTimeout(() => {
        navigator.style.display = "none";
      }, 300);
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
  const sectionCount = section.length;
  let isScrolling = false;

  section.forEach(function (item, index) {
    item.addEventListener("wheel", function (event) {
      event.preventDefault();

      if (!isScrolling) {
        isScrolling = true;

        let delta = 0;

        if (!event) event = window.event;
        if (event.wheelDelta) {
          delta = event.wheelDelta / 240;
          if (window.opera) delta = -delta;
        } else if (event.detail) delta = -event.detail / 3;

        let moveTop = window.scrollY;
        let sectionSelector = section[index];

        // wheel down: move to next section
        if (delta < 0) {
          if (sectionSelector !== sectionCount - 1) {
            try {
              moveTop =
                window.pageYOffset +
                sectionSelector.nextElementSibling.getBoundingClientRect().top;
            } catch (e) {}
          }
        }
        // wheel up: move to previous section
        else {
          if (sectionSelector !== 0) {
            try {
              moveTop =
                window.pageYOffset +
                sectionSelector.previousElementSibling.getBoundingClientRect()
                  .top;
            } catch (e) {}
          }
        }

        window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });

        setTimeout(function () {
          isScrolling = false;
        }, 300); // 0.3초 동안 감지하지 않도록 설정
        console.log(delta);
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
      const targetSection = section[index];
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Wave Canvas

  class Point {
    constructor(index, x, y, waveIndex) {
      this.x = x;
      this.y = y;
      this.fixedY = canvas.height / 2.5;
      this.speed = 0.01;
      this.cur = index * 5 + waveIndex * 200;
      this.max = Math.random() * 100 + 30;

      // 파도의 색상
      const colors = [
        "rgba(255,0,0,0.7)",
        "rgba(255,255,0,0.7)",
        "rgba(0,0,255,0.7)",
      ];
      this.color = colors[waveIndex];
    }

    update() {
      this.cur += this.speed;
      this.y = this.fixedY + Math.sin(this.cur) * this.max;
    }
  }

  const canvas = document.getElementById("waveCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const waves = [];

  for (let j = 0; j < 3; j++) {
    const points = [];
    for (let i = 0; i < 9; i++) {
      points.push(new Point(i, (canvas.width / 5) * i, canvas.height / 2, j));
    }
    waves.push(points);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    waves.forEach((points, j) => {
      points.forEach((point, index) => {
        point.color = waveColors[j];
        point.update();
      });

      ctx.beginPath();

      // Set the starting point at the left edge of the canvas
      ctx.moveTo(0, points[0].y);

      for (let i = 1; i < points.length - 2; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }

      ctx.quadraticCurveTo(
        points[points.length - 2].x,
        points[points.length - 2].y,
        points[points.length - 1].x,
        points[points.length - 1].y
      );

      // Set the ending point at the right edge of the canvas
      ctx.lineTo(canvas.width, points[points.length - 1].y);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fillStyle = points[0].color; // 파도의 첫 번째 포인트의 색상 사용
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    waves.forEach((points, j) => {
      points.forEach((point, index) => {
        point.x = (canvas.width / 5) * index;
        point.y = canvas.height / 2;
        point.fixedY = canvas.height / 2;
        point.max = Math.random() * 100 + 150;
        // 딜레이에 따라 초기 타이밍 조절
        point.cur = index * 5 + j * 10;
      });
    });
  });

  draw();
});
