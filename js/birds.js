const images = [
    {
        image: "개개비.jpg",
        title: "개개비",
    },
    {
        image: "곤줄박이.jpg",
        title: "곤줄박이",
    },
    {
        image: "꾀꼬리.jpg",
        title: "꾀꼬리",
    },
    {
        image: "노랑할미새.jpg",
        title: "노랑할미새",
    },
    {
        image: "도요새.jpg",
        title: "도요새",
    },
    {
        image: "동고비.jpg",
        title: "동고비",
    },
    {
        image: "때까치.jpg",
        title: "때까치",
    },
    {
        image: "멧새.jpg",
        title: "멧새",
    },
    {
        image: "물닭.jpg",
        title: "물닭",
    },
    {
        image: "물총새.jpg",
        title: "물총새",
    },
    {
        image: "민물가마우지.jpg",
        title: "민물가마우지",
    },
    {
        image: "박새.jpg",
        title: "박새",
    },
    {
        image: "방울새.jpg",
        title: "방울새",
    },
    {
        image: "뿔논병아리.jpg",
        title: "뿔논병아리",
    },
    {
        image: "새호리기.jpg",
        title: "새호리기",
    },
    {
        image: "쇠백로.jpg",
        title: "쇠백로",
    },
    {
        image: "알락할미새.jpg",
        title: "알락할미새",
    },
    {
        image: "왜가리.jpg",
        title: "왜가리",
    },
    {
        image: "저어새.jpg",
        title: "저어새",
    },
    {
        image: "중대백로.jpg",
        title: "중대백로",
    },
    {
        image: "청둥오리.jpg",
        title: "청둥오리",
    },
    {
        image: "촉새.jpg",
        title: "촉새",
    },    
    {
        image: "파랑새.jpg",
        title: "파랑새",
    },    
    {
        image: "해오라기.jpg",
        title: "해오라기",
    },    
    {
        image: "황조롱이.jpg",
        title: "황조롱이",
    }
];

const birdBody = document.querySelector("#daily-bird");
const image = document.querySelector("#daily-bird div");
const title = document.querySelector("#daily-bird span");

const randomBird = images[Math.floor(Math.random()*images.length)];

const chosenImage = document.createElement("img");
chosenImage.src = `img/${randomBird.image}`;

image.appendChild(chosenImage);
title.innerText = randomBird.title;

const clickBird = document.querySelector(".fa-feather-alt");
//위에 부분까지는 랜덤으로 새 이미지와 문구 생성기 //

function hiddenPage(event) {
    event.preventDefault();
    birdBody.classList.remove("page-up");
    birdBody.classList.add("page-down");
    setTimeout(function(event) {birdBody.classList.remove("flex"); birdBody.classList.add("hidden");}, 501);
}

title.addEventListener("click", hiddenPage);

function clickedBird(event) {
    birdBody.classList.remove("page-down");
    birdBody.classList.add("page-up");
    birdBody.classList.remove("hidden");
    birdBody.classList.add("flex");
}

clickBird.addEventListener("click", clickedBird);
// todo 페이지와 유사한 방식으로 만듬 //

function handleRC(event) {
    event.preventDefault();
}

if(birdBody) {
    birdBody.addEventListener("contextmenu", handleRC);
}