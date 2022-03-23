const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUserName = localStorage.getItem(USERNAME_KEY);

function loginSubmitEvent(event){
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(userName);
    localStorage.setItem(USERNAME_KEY, userName);
    //greeting.innerText="Hello! "+userName;
    //greeting.innerText=`Hello! ${userName}`; //백틱(``)을 사용해서 표현가능
    //greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(userName);
}

function paintGreetings(userName){
    greeting.innerText=`Hello! ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


if(savedUserName == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmitEvent);
}else{
    paintGreetings(savedUserName);
}


