import alt from './alt.js'
import SignUpStore from '../store/SignUpStore.js'



class SignUpActions {
  constructor() {
    this.generateActions(
      'registerUser',
      'login',
    );

  }

registerUser(displayName, email, password) {
  var data= {
    displayName: displayName,
    email: email,
    password: password
  };

  Stamplay.User.signup(data)
    .then(function(res) {
      // success
    }, function(err) {
      // error
    })

};

login() {}

}




export default alt.generateActions('registerUser', 'login');
