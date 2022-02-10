//https://jsfiddle.net/Notkabene/y39046v7/1/
const tasks = [
  {
    id: '1138465078061',
    completed: false,
    text: 'Посмотреть новый урок по JavaScript',
  },
  {
    id: '1138465078062',
    completed: false,
    text: 'Выполнить тест после урока',
  },
  {
    id: '1138465078063',
    completed: false,
    text: 'Выполнить ДЗ после урока',
  },
]



const tasksList = document.querySelector('.tasks-list')
tasks.forEach((task, index) => {
  const taskId = task.id
  const taskText = task.text

  const taskItem = `
    <div class="task-item" data-task-id="${taskId}">
       <div class="task-item__main-container">
           <div class="task-item__main-content">
               <form class="checkbox-form">
                   <input class="checkbox-form__checkbox" type="checkbox" id="task-${taskId}">
                   <label for="task-${taskId}"></label>
               </form>
               <span class="task-item__text">${taskText}</span>
           </div>
           <button class="task-item__delete-button default-button 
            delete-button" data-delete-task-id="5">Удалить</button>
       </div>
    </div>`
  tasksList.insertAdjacentHTML('afterBegin', taskItem)
})






























