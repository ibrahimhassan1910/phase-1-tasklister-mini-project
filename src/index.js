document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  //preventing default when create new task is clicked
  document.getElementById("create-task").addEventListener("click", (event) => {
    event.preventDefault();
  })
}) 
let addTodoButton = document.getElementById('create-task')
let inputText = document.getElementById('new-task-description')

addTodoButton.addEventListener('click', function(){

  var newList = document.createElement('li')
  document.getElementById('task-list').appendChild(newList)
  newList.innerText = inputText.value
  inputText.value = ''
  // alert('i was clicked')
  newList.addEventListener('click', function(){
   newList.style.textDecoration = "line-through"
  })
  newList.addEventListener('dblclick', function(){
    newList.remove()
  })
})