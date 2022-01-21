const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel () {
  let firstPeople = peopleWaiting[0]
  let lengthQueue = peopleWaiting.length - 1
  peopleWaiting.shift()
  alert(`${firstPeople} получил(а) посылку. В очереди осталось ${lengthQueue} человек.`)
}

giveParcel ()
giveParcel ()
giveParcel ()


function leaveQueueWithoutParcel () {
  peopleWaiting.forEach((name, index, array) => {
    alert(`${name} не получил(а) посылку и ушел(ла) из очереди`)
  })
  peopleWaiting.shift()
}

leaveQueueWithoutParcel ()

