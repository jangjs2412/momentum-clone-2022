const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    clock.innerText=`${date.getFullYear()}년${date.getDay()}월${date.getDate()}일${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

//setInterval(sayHello,5000); //setInterval(함수,ms밀리세컨드[5초인 경우 5000]):5초마다 함수 반복
getClock();
setInterval(getClock,1000); //setTimeout(함수, ms):몇초 후에 함수 실행

