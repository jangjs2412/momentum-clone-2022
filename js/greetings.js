const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const nameQh2 = document.querySelector(".nameQ_h2");
const todoQh2 = document.querySelector(".todoQ_h2");
const todoQ = document.querySelector(".todoQ");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUserName = localStorage.getItem(USERNAME_KEY);

function loginSubmitEvent(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    //greeting.innerText="Hello! "+userName;
    //greeting.innerText=`Hello! ${userName}`; //백틱(``)을 사용해서 표현가능
    //greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText=`Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    nameQh2.classList.add(HIDDEN_CLASSNAME);
    todoQh2.classList.remove(HIDDEN_CLASSNAME);
    todoQ.classList.remove(HIDDEN_CLASSNAME);
}

if(savedUserName == null){
    todoQ.classList.add(HIDDEN_CLASSNAME);
    todoQh2.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmitEvent);
}else{
    paintGreetings();
}


