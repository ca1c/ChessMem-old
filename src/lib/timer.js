const { DateTime } = require('luxon');

function timer(seconds) {
  let currentTime = DateTime.local();
  let endSeconds = currentTime.second + seconds;
  // When the seconds hit 60 they reset to 0
  let overFiftyNine = endSeconds > 59 ? endSeconds -= 60 : endSeconds = endSeconds;

  let tick = setInterval(() => {
    endSeconds -= 1;
    console.log('00:00:' + endSeconds);

    if(endSeconds === currentTime.second) {
      clearInterval(tick);
    }
  }, 1000)
}

timer(6);
