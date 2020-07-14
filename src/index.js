document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let newTask = document.getElementById(`create-task-form`)
  const taskList = document.getElementById(`tasks`)
  newTask.addEventListener(`submit`, (e) => {
    e.preventDefault();
    let task = document.getElementById(`new-task-description`)
    // let taskText = task.value
    taskList.innerHTML += `<li>${taskText}</li>`
    document.getElementById(`new-task-description`).value = ""
    // newTask.reset()
  });


    
});