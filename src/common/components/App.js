import React from 'react';
import Navigation  from "./Navigation";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';



injectTapEventPlugin();

export default ({children}) => {
  return (
    <div>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Navigation />
      </MuiThemeProvider>
      {children}
    </div>
  );
}
