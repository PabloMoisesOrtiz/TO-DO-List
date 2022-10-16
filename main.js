function HandleClicks(event){
    // Delete Task
    if (event.target.classList.contains("deleteTaskIcon")){
        console.log('shfesblfy');
        event.currentTarget.removeChild(event.target.parentElement);
    }
     
    //Check and Uncheck the input feild 
    let inputState = event.target.childNodes[0].checked;
    event.target.childNodes[0].checked = !inputState;
}


function addtask(){
    //update the addtask Name
    const taskName = document.getElementById('taskText').value;
    let taskContainer = document.querySelector('#taskList');

    if (taskName){
        taskitem = document.createElement("li");
        taskitem.classList.add('taskItem');

        checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add('checkbox');

        label = document.createElement('label')
        label.setAttribute('for', 'checkbox');
        label.innerText = taskName;

        span= document.createElement('span');
        span.classList.add('deleteTaskIcon');
        span.innerHTML =  '&#x2715;';

        taskitem.append(checkbox, label, span);
        taskContainer.appendChild(taskitem);

        taskText.value = '';
    }
}

taskList.addEventListener('click', HandleClicks);
addTaskBtn.addEventListener('click', addtask);
