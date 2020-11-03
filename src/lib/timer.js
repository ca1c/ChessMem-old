const { DateTime } = require('luxon');

export default class TimerData {
  constructor(seconds) {
    this.seconds = seconds;
    this.originalSeconds = seconds;
    this.currentTime = DateTime.local();
    this.endSeconds = this.currentTime.second + seconds;
    this.overFiftyNine = this.endSeconds > 59 ? this.endSeconds -= 60 : this.endSeconds = this.endSeconds;
  }

  run(tickRun) {
    let ticker = setInterval(() => {
      this.endSeconds -= 1;
      this.seconds -= 1;
      tickRun(this.seconds);

      if(this.endSeconds === this.currentTime.second) {
        // Reset Timer
        this.seconds = this.originalSeconds;
        this.endSeconds = this.currentTime.second + this.originalSeconds;
        clearInterval(ticker);
      }
    }, 1000);
  }
};

// let myTimer = new Timer(5);
//
// function getSeconds(seconds) {
//   console.log(seconds);
// }
//
// myTimer.run(getSeconds)
