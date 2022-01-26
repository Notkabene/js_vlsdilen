const orders = [4, 2, 1, 3];
const patients = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" },
];

function giveTalonsInOrder(patients, orders) {
  let newPatients = []
  orders.forEach(item => {
    for (let i = 0; i < patients.length; i++) {
      if(patients[i].id === item) {
        newPatients.push(patients[i])
      }
    }
  })
  return newPatients

}

const result = giveTalonsInOrder(patients, orders)

console.log(result)