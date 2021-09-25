const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");
const clickToDo = document.querySelector(".fa-sticky-note");
const toDoPage = document.querySelector("#todo-page");
const pageDown = document.querySelector(".pageDown");

const TODOS_KEY = "todos";
let toDos = [];

//위 아래로 내려오는 슬라이드 형태 창을 만들려고 했으나 실패//
function hiddenPage(event) {
    event.preventDefault();
    toDoPage.classList.remove("page-up");
    toDoPage.classList.add("page-down");
    setTimeout(function(event) {toDoPage.classList.remove("flex"); toDoPage.classList.add("hidden");}, 501);
}

pageDown.addEventListener("click", hiddenPage);

function clickedBtn(event) {
    toDoPage.classList.remove("page-down");
    toDoPage.classList.add("page-up");
    toDoPage.classList.remove("hidden");
    toDoPage.classList.add("flex");
}

clickToDo.addEventListener("click", clickedBtn);

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // JSON은 text를 string으로 바꿔줌//
}

function deleteToDo(event) {
    const delLi = event.target.parentElement;
    // 클릭 이벤트 추적으로 부모element를 찾을 수 있다,
    // 추적으로 다양한 것을 시도 가능해보임//
    delLi.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(delLi.id));
    // parseInt 는 문자열을 숫자로 바꿔주기 때문에 삽입 (todo.id는 number이고 delLi.id는 string이기 때문에 반응이 없다)
    saveToDos();
}

function checkFunction(event) {
    const changeCheck = event.path[1];
   changeCheck.classList.toggle("clicked");
    //새로고침해도 남아있는 체크리스트를 만들고 싶었으나 무리//
}

function paintToDo(newToDo) {
    const li = document.createElement("div");
    li.id = newToDo.id;
    // id를 부여해줘야 해당 값을 삭제,수정 시 HTML에서 찾을 수 있기 때문
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    //뒤에 text는 obj이 text와 id로 이루어져있어서 text만 출력하기 위함
    const button = document.createElement("i");
    const checkButton = document.createElement("i");
    const checkSpan = document.createElement("span");
    button.setAttribute("class", "fas fa-trash-restore fa-lg");
    button.addEventListener("click", deleteToDo);
    checkButton.setAttribute("class", "far fa-check-circle fa-lg");
    checkButton.addEventListener("click", checkFunction);
    checkSpan.appendChild(checkButton);
    li.appendChild(checkSpan);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    li.classList.add("iconPosition");
    if(toDos.length >= 10) {
        alert("Can you finish it by today?");
    }
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    // newToDo는 value를 복제해서 가지고 있는 것 (input의 현재 value를 새로운 변수에 복사하는 것)
    toDoInput.value = "";
    //따라서 현재 newToDo는 공백 전 value 값을 가지고 현재 toDoInput.value는 공백의 값을 가진다//
    const todoObj = {
        text:newToDo,
        id: Date.now(),
    };
    toDos.push(todoObj);
    //newToDo 값을 toDos에 push(localstorage에 넣으러면 array해줘야 하기 때문)
    paintToDo(todoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const loadToDos = localStorage.getItem(TODOS_KEY);
if(loadToDos !== null) {
    const parsedToDos = JSON.parse(loadToDos);
    //개별 스트링을 array화//
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    // array에 있는 개별 값들을 paintToDo에 넣어준다(새로고침시 화면에 리스트가 뜰 수 있게)
}
