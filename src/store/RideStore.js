import alt from './alt.js';
import RideActions from './RideActions.js'



class RideStore {
  constructor() {
      this.bindActions(RideActions);
      this.rides =[]
  }

  read()  {

    let _this = this;
    const rides = this.rides;

    Stamplay.Object("ride").get({})
    .then(function(res) {
    let allrides = res.data;
    _this.setState({
      rides: rides.concat(allrides)
    })
    }, function(err) {
      // error
    })

  }








  create() {}
  update() {}
  delete() {}

}



export default alt.createStore(RideStore, "RideStore");
