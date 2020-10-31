import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

import TimerData from './../../lib/timer.js';


export default class Timer extends Component {
	constructor(props) {
		super(props);

		// Create a global scope for accessing the startTimer method
		window.timerComp = this;

		this.changeStateData = this.changeStateData.bind(this);
		this.startTimer = this.startTimer.bind(this);

		this.state = {
			seconds: "00",
			timerInstance: new TimerData(props.startingSeconds),
		};
	}

	changeStateData(seconds) {
		this.setState({
			seconds: seconds,
		})
	}

	startTimer() {
		console.log('ran');
		this.state.timerInstance.run(this.changeStateData);
	}

	render() {
		return (
			<div>
				<Typography variant="p" color="textSecondary" className="timerComp">00:00:{this.state.seconds}</Typography>
			</div>
		);
	}
}
