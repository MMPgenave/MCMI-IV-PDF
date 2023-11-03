// set the left of ruler number

const ex = document.querySelectorAll(".e-x");
const leftOfruler = ex[0].offsetWidth * 0.3333 - 25 + "px";
const rulerForNumber = document.querySelectorAll(".e-x .rulerForNumber");
for (let i = 0; i < ex.length; i++) {
  rulerForNumber[i].style.left = leftOfruler;
}

//move the lines and balls in svg

const svg = document.querySelectorAll(".e-x svg");
const svgWidth = Number(svg[0].clientWidth);
const svgHight = Number(svg[0].clientHeight);
for (let j = 0; j < ex.length; j++) {
  const Lines = svg[j].children;
  var standard_values = ex[j].querySelectorAll(".standard_value");
  const balls = ex[j].querySelectorAll(".ball");

  for (let i = 0; i < Lines.length; i++) {
    Lines[i].y1.baseVal.value =
      (-svgHight / 100) * (Number(standard_values[i].innerHTML) - 100);
    Lines[i].y2.baseVal.value =
      (-svgHight / 100) * (Number(standard_values[i + 1].innerHTML) - 100);
  }

  for (let i = 0; i < balls.length; i++) {
    console.log();
    balls[i].style.top =
      (-svgHight / 100) * (Number(standard_values[i].innerHTML) - 100) - 3 + "px";
  }
  
}

