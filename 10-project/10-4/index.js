const giveJobToStudent = ((student, jobName) => {
  const changeStudent = student
  changeStudent['job'] = jobName
  const fullNameChangeStudent = changeStudent['fullName']
  const jobChangeStudent = changeStudent['job']
  alert(`Поздравляем! У студента ${fullNameChangeStudent} появилась новая работа! Теперь он ${jobChangeStudent}`)
  return changeStudent
})

const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');