import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { browserHistory } from 'react-router';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  container: {
    width: '100%',
    backgroundColor: '#0D47A1',
    color: '#0D47A1',
  },
  active_tab: {
    backgroundColor: '#0D47A1',
  },
};


const TabsNavigation = () => (


  <div style={styles.container}>
  <Tabs
  tabItemContainerStyle= {{
    width: '60%',
    margin: 'auto',
  }}
  inkBarStyle={{
    margin: 'auto',
    posiiton: 'relative',
  }}
  >
    <Tab
      style={styles.active_tab}
      icon={<FontIcon className="material-icons">directions_car</FontIcon>}
      label="VSI PREVOZI"
    />
    <Tab
    style={styles.active_tab}
      icon={<FontIcon className="material-icons">thumb_up</FontIcon>}
      label="MOJI PREVOZI"
    />
    <Tab
    style={styles.active_tab}
      icon={<FontIcon className="material-icons">thumbs_up_down</FontIcon>}
      label="REZERVACIJE"
    />
    <Tab
    style={styles.active_tab}
      icon={<FontIcon className="material-icons">face</FontIcon>}
      label="RAČUN"
    />
  </Tabs>
      </div>
);

export default TabsNavigation;
