//https://jsfiddle.net/Notkabene/y39046v7/4/
const tasksList = document.querySelector('.tasks-list')
const createTaskBlock = document.querySelector('.create-task-block')

createTaskBlock.addEventListener('submit', (event) => {
  const {target} = event
  event.preventDefault()
  const taskNameInput = target.taskName
  const inputValue = taskNameInput.value
  const taskId = Date.now()

  const taskItem = `
    <div class="task-item" data-task-id="${taskId}">
       <div class="task-item__main-container">
           <div class="task-item__main-content">
               <form class="checkbox-form">
                   <input class="checkbox-form__checkbox" type="checkbox" id="task-${taskId}">
                   <label for="task-${taskId}"></label>
               </form>
               <span class="task-item__text">${inputValue}</span>
           </div>
           <button class="task-item__delete-button default-button 
            delete-button" data-delete-task-id="5">Удалить</button>
       </div>
    </div>`
  tasksList.insertAdjacentHTML('afterBegin', taskItem)
  console.log(inputValue)
})
































