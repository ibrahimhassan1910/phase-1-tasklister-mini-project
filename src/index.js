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
  newList.className = 'list-group-item'
  newList.innerText = inputText.value
  inputText.value = ''
  // alert('i was clicked')
  
  //creating a checkbox for each newly listed task
  var newCheckbox = document.createElement('input')
  newCheckbox.type = 'checkbox'
  newCheckbox.id = 'check-box'
  newList.appendChild(newCheckbox)

  // Create a delete button for each newly listed item
  var deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.innerText = 'Delete';
  newList.appendChild(deleteButton);

  // newList.addEventListener('click', function(){
  // newList.style.textDecoration = "line-through"
  // newList.style.color = "rgba(255, 251, 3, 0.829)";
  // })
  // newList.addEventListener('dblclick', function(){
  // newList.remove()
  // })

  // checkbox changing event
  newCheckbox.addEventListener('change', function(){
    if(newCheckbox.checked){
      newList.style.color = "rgba(255, 251, 3, 0.829)";
    }else{
      newList.style.textDecoration = "none"
      newList.style.color = "";
    }
  })

  // delete button event
  deleteButton.addEventListener('click', function(){
    newList.remove()
  })

  // edit functionality for new list

  // newList.addEventListener('dblclick', function(){
  //   const newListText = prompt("Edit list:", newList.innerText);
  //   if(newListText !== null){
  //     newList.innerText = newListText;
  //   }
  // })


})