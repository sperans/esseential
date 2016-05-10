import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



const style = {
marginTop: 12,
width: '100%',
};

const Login = () => (
  <div>
  <h3>Login</h3>
  <TextField
    hintText="Message Field"
    floatingLabelText="Username"
    fullWidth={true}
    multiLine={true}
    rows={2}
    />
    <br />
    <TextField
      hintText="Password Field"
      floatingLabelText="Password"
      fullWidth={true}
      multiLine={true}
      rows={2}
      />
      <RaisedButton label="LOGIN" secondary={true} style={style} />
        </div>

      );

export default Login;
