import React, { Component } from 'react';
import Chessboard from 'chessboardjsx';
import { Grid, Container, Button, Typography, Card, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import theme from '../theme';

import genRandPos from '../lib/randLegalPosition.js';

/* Styles */

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export default class ChessBoard extends Component {
	constructor(props) {
		super(props);
		this.handleClickEasy = this.handleClickEasy.bind(this);
		this.handleClickMedium = this.handleClickMedium.bind(this);
		this.handleClickHard = this.handleClickHard.bind(this);
		this.handleClickReset = this.handleClickReset.bind(this);

		this.state = {
			currentPosition: "start",
		};
	}

	handleClickEasy() {
		if(this.state.currentPosition === "start") {
			this.setState({
				currentPosition: genRandPos(0),
			})
		}
	}

	handleClickMedium() {
		if(this.state.currentPosition === "start") {
			this.setState({
				currentPosition: genRandPos(1),
			})
		}
	}

	handleClickHard() {
		if(this.state.currentPosition === "start") {
			this.setState({
				currentPosition: genRandPos(2),
			})
		}
	}

	handleClickReset() {
		console.log(this.state.currentPosition);
		if(this.state.currentPosition !== "start") {
			this.setState({
				currentPosition: "start",
			})
		}
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
						<Paper className="{classes.paper}" variant="outlined" color="background">
				      <Grid container spacing={2} sm={8}>
				      	<Grid item xs={12}>
				      		<Typography variant="h4"> Options </Typography>
				      	</Grid>
				        <Grid item xs={4}>
				          <Button variant="outlined" size="small" onClick={this.handleClickEasy}>Easy</Button>
				        </Grid>
				        <Grid item xs={4}>
				          <Button variant="outlined" size="small" onClick={this.handleClickMedium}>Medium</Button>
				        </Grid>
				        <Grid item xs={4}>
				          <Button variant="outlined" size="small" onClick={this.handleClickHard}>Hard</Button>
				        </Grid>
			        	<Grid item xs={4}>
			      			<Button variant="outlined" size="small" onClick={this.handleClickReset}>Reset</Button>
			      		</Grid>
				      </Grid>
						</Paper>
					</Grid>
			</div>
		);
	}
}