const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function loginSubmitEvent(event){
    event.preventDefault();
    console.log(loginInput.value);
}

console.log("test");
loginForm.addEventListener("submit", loginSubmitEvent);