// https://jsfiddle.net/Notkabene/rstgzq64/5/
class CarService {
  static DefaultWorkingHours = {
    from: '9:00',
    till: '20:00',
  }

  constructor(name, workingHours) {
    this.name = name
    this.workingHours = workingHours || CarService.DefaultWorkingHours
  }

  repairCar(carName) {
    let now = new Date()
    let nowHours = now.getHours()
    let workingStartHour = this.workingHours.from.split(':')[0]
    let workingEndHour = this.workingHours.till.split(':')[0]


    if(carName === undefined || carName === '') {
      console.error('Вам необходимо указать название машины, чтобы ее отремонтировать')
    } else {
      if (nowHours > workingStartHour && nowHours < workingEndHour) {
        alert(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`)
      } else {
        alert('К сожалению, мы сейчас закрыты. Приходите завтра')
      }
    }
  }


}



const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' });
carService.repairCar('BMW');