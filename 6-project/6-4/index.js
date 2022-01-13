let i = 0
while (i < 3) {
  let newStudent = prompt('Введите имя нового студента!');
  newStudent = newStudent.trim();
  if (newStudent) {
     alert(`Добро пожаловать, ${newStudent}!`)
  }
  i += 1
}

let item = 0
do {
  item += 1
  let newStudent = prompt('Введите имя нового студента!');
  newStudent = newStudent.trim();
  if (newStudent) {
     alert(`Добро пожаловать, ${newStudent}!`)
  }
} while (item < 3);