const formBox = document.querySelector(".form_box");
formBox.style.backgroundColor = "lightblue";
formBox.style.width = "400px";
formBox.style.minHeight = "400px";
formBox.style.textAlign ="center";

const addButton=document.querySelector(".add_button");

const textInput = document.querySelector("input");



addButton.addEventListener("click", ()=>{
    
    const taskListItem = document.createElement("li");
    const taskToDo = document.createElement("p");
    taskToDo.style.textAlign = "start";
    const task = textInput.value;

    localStorage.setItem("task to do", task);

    const fromLoclaStorageText= localStorage.getItem("task to do");
    
    taskToDo.innerText= fromLoclaStorageText;

    taskListItem.append(taskToDo);

    const taskList = document.querySelector("ol");

    taskList.append(taskListItem);
    
    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.innerText="X";
    deleteTaskButton.style.color = "red";
    deleteTaskButton.setAttribute("class","delete");    
    taskListItem.append(deleteTaskButton);

    deleteTaskButton.addEventListener("click", ()=>{
        taskListItem.remove()   
    })
})


 
