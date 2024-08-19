var task =[]

function addTask(){

  var taskInput = document.getElementById('todoInput')
  var taskValue = taskInput.value
  
  //checking if input is empty or not
  if(taskValue.trim() !== ""){
    // add task
    task.push({
      text: taskValue,
      completed: false
    })

    taskInput.value=""
    updateTodoList()
 

  }
 
}

function updateTodoList(){
  const todoList = document.getElementById('todoList')

  /// clear existing texxt/data
  todoList.innerHTML="";

  //************ */
  task.forEach((task)=>{
    var listItem = document.createElement('li')
    listItem.textContent = task.text
    listItem.className = task.completed ?
    'completed' : " "
    listItem.onclick = function(){
      toogleCompleted(task)

    }
    todoList.appendChild(listItem);
  })

  /// function to calculate todo, completed
  updateAggrate()


}


function toogleCompleted(task){
task.completed = !task.completed
updateTodoList()
}

function updateAggrate(){
  var totalTask = document.getElementById('totalTasks');
  var completedTask = document.getElementById('completedTasks');

  var total = task.length

 var completed= task.reduce((acc,task)=>{
  return task.completed ? acc + 1 :acc
 },0)
  totalTask.textContent = total
  completedTask.textContent = completed
}


function filterTasks(){
  var searchInput = document.getElementById('searchInput')
  var searchValue = searchInput.value.toLowerCase()

  var filteredTasks = tasks.filter((task)=>{
    return task.text.toLowerCase().includes(searchValue)
  })

  // update todoList with filter search

  updateTodoListWithFilteredTasks(filteredTasks)
}


function updateTodoListWithFilteredTasks(filteredTasks){
  var todoList = document.getElementById('todoList')

  todoList.innerHTML = ""
  filteredTasks.forEach((task)=>{
    var listItem = document.createElement('li')
    listItem.textContent = task.text
    listItem.className = task.completed ?
    'completed' : " "
    listItem.onclick = function(){
      toogleCompleted(task)

    }
    todoList.appendChild(listItem);
  })

  updateAggrate()
}