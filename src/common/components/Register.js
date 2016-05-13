import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
marginTop: 12,
width: '100%',
};

class Register extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password:'',
    };
  }

  handleChange = (event) => {
    this.setState({
      displayName: event.target.displayName,
      email: event.target.email,
      password: event.target.password,
    });
  }

registerUser() {
  Stamplay.User.signup(this.state)
  .then(function(res) {
    // success
  }, function(err) {
    // error
  })
}



render() {
   return (
  <div>
  <h3>Register a new account</h3>
  <TextField
    displayName={this.state.displayName}
    onChange={this.handleChange}
    hintText="Message Field"
    floatingLabelText="Name and Surname"
    fullWidth={true}
    multiLine={true}
    rows={2}
    />

    <br />
    <TextField
      email={this.state.email}
      onChange={this.handleChange}
      id="text-field-controlled"
      hintText="Message Field"
      floatingLabelText="Your Email"
      fullWidth={true}
      multiLine={true}
      rows={2}
      />

    <br />
      <TextField
      password={this.state.password}
      onChange={this.handleChange}
      hintText="Password Field"
      floatingLabelText="Choose Passoword"
      fullWidth={true}
      multiLine={true}
      rows={2}
        />
    <RaisedButton
    onClick={this.registerUser}
    label="REGISTER"
    secondary={true}
    style={style}
   />
        </div>
      )
    }
  }

  export default Register;
