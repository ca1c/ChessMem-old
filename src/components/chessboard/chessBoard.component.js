// modules

import React, { Component } from 'react';
import Chessboard from 'chessboardjsx';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

// Utility javascript
import genRandPos from './../../lib/randLegalPosition.js';

// Custom components
import Timer from "./../timer/timer.component";

const styles = theme => ({
  mainPadding: {
    padding: '30px',
  },
  options: {
  	maxWidth: '300px',
  	display: 'flex',
	flexDirection: 'row',
	padding: 0,
  },
  menuButton: {
  	textAlign: "center"
  },
  timer: {
      maxWidth: '610px',
  }
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
      window.timerComp.startTimer();
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
					align="center"
				>
					<Chessboard
						position={this.state.currentPosition}
						sparePieces={true}
						lightSquareStyle={{ backgroundColor: "#dbdbdb" }}
  						darkSquareStyle={{ backgroundColor: "#494d54" }}
  					/>
  				<Container size="xs">
  					<List component="nav" ria-label="mailbox folders" className={classes.options}>
  					  <ListItem button>
  					    <ListItemText primary="Easy" className={classes.menuButton} onClick={this.handleDifficultyClick.bind(this, 0)}/>
  					  </ListItem>
  					  <ListItem button>
  					    <ListItemText primary="Medium" className={classes.menuButton} onClick={this.handleDifficultyClick.bind(this, 1)}/>
  					  </ListItem>
  					  <ListItem button>
  					    <ListItemText primary="Hard" className={classes.menuButton} onClick={this.handleDifficultyClick.bind(this, 2)}/>
  					  </ListItem>
  					  <Divider />
  					</List>
					</Container>
				</Grid>
        <Container size="xs" className={classes.timer}>
          <Timer startingSeconds={10}/>
        </Container>
			</div>
		);
	}
}

export default withStyles(styles)(ChessBoard);
