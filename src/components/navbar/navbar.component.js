import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

// const styles = theme => ({
//   root: {
//     flexGrow: 1
//   },
//   title: {
//     flexGrow: 1
//   },
//   appBar: {
//     background: 'transparent',
//   	borderBottom: '3px solid #00e676',
//   	boxShadow: 'none'
//   }
// })


class Navbar extends Component {

  render() {

    return(
      <div>
        <Container size="xs">
          <AppBar position="static" color="textSecondary">
            <Toolbar>
              <Typography variant="h5" color="textSecondary">
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

export default Navbar;
