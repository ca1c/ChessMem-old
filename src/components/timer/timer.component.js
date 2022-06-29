import React, {Component} from 'react';
import Typography from '@mui/material/Typography';

import Timer from 'tiny-timer';

export default class TimerComp extends Component {
    constructor(props) {
        super(props);

        window.timerComp = this;

        this.state = {
            seconds: "10",
            oSeconds: "10",
            started: false,
            timer: new Timer(),
        }
    }

    pauseTime() {
        this.state.timer.pause();

        this.setState({
            started: false,
        });
    }

    resumeTime() {
        this.state.timer.resume();

        this.setState({
            started: true,
        });
    }

    stopTimer() {
        this.state.timer.stop();

        let oSeconds = this.state.oSeconds;

        this.setState({
            seconds: oSeconds,
            started: false,
        });
    }

    startTimer(position) {


        if(this.state.started === false && position !== "start") {
            this.setState({
                started: true
            });

            this.state.timer.start(parseInt(this.state.seconds) * 1000);

            this.state.timer.on('tick', (ms) => {
                this.setState({
                    seconds: Math.round(ms/1000),
                    started: true,
                })
            })

            this.state.timer.on('done', () => {
                let oSeconds = this.state.oSeconds;

                this.setState({
                    seconds: oSeconds,
                    started: false
                })
                window.boardComp.clearBoard();
            })
        }
    }

    setTime(seconds) {
        this.setState({
            seconds: seconds,
            oSeconds: seconds
        });
    }

    render() {
        return (
            <div>
              <Typography variant="p" color="textSecondary" className="timerComp">::{this.state.seconds}</Typography>
            </div>
        );
    }
}
