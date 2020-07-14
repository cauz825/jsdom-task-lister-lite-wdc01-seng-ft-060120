document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let newTask = document.getElementById(`create-task-form`)
  const taskList = document.getElementById(`tasks`)
  newTask.addEventListener(`submit`, (e) => {
    e.preventDefault();
    let task = document.getElementById(`new-task-description`)
    taskList.innerHTML += `<li>${task.value}  <button class="btn-delete">Delete</button></li>`
    task.value = ''

    let deleteButton = document.getElementsByClassName('btn-delete');
    // console.log(deleteButton)
    deleteButton[0].addEventListener('click', () =>{
      taskList.innerHTML = ""
      // taskList.delete(taskList.firstChild());
    });
  });
});