import React from 'react';
import Rides from '../components/Rides'
import RideActions from '../../store/RideActions';
import RideStore from '../../store/RideStore';



export default class AllRides extends React.Component {


  constructor(props) {
    super(props);
    this.state = RideStore.getState();
  }

  componentDidMount() {
    RideStore.listen(this.storeChanged);
    RideActions.read();
  }

  componentWillUnmount() {
    RideStore.unlisten(this.storeChanged);
  }

  storeChanged = (state) => {
    this.setState(state);
  }


render() {

const rides = this.state.rides;

  return(

    <div>
      <Rides items={rides}/>
    </div>

    )
  }
}
