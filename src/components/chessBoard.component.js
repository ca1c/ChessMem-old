import React, { Component } from 'react';
import Chessboard from 'chessboardjsx';
import { Grid, Container, Button, Typography, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import theme from '../theme';

import genRandPos from '../lib/randLegalPosition.js';

export default class ChessBoard extends Component {
	constructor(props) {
		super(props);
		this.handleClickEasy = this.handleClickEasy.bind(this);
		this.handleClickMedium = this.handleClickMedium.bind(this);
		this.handleClickHard = this.handleClickHard.bind(this);

		this.state = {
			currentPosition: "start",
		};
	}

	handleClickEasy() {
		this.setState({
			currentPosition: this.state.currentPosition === "start" ? genRandPos(0) : "start",
		})
	}

	handleClickMedium() {
		this.setState({
			currentPosition: this.state.currentPosition === "start" ? genRandPos(1) : "start",
		})
	}

	handleClickHard() {
		this.setState({
			currentPosition: this.state.currentPosition === "start" ? genRandPos(2) : "start",
		})
	}
	/* #6b6b6b */

	render() {
		return (
			<div>
				<Container maxWidth="lg">
					<Grid 
						container 
	  					justify="center"
					>
						<Chessboard 
							position={this.state.currentPosition}
							lightSquareStyle={{ backgroundColor: "#dbdbdb" }}
	  						darkSquareStyle={{ backgroundColor: "#494d54" }}
	  					/>
						<Card variant="outlined" color="background">
							<Typography variant="h5"> Difficulty </Typography>
						      <Grid container spacing={3}>
						        <Grid item xs>
						          <Button variant="outlined" onClick={this.handleClickEasy}>Easy</Button>
						        </Grid>
						        <Grid item xs>
						          <Button variant="outlined" onClick={this.handleClickMedium}>Medium</Button>
						        </Grid>
						        <Grid item xs>
						          <Button variant="outlined" onClick={this.handleClickHard}>Hard</Button>
						        </Grid>
						      </Grid>
						</Card>
					</Grid>
				</Container>
			</div>
		);
	}
}