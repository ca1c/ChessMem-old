export default class Timer {
  // timer will take an object with hours, minutes, and seconds
  constructor(time) {
    this.seconds = time.seconds * 1000;
    this.minutes = time.minutes * 60000;
    this.hours = time.hours * 600000;
  }

  get time() {
    return {
      seconds: this.seconds,
      minutes: this.minutes,
      hours: this.hours,
    }
  }

  set time(time) {
    this.seconds = time.seconds * 1000;
    this.minutes = time.minutes * 60000;
    this.hours = time.hours * 600000;
  }

  timerWrapper() {

  }

  timerTick() {
    
  }
}
