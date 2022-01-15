const clickMap = document.querySelector(".fa-map-marked-alt");
const mapPage = document.querySelector("#map-page");
let checkPage = "0";

const clcikedMap = () => {
    mapPage.classList.remove("page-down");
    mapPage.classList.add("page-up");
    mapPage.classList.remove("hidden");
    mapPage.classList.add("flex");
    checkPage = "1";
}

const unClcikedMap = (event) => {
    checkPage = "0";
    mapPage.classList.remove("page-up");
    mapPage.classList.add("page-down");
    setTimeout(function(event) {mapPage.classList.remove("flex"); mapPage.classList.add("hidden");}, 501);
}

clickMap.addEventListener("click", function() {
    if(checkPage === "0") {
        clcikedMap();
    } else {
        unClcikedMap();
    }
});