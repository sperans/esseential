import React from 'react';
import styles from './style.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Register from '../../common/components/Register';


export default class RegisterPage extends React.Component {




  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className={styles.content}>
      <div id="container">
      <div id="container">
        <Register />
      </div>
      </div>
      </div>
      </MuiThemeProvider>
    );
  }
}
