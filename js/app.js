const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function loginSubmitEvent(event){
    event.preventDefault();
    console.log(loginInput.value);
}

function linkClick(event){
    event.preventDefault();
    console.log(event);
}

const link = document.querySelector("a");


console.log("test");
loginForm.addEventListener("submit", loginSubmitEvent);
link.addEventListener("click",linkClick);