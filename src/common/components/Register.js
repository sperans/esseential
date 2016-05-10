import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



const style = {
marginTop: 12,
width: '100%',
};

const Register = () => (
  <div>
  <h3>Register a new account</h3>
  <TextField
    hintText="Message Field"
    floatingLabelText="Name and Surname"
    fullWidth={true}
    multiLine={true}
    rows={2}
    />

    <br />
    <TextField
      hintText="Message Field"
      floatingLabelText="Choose Username"
      fullWidth={true}
      multiLine={true}
      rows={2}
      />

    <br />
      <TextField
      hintText="Password Field"
      floatingLabelText="Choose Passoword"
      fullWidth={true}
      multiLine={true}
      rows={2}
        />
    <RaisedButton label="REGISTER" secondary={true} style={style} />
        </div>

      );

export default Register;
