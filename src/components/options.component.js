import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import theme from '../theme';

const useStyles = makeStyles((theme) => ({
	 root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  }
}));

export default function OptionsMenu() {
	const classes = useStyles();

	return(
		<List component="nav" className={useStyles().root} ria-label="mailbox folders">
		  <ListItem button>
		    <ListItemText primary="Inbox" onClick={this.handleClickEasy}/>
		  </ListItem>
		  <Divider />
		  <ListItem button divider>
		    <ListItemText primary="Drafts" onClick={this.handleClickMedium}/>
		  </ListItem>
		  <ListItem button>
		    <ListItemText primary="Trash" onClick={this.handleClickHard}/>
		  </ListItem>
		  <Divider light />
		  <ListItem button>
		    <ListItemText primary="Spam" onClick={this.handleClickReset}/>
		  </ListItem>
		</List>
	)
}