import React from 'react';
import styles from './style.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NewRide from '../../common/components/NewRide';


export default class NewRidePage extends React.Component {




  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className={styles.content}>
      <div id="container">
      <div id="container">
        <NewRide />
      </div>
      </div>
      </div>
      </MuiThemeProvider>
    );
  }
}
