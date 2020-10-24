// modules

import React, { Component } from 'react';
import Chessboard from 'chessboardjsx';
import { Grid, Container, Button, Typography, Card, Paper } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/core/styles';

// theme

import theme from '../theme';

// Utility javascript

import genRandPos from '../lib/randLegalPosition.js';

// Custom components




function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}



export default class ChessBoard extends Component {

	constructor(props) {
		super(props);
		this.handleClickEasy = this.handleClickEasy.bind(this);
		this.handleClickMedium = this.handleClickMedium.bind(this);
		this.handleClickHard = this.handleClickHard.bind(this);
		this.handleClickReset = this.handleClickReset.bind(this);
		this.closeError = this.closeError.bind(this);

		this.state = {
			currentPosition: "start",
			error: "",
			snackbarOpen: false,
		};
	}

	handleClickEasy() {
		let currentPosition;
		let error;
		let snackbarOpen;
		if(this.state.currentPosition === "start") {
			currentPosition = genRandPos(0);
			error = this.state.error;
			snackbarOpen = this.state.snackbarOpen;
		} 

		if(this.state.currentPosition !== "start"){
			currentPosition = this.state.currentPosition;
			error = "Reset position to generate new position.";
			snackbarOpen = true;
		}

		this.setState({
			currentPosition: currentPosition,
			error: error,
			snackbarOpen: snackbarOpen,
		})
	}

	handleClickMedium() {
		let currentPosition;
		let error;
		let snackbarOpen;
		if(this.state.currentPosition === "start") {
			currentPosition = genRandPos(1);
			error = this.state.error;
			snackbarOpen = this.state.snackbarOpen;
		} 

		if(this.state.currentPosition !== "start"){
			currentPosition = this.state.currentPosition;
			error = "Reset position to generate new position.";
			snackbarOpen = true;
		}

		this.setState({
			currentPosition: currentPosition,
			error: error,
			snackbarOpen: snackbarOpen,
		})
	}

	handleClickHard() {
		let currentPosition;
		let error;
		let snackbarOpen;
		if(this.state.currentPosition === "start") {
			currentPosition = genRandPos(2);
			error = this.state.error;
			snackbarOpen = this.state.snackbarOpen;
		} 

		if(this.state.currentPosition !== "start"){
			currentPosition = this.state.currentPosition;
			error = "Reset position to generate new position.";
			snackbarOpen = true;
		}

		this.setState({
			currentPosition: currentPosition,
			error: error,
			snackbarOpen: snackbarOpen,
		})
	}

	handleClickReset() {
		let currentPosition;
		let error;
		let snackbarOpen;
		if(this.state.currentPosition !== "start") {
			currentPosition = "start";
			error = this.state.error;
			snackbarOpen = this.state.snackbarOpen;
		} 

		if(this.state.currentPosition === "start"){
			currentPosition = this.state.currentPosition;
			error = "Position has already been reset.";
			snackbarOpen = true;
		}

		this.setState({
			currentPosition: currentPosition,
			error: error,
			snackbarOpen: snackbarOpen,
		})
	}

	// Snackbar, unfortunately have not found a way to make this a separate component
	closeError(event, reason) {
		if(reason === 'clickaway') {
			return;
		}

		this.setState({
			currentPosition: this.state.currentPosition,
			error: this.state.error,
			snackbarOpen: false,
		});
	}

	render() {

		return (
			<div>
				<Grid 
					container 
					justify="center"
				>
					<Chessboard 
						position={this.state.currentPosition}
						lightSquareStyle={{ backgroundColor: "#dbdbdb" }}
  						darkSquareStyle={{ backgroundColor: "#494d54" }}
  					/>
					<List component="nav" ria-label="mailbox folders">
					  <ListItem button>
					    <ListItemText primary="Easy" onClick={this.handleClickEasy}/>
					  </ListItem>
					  <Divider />
					  <ListItem button divider>
					    <ListItemText primary="Medium" onClick={this.handleClickMedium}/>
					  </ListItem>
					  <ListItem button>
					    <ListItemText primary="Hard" onClick={this.handleClickHard}/>
					  </ListItem>
					  <Divider />
					  <ListItem button>
					  	<ListItemText primary="Reset" onClick={this.handleClickReset}/>
					  </ListItem>
					</List>
				</Grid>
				<Snackbar open={this.state.snackbarOpen} autoHideDuration={6000} onClose={this.closeError}>
					<Alert onClose={this.closeError} severtiy="warning">
						{this.state.error}
					</Alert>
				</Snackbar>
			</div>
		);
	}
}