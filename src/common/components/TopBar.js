import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const TopBar = () => (
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
        <MenuItem primaryText="LogIn" />
        <MenuItem primaryText="Sign Out" />
        <MenuItem primaryText="Register" />
      </IconMenu>
    }
  />
);

export default TopBar;


