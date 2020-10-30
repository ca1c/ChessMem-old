import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	title: {
		flexGrow: 1
	},
	appBar: {
  		background: 'transparent',
  		borderBottom: '3px solid #00e676',
  		boxShadow: 'none'
  	}
})


class Navbar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {classes} = this.props;

		return(
			<div>
				<Container size="xs">
					<AppBar position="static" className={classes.appBar} color="textSecondary">
		        <Toolbar>
		          <Typography className={classes.title} variant="h5" color="textSecondary">
		            ChessMem
		          </Typography>
		          <Button color="inherit">
			          <Typography variant="p" color="textSecondary" align="left">
			            Login
			          </Typography>
		          </Button>
		          <Button color="inherit">
			      	  <Typography variant="p" color="textSecondary">
			            Register
			          </Typography>
			      	</Button>
		        </Toolbar>
		    	</AppBar>
				</Container>
    	</div>
    )
	}
}

Navbar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
