import React, {Component} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class Error extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<Snackbar open={this.props.open} autoHideDuration={6000} onClose={this.props.close}>
				<Alert onClose={this.props.close} severity="warning">
					{this.props.error}
				</Alert>
			</Snackbar>
		)
	}
}
