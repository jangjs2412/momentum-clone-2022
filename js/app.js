const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function loginSubmitEvent(event){
    event.preventDefault();
    const userName = loginInput.value
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    console.log(userName);
    localStorage.setItem("username", userName);
    //greeting.innerText="Hello! "+userName;
    greeting.innerText=`Hello! ${userName}`; //백틱(``)을 사용해서 표현가능
}

loginForm.addEventListener("submit", loginSubmitEvent);