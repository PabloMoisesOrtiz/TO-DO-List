let taskName = document.getElementById('taskText').value;
let taskContainer = document.querySelector('.task-list');

function updateTaskName(){
    taskName = document.getElementById('taskText').value;
}

function addTask(){
    if (taskName){
        this.name = taskName;
        this.div = document.createElement('div');
        this.div.className = 'taskElement';
        this.div.innerHTML = `<p>${taskName}</p> <div class="taskButton">DELETE</div>`
        taskContainer.appendChild(this.div); 
    }
}

addTaskBtn.addEventListener('click', addTask);
taskText.addEventListener('onchange', updateTaskName)

