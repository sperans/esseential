import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';


const styles = {
  container: {
    width: '100%',
    backgroundColor: '#1565C0',
    boxShadow: 'none'

  },
};
const TabsNavigation = () => (
  <div style={styles.container}>
  <Tabs
  tabItemContainerStyle= {{
    width: '80%',
    margin: 'auto',
  }}
  inkBarStyle={{
    margin: 'auto',
    posiiton: 'relative',
  }}
  >
    <Tab
      icon={<FontIcon className="material-icons">directions_car</FontIcon>}
      label="VSI PREVOZI"
    />
    <Tab
      icon={<FontIcon className="material-icons">thumb_up</FontIcon>}
      label="MOJI PREVOZI"
    />
    <Tab
      icon={<FontIcon className="material-icons">thumbs_up_down</FontIcon>}
      label="REZERVACIJE"
    />
    <Tab
      icon={<FontIcon className="material-icons">face</FontIcon>}
      label="RAČUN"
    />
  </Tabs>
      </div>
);

export default TabsNavigation;