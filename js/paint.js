const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
/* Context는 Canvas안에서의 픽셀을 다루는 것 */


canvas.width = 500;
canvas.height = 500;
/* css뿐만 아니라 js에도 pixel을 위해 width와 height를 지정해야 한다. */
ctx.strokeStyle = "##2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX
    const y = event.offsetY
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

const paintPageDown = document.querySelector("#paint-body .pageDown");
const paintPage = document.querySelector("#paint-body");
const clickPaint = document.querySelector(".fa-palette");

function hiddenPage(event) {
    event.preventDefault();
    paintPage.classList.remove("page-up");
    paintPage.classList.add("page-down");
    setTimeout(function(event) {paintPage.classList.remove("flex"); paintPage.classList.add("hidden");}, 501);
}

paintPageDown.addEventListener("click", hiddenPage);

function clickedBtn(event) {
    paintPage.classList.remove("page-down");
    paintPage.classList.add("page-up");
    paintPage.classList.remove("hidden");
    paintPage.classList.add("flex");
}

clickPaint.addEventListener("click", clickedBtn);
Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));