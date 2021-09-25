const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logOut = document.querySelector("#log-out");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function onLogoutSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(USERNAME_KEY);
  logOut.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = "";
  loginInput.value = "";
  init();
}

function paintGreetings(username) {
  logOut.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logOut.addEventListener("submit", onLogoutSubmit);
}

function enterPage() {
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    paintGreetings(savedUsername);
  }
}

function init() {
  enterPage();
}
init();