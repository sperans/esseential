import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



const style = {
marginTop: 12,
width: '100%',
};


class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password:'',
    };
  }

  handleChange = (event) => {
    this.setState({
      email: event.target.email,
      password: event.target.password,
    });
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
    email={this.state.email}
    onChange={this.handleChange}
    hintText="Message Field"
    floatingLabelText="Email"
    fullWidth={true}
    multiLine={true}
    rows={2}
    />
    <br />
    <TextField
    password={this.state.password}
    onChange={this.handleChange}
    hintText="Password Field"
    floatingLabelText="Password"
    fullWidth={true}
    multiLine={true}
    rows={2}
      />
  <RaisedButton
    onClick={this.loginUser}
    label="LOGIN" secondary={true} style={style} />
        </div>
      )
    }
  }


export default Login;
