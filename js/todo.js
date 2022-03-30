const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    //li와 span생성
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText=newTodo;
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
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);