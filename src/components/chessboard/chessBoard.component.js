

import React, { Component } from 'react';
import Chessboard from 'chessboardjsx';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Utility javascript
import genRandPos from './../../lib/randLegalPosition.js';
import compareObj from './../../lib/util/compareObj.js';

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
    marginTop: '20px',
  },
  finish: {
    maxWidth: '610px',
    margin: '20px',
  }
});
//
class ChessBoard extends Component {

  constructor(props) {
    super(props);

    window.boardComp = this;

    this.handleDifficultyClick = this.handleDifficultyClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
    this.finish = this.finish.bind(this);

    this.state = {
      currentPosition: "start",
      queuedPosition: "start",
      comparePosition: "",
      startDisabled: true,
      finishDisabled: true,
      solving: false,
      difficultyButtonDisabled: false,
    };
  }

  handleDifficultyClick(difficulty) {
    if(this.state.difficultyButtonDisabled === false){
      let queuedPosition;
      let startDisabled;
      let difficultyButtonDisabled;
      if(this.state.queuedPosition === 'start') {
        queuedPosition = genRandPos(difficulty);
        startDisabled = false;
        difficultyButtonDisabled = true;
      } else {
        queuedPosition = "start";
        startDisabled = true;
      }


      this.setState({
        queuedPosition: queuedPosition,
        startDisabled: startDisabled,
        comparePosition: "",
        difficultyButtonDisabled: difficultyButtonDisabled,
      })
    }
  }

  handleStartClick() {
    let queuedPosition = this.state.queuedPosition;

    this.setState({
      currentPosition: queuedPosition,
      comparePosition: queuedPosition,
      queuedPosition: "start",
      startDisabled: "true",
    })
    console.log(queuedPosition);
    window.timerComp.startTimer(queuedPosition);
  }

  clearBoard() {
    window.boardComp.setState({
      currentPosition: "empty",
      startDisabled: true,
      finishDisabled: false,
      solving: true,
    })
  }

  finish() {
    let same = compareObj(this.state.currentPosition, this.state.comparePosition);
    console.log(same);
    if(same) {
      this.setState({
        currentPosition: "start",
        queuedPosition: "start",
        comparePosition: "",
        startDisabled: true,
        finishDisabled: true,
        solving: false,
        difficultyButtonDisabled: false,
      });
    } else {
      return;
    }
  }
//{this.state.solving === true ? "empty" : this.state.currentPosition}
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.mainPadding}>
        <Grid
        align="center"
        >
          <Chessboard
            position={this.state.currentPosition}
            getPosition={position => this.setState({ currentPosition: position })}
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
          <Button
            variant="contained"
            color="primary"
            className="startButton"
            onClick={this.handleStartClick}
            disabled={this.state.startDisabled}>
            Start
          </Button>
        </Container>
        <Container size="xs" className={classes.timer}>
          <Button
            variant="contained"
            color="primary"
            className="finishButton"
            onClick={this.finish}
            disabled={this.state.finishDisabled}>
            <Typography variant="p" align="left">
              Finish
            </Typography>
          </Button>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(ChessBoard);
