//https://jsfiddle.net/Notkabene/y39046v7/6/
const tasksList = document.querySelector('.tasks-list')
const createTaskBlock = document.querySelector('.create-task-block')

createTaskBlock.addEventListener('submit', (event) => {
  const {target} = event
  event.preventDefault()
  const taskNameInput = target.taskName
  const formValue = taskNameInput.value
  const taskId = Date.now()
  const spanError = document.createElement('span')
  spanError.className = 'error-message-block'
  const tasksInput = document.querySelectorAll('.task-item__text')
  const spanErrorRepeat = document.querySelector('.error-message-block')
  const arrayTasksInput = Array.from(tasksInput)

  const inputsValue = arrayTasksInput.map(item => {
    return item.innerHTML
  })

  if(!formValue) {
    if(spanErrorRepeat) {spanErrorRepeat.remove()}
    createTaskBlock.append(spanError)
    spanError.innerText = 'Название задачи не должно быть пустым'

  } else if(inputsValue.includes(formValue)) {
    if(spanErrorRepeat) {spanErrorRepeat.remove()}
    createTaskBlock.append(spanError)
    spanError.innerText = 'Задача с таким названием уже существует'

  } else {
    if(spanErrorRepeat) {spanErrorRepeat.remove()}
    const taskItem = `
    <div class="task-item" data-task-id="${taskId}">
       <div class="task-item__main-container">
           <div class="task-item__main-content">
               <form class="checkbox-form">
                   <input class="checkbox-form__checkbox" type="checkbox" id="task-${taskId}">
                   <label for="task-${taskId}"></label>
               </form>
               <span class="task-item__text">${formValue}</span>
           </div>
           <button class="task-item__delete-button default-button 
            delete-button" data-delete-task-id="${taskId}">Удалить</button>
       </div>
    </div>`
    tasksList.insertAdjacentHTML('afterBegin', taskItem)
  }

})
































