let todoList=[];

displayTodos()

function addTodo() {
let inputElement=document.getElementById("todo-input");
let todoItem=inputElement.value;
let dateElement=document.getElementById("todo-date");
let todoDate=dateElement.value;
localStorage.setItem("todoItem", todoItem);
localStorage.setItem("todoDate", todoDate);
todoList.push({
item: localStorage.getItem("todoItem"),
date: localStorage.getItem("todoDate")
});
inputElement.value="";
dateElement.value="";
displayTodos()
}

function displayTodos() {
let todoContainer=document.getElementById("todo-container");
todoContainer.innerHTML="";
for (let i=0; i<todoList.length; i++) {
  let todoItem=todoList[i];
  todoContainer.innerHTML += `
    <span class="todo-text">${todoItem.item}</span>
    <span class="todo-date">${todoItem.date}</span>
    <button class="delete-button" onclick="todoList.splice(${i}, 1); displayTodos()">Delete</button>`;
}
}