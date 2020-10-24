// modules

import React, { Component } from 'react';
import Chessboard from 'chessboardjsx';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

// Utility javascript
import genRandPos from '../lib/randLegalPosition.js';

// Custom components

const styles = theme => ({
  mainPadding: {    
    padding: '30px',   
  },
});

class ChessBoard extends Component {

	constructor(props) {
		super(props);
		this.handleDifficultyClick = this.handleDifficultyClick.bind(this);

		this.state = {
			currentPosition: "start"
		};
	}

	handleDifficultyClick(difficulty) {
		let currentPosition;
		if(this.state.currentPosition === 'start') {
			currentPosition = genRandPos(difficulty);
		} else {
			currentPosition = "start";
		}

		this.setState({
			currentPosition: currentPosition,
		})
	}

	render() {
		const {classes} = this.props;

		return (
			<div className={classes.mainPadding}>
				<Grid 
					container 
					justify="center"
				>
					<Chessboard 
						position={this.state.currentPosition}
						sparePieces={true}
						lightSquareStyle={{ backgroundColor: "#dbdbdb" }}
  					darkSquareStyle={{ backgroundColor: "#494d54" }}
  					/>
					<List component="nav" ria-label="mailbox folders">
					  <ListItem button>
					    <ListItemText primary="Easy" onClick={this.handleDifficultyClick.bind(this, 0)}/>
					  </ListItem>
					  <Divider />
					  <ListItem button divider>
					    <ListItemText primary="Medium" onClick={this.handleDifficultyClick.bind(this, 1)}/>
					  </ListItem>
					  <ListItem button>
					    <ListItemText primary="Hard" onClick={this.handleDifficultyClick.bind(this, 2)}/>
					  </ListItem>
					  <Divider />
					</List>
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles)(ChessBoard);