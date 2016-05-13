import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { browserHistory } from 'react-router';
import Paper from 'material-ui/Paper';


function logIn() {
  browserHistory.push('/');
};

function register() {
  browserHistory.push('/register');
};

function logOut() {
Stamplay.User.logout();
};


const TopBar = () => (
<Paper zDepth={4}>
  <div>
  <AppBar
	title="The Drive.me App!"
	 titleStyle={{
    	textAlign: 'center',
    	 boxShadow: 'none'}}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem
        primaryText="LogIn"
        onClick={logIn} />
        <MenuItem
         primaryText="Sign Out"
         onClick={logOut} />
        <MenuItem
         primaryText="Register"
         onClick={register} />
      </IconMenu>
    }
  />
  </div>
  </Paper>
);

export default TopBar;
