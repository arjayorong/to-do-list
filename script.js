window.addEventListener('DOMContentLoaded', function() {
    var addBtn = document.getElementById('addBtn');
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    
    addBtn.addEventListener('click', function() {
      var taskText = taskInput.value.trim();
      
      if (taskText === '') {
        alert('Please enter a task');
        return;
      }
      
      var listItem = document.createElement('li');
      var taskLabel = document.createElement('span');
      var doneBtn = document.createElement('button');
      var deleteBtn = document.createElement('button');
      
      taskLabel.textContent = taskText;
      doneBtn.textContent = 'Done';
      deleteBtn.textContent = 'Delete';
      
      listItem.appendChild(taskLabel);
      listItem.appendChild(doneBtn);
      listItem.appendChild(deleteBtn);
      
      taskList.appendChild(listItem);
      
      doneBtn.addEventListener('click', function() {
        taskLabel.classList.toggle('completed');
      });
      
      deleteBtn.addEventListener('click', function() {
        taskList.removeChild(listItem);
      });
      
      taskInput.value = '';
    });
  });
  