const addButton = document.querySelector("#addButton");
const inputTask = document.querySelector("input");
const olElement = document.querySelector("ol");

let taskList = [];

const fromLStorage = JSON.parse(localStorage.getItem("tasksStorage"));

addButton.addEventListener("click", () => {
    createTaskListElement(inputTask.value);
    localStorage.setItem("tasksStorage", JSON.stringify(taskList));
    inputTask.value = "";
});

for (let task of fromLStorage) {
    createTaskListElement(task)
};

function createTaskListElement(name) {
    const liElement = document.createElement("li");
    const spanElement = document.createElement("span");
    const deleteButton = document.createElement("button");

    spanElement.textContent = name;
    spanElement.classList.add("task_name");

    deleteButton.textContent = "X";
    deleteButton.style.color = "red";
    deleteButton.setAttribute("class", "delete");

    taskList.push(name);

    olElement.append(liElement);
    liElement.append(spanElement, deleteButton);

    deleteButton.addEventListener("click", () => {
        liElement.remove();

        const taskNodeList = document.querySelectorAll(".task_name");
        let arrayTask = [];
        for (let taskSpan of taskNodeList) {
            arrayTask.push(taskSpan.textContent);
        }

        localStorage.setItem("tasksStorage", JSON.stringify(arrayTask));
    });
}








