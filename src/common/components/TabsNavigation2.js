import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { browserHistory } from 'react-router';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class TabsNavigation2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }
  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
 newRidePage() {
    browserHistory.push('/new');
  };
  signUp() {
    browserHistory.push('/home');
  };


  render() {
    return (
      <div style={styles.container}>
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab
        label="VSI PREVOZI"
        value="a"
        icon={<FontIcon className="material-icons">directions_car</FontIcon>}
        onClick={this.signUp} >
        </Tab>
        <Tab
        label="MOJI PREVOZI"
        value="b"
        icon={<FontIcon className="material-icons">thumb_up</FontIcon>}
        onClick={this.signUp}>
        </Tab>
        <Tab
        label="REZERVACIJE"
        value="c"
        icon={<FontIcon className="material-icons">thumbs_up_down</FontIcon>}
        onClick={this.signUp}>
        </Tab>
        <Tab
        label="MOJ PROFIL"
        value="D"
        icon={<FontIcon className="material-icons">face</FontIcon>}
        onClick={this.signUp}>
        </Tab>
      </Tabs>
      </div>
    );
  }
}
