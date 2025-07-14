let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();
    if (task !== "") {
        tasks.push(task);
        input.value = "";
        showTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    showTasks();
}

function showTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        list.innerHTML += `<li>${task} <button onclick="deleteTask(${index})">Delete</button></li>`;
    });
}