

import React, { Component } from 'react';
import Chessboard from 'chessboardjsx';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
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
    this.handleStartClick = this.handleStartClick.bind(this);

		this.state = {
			currentPosition: "start",
      queuedPosition: "start",
		};
	}

	handleDifficultyClick(difficulty) {
		let queuedPosition;
		if(this.state.queuedPosition === 'start') {
			queuedPosition = genRandPos(difficulty);
		} else {
			queuedPosition = "start";
		}

		this.setState({
			queuedPosition: queuedPosition,
		})
	}

  handleStartClick() {
    let queuedPosition = this.state.queuedPosition;

    this.setState({
      currentPosition: queuedPosition,
      queuedPosition: "start",
    })

    window.timerComp.startTimer(queuedPosition);
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
          <Button variant="contained" color="primary" className="startButton" onClick={this.handleStartClick}>Start</Button>
        </Container>
			</div>
		);
	}
}

export default withStyles(styles)(ChessBoard);
