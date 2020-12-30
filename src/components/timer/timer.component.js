import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

import Timer from 'tiny-timer';

export default class TimerComp extends Component {
    constructor(props) {
        super(props);

        window.timerComp = this;

        this.state = {
            seconds: "10",
            started: false,
        }
    }

    startTimer(position) {
        const timer = new Timer();

        if(this.state.started === false && position !== "start") {
            this.setState({
                started: true
            });
            
            timer.start(parseInt(this.state.seconds) * 1000);

            timer.on('tick', (ms) => {
                this.setState({
                    seconds: Math.round(ms/1000),
                    started: true,
                })
            })

            timer.on('done', () => {
                this.setState({
                    seconds: "00",
                    started: false
                })
                window.boardComp.clearBoard();
            })
        }
    }

    setTime(seconds) {
        this.setState({
            seconds: seconds
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