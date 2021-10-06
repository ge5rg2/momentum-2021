const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
/* Context는 Canvas안에서의 픽셀을 다루는 것 */
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const eraser = document.getElementById("jsEraser");

const INITIAL_COLOR = "##2c2c2c";
const CANVAS_SIZE = 500;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
/* css뿐만 아니라 js에도 pixel을 위해 width와 height를 지정해야 한다. */
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
/* ctx의 기본 색상과 굵기 fillStyle는 사각형 형태*/

let painting = false;
let filling = false; 
let erasingStart = false;
let erasingStop = false;

function stopPainting() {
    if(erasingStop === true) {
        erasingStart = false;
        painting =false;
    } else {
        painting = false;
    }
}

function startPainting() {
    if(erasingStop === true) {
        erasingStart = true;
        painting =false;
    } else {
        painting = true;
    }
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
    if(erasingStart === true){
        ctx.clearRect(x,y,20,20);
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick() {
    if(filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

function handleEraserClick() {
    if(erasingStop === true) {
        erasingStop = false;
        eraser.innerText = "eraser";
    } else {
        erasingStop = true;
        eraser.innerText = "erasing";
    }
}

function handleCanvasClick() {
    if (filling) {
      ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}


if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
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

if(range) {
    range.addEventListener("input", handleRangeChange);
}

if(mode) {
    mode.addEventListener("click", handleModeClick);
}

if(eraser) {
    eraser.addEventListener("click", handleEraserClick);
}