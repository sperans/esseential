import alt from './alt.js';
import SignUpActions from './SignUpActions.js'



class SignUpStore {
  constructor() {
      this.bindActions(SignUpActions);
      this.email = '',
      this.password = '',
      this.displayName = ''
    }
  };





export default alt.createStore(SignUpStore, "SignUpStore");
