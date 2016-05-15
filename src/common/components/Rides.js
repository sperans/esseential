import React from 'react';
import Ride from '../components/Ride'


export default class Rides extends React.Component {

render() {

const rides = this.props.items;

return (
  <ul>
  {rides.map(this.renderRide)}
  </ul>
  )
}

renderRide = (ride) => {
  return (
    <div key={ride.id}>
    <Ride startLocation={ride.startLocation} endLocation={ride.endLocation} price={ride.price} startDate={ride.startDate} userName={ride.owner} seats={ride.seats} />
    </div>
  )
}

}
