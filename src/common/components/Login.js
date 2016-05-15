import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



const style = {
marginTop: 12,
width: '100%',
};


export default class Login extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email:'mihamprivat@gmail.com',
      password:'Traktor11',
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

  loginUser() {

    Stamplay.User.login(this.state)
    .then(function(res) {
      // success
    }, function(err) {
      // error
    })
  }

  render() {
     return (
  <div>
  <h3>Login</h3>
  <TextField
  id="text-field-controlled"
    value={this.state.email}
    onChange={this.onEmailChange}
    hintText="Message Field"
    floatingLabelText="Email"
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
    floatingLabelText="Password"
    fullWidth={true}
    multiLine={true}
    rows={2}
      />
  <RaisedButton
    onClick={this.loginUser.bind(this)}
    label="LOGIN" secondary={true} style={style} />
        </div>
      )
    }
  }
