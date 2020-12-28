import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

import Timer from 'tiny-timer';

export default class TimerComp extends Component {
    constructor(props) {
        super(props);

        window.timerComp = this;

        this.state = {
            seconds: "",
            started: false,
        }
    }

    startTimer(position) {
        const timer = new Timer();

        if(this.state.started === false && position !== "start") {
            this.setState({
                started: true
            });
            
            timer.start(10000);

            timer.on('tick', (ms) => {
                this.setState({
                    seconds: Math.round(ms/1000),
                    started: true,
                })
            })

            timer.on('done', () => {
                this.setState({
                    seconds: "0",
                    started: false
                })
                window.boardComp.clearBoard();
            })
        }
    }

    render() {
        return (
            <div>
              <Typography variant="p" color="textSecondary" className="timerComp">00:00:{this.state.seconds}</Typography>
            </div>
        );
    }
}