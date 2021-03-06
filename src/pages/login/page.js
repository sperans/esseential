import React from 'react';
import styles from './style.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Login from '../../common/components/Login';


export default class LoginPage extends React.Component {




  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className={styles.content}>
      <div id="container">
      <div id="container">
        <Login />
      </div>
      </div>
      </div>
      </MuiThemeProvider>
    );
  }
}
