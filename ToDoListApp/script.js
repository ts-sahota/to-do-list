var inputBox = document.getElementById('taskInput');
var taskList = document.getElementById('taskList');

function addTask() {
    var taskText = inputBox.value;
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    
    var li = document.createElement('li');
    li.textContent = taskText;
    
    
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };
    
    
    li.appendChild(deleteBtn);
    
    
    taskList.appendChild(li);
    
    
    inputBox.value = '';
}