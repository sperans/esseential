import React from "react";
import styles from "./style.css";
import CardUser from "/Users/miha/Desktop/react/essential/src/common/components/CardUser.js";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { browserHistory } from 'react-router';
import AllRides from '../../common/components/AllRides';


const style = {
  margin: 10,
};


export default class HomePage extends React.Component {

  newRidePage() {
    browserHistory.push('/new');
  }

  render() {
    return (
  <div className={styles.content}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div id="container">
        <h1>Home Pages</h1>
          <p className={styles.welcomeText}>Make a new Ride!</p>
            <div>
              <FloatingActionButton style={style} onClick={this.newRidePage}>
                <ContentAdd />
              </FloatingActionButton>
            </div>
          <AllRides />
        </div>
    </MuiThemeProvider>
  </div>
    );
  }
}
