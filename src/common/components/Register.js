import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
marginTop: 12,
width: '100%',
};


export default class Register extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email:'miha@miha.com',
      password:'123456',
  }

  this.onEmailChange = this.onEmailChange.bind(this)
  this.onPasswordChange = this.onPasswordChange.bind(this)
 }

 onEmailChange(event) {
  this.setState({email: event.target.value})
}

onPasswordChange(event) {
  this.setState({password: event.target.value})
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
    id="text-field-controlled"
      value={this.state.email}
      onChange={this.onEmailChange}
      id="text-field-controlled"
      hintText="Message Field"
      floatingLabelText="Your Email"
      fullWidth={true}
      multiLine={true}
      rows={2}
      />

    <br />
      <TextField
      id="text-field-controlled"
      value={this.state.password}
      onChange={this.onPasswordChange}
      hintText="Password Field"
      floatingLabelText="Choose Passoword"
      fullWidth={true}
      multiLine={true}
      rows={2}
        />
    <RaisedButton
    onClick={this.registerUser.bind(this)}
    label="REGISTER"
    secondary={true}
    style={style}
   />
        </div>
      )
    }
  }
