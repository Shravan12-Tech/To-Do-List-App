let taskList = document.getElementById("taskList");

// Load saved tasks
window.onload = function() {
    let savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        taskList.innerHTML = savedTasks;
    }
};

// Add task
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = taskText + "<button onclick='deleteTask(this)'>❌</button>";

    li.onclick = function() {
        li.classList.toggle("completed");
        saveTasks();
    };

    taskList.appendChild(li);
    input.value = "";

    saveTasks();
}

// Delete task
function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}

// Save to local storage
function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}
