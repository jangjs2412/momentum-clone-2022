const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){
    //localStorage에 문자열형식으로 저장한다.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    //선택한 리스트를 삭제한다.
    li.remove();
    console.log(li.id);
}

function paintToDo(newTodo){
    //li와 span생성
    const li = document.createElement("li");
    li.id=newTodo.id;
    const span = document.createElement("span");
    span.innerText=newTodo.text;
    const deleteButton = document.createElement("button");
    deleteButton.innerText="X";
    deleteButton.addEventListener("click", deleteToDo);
    //span을 li의 자식으로 추가한다.
    li.appendChild(span);
    li.appendChild(deleteButton);
    //li를 todolist의 자식으로 추가한다.
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    const newToDosObj = {
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newToDosObj);
    paintToDo(newToDosObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    //새로고침을 했을 때, localstorage 외에 전부 초기화되는것을 막기위해 이 방식을 사용함.
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
    //화살표 함수
    //parsedToDos.forEach((item) => console.log("this is a ",item));
}