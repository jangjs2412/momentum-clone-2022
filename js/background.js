const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
];
//Math.floor(숫자형변수):3.5라면 3을 가져온다.가장 바닥(floor)에 있는 숫자를 가져옴.
//Math.round(숫자형변수):3.5하면 4가 된다. 반올림
//Math.random():0~1사이의 랜덤한 실수형 숫자(ex 0.1344124)를 가져온다.
const randomImage = images[Math.floor(Math.random()*images.length)];
//document.createElement():html에서 요소를 가져오는것이 아닌 자바스크립트에서 직접 만든다.
const backgroundImage = document.createElement("img");
backgroundImage.src=`img/${randomImage}`;
//document.body.appendChild():자바스크립트로 만든 요소를 바디의 가장 밑에 배치, 반대는 prepend
document.body.appendChild(backgroundImage);