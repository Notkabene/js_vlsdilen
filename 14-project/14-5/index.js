// https://jsfiddle.net/Notkabene/17za9rys/
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

const createModalOverlay = `
  <div class="modal-overlay modal-overlay_hidden">
     <div class="delete-modal">
         <h3 class="delete-modal__question">
             Вы действительно хотите удалить эту задачу?
         </h3>
         <div class="delete-modal__buttons">
             <button class="delete-modal__button delete-modal__cancel-button">
                 Отмена
             </button>
             <button class="delete-modal__button delete-modal__confirm-button">
                 Удалить
             </button>
         </div>
     </div>
  </div>`

document.body.insertAdjacentHTML('afterBegin', createModalOverlay)

const modalOverlay = document.querySelector('.modal-overlay')
let taskIdDelete = null

tasksList.addEventListener('click', (event) => {
  const {target} = event
  const isDeleteButton = target.closest('.task-item__delete-button')

  taskIdDelete = target.dataset.deleteTaskId
  if (isDeleteButton) {
    modalOverlay.classList.remove('modal-overlay_hidden')
  }
})

const isCancelButton = document.querySelector('.delete-modal__cancel-button')
const isConfirmButton = document.querySelector('.delete-modal__confirm-button')

isCancelButton.addEventListener('click', () => {
  modalOverlay.classList.add('modal-overlay_hidden')
})

isConfirmButton.addEventListener('click', () => {
  modalOverlay.classList.add('modal-overlay_hidden')

  const tasksItem = document.querySelectorAll('.task-item')
  tasksItem.forEach(task => {
    if(task.dataset.taskId === taskIdDelete) {
      task.remove()
    }
  })
})








