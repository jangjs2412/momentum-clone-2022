const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    //문자형변수.padStart(2,"0"):문자형변수가 가져야할 길이를 2로 설정하고 2보다 작으면 "0"으로 채워넣는다.
    //padStart():01
    //그 반대형은 padEnd():10
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${date.getFullYear()}년${date.getDay()}월${date.getDate()}일${hours}:${minutes}:${seconds}`;
}

//setInterval(sayHello,5000); //setInterval(함수,ms밀리세컨드[5초인 경우 5000]):5초마다 함수 반복
getClock();
setInterval(getClock,1000); //setTimeout(함수, ms):몇초 후에 함수 실행

