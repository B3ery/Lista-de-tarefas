const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const tasksContainer = document.querySelector(".tasks-container");
const listTaks = [];
let id = 0;

function addTask(){
    const taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add("task-item");

    const taskContent = document.createElement("p");
    taskContent.innerText = inputElement.value;
    taskContent.id = id

    const deletebutton  = document.createElement("button");
    deletebutton.innerText = "delete";
    deletebutton.id = id
    deletebutton.addEventListener("click", () => removeTask(taskContent.id));
 
taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deletebutton);

    tasksContainer.appendChild(taskItemContainer);
    if(inputElement.value != ""){
        listTaks.push(inputElement.value);
    }
    inputElement.value = "";
    id++
}

addTaskButton.addEventListener("click", () => addTask());


function removeTask(id){

    listTaks.splice(id, 1);
    document.getElementById(id).remove()
    document.getElementById(id).remove()
}

