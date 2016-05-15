import React from 'react';
import Ride from '../components/Ride'


export default class RidesX extends React.Component {

render() {

const rides = [
  {
    id: 1,
    userName: 'Miha Miklavčič',
    startLocation: 'Ljubljana',
    endLocation: 'Koper',
    price: 10,
    seats: 3,
    startDate: "2016-03-10T11:51:28.625Z",
  },
  {
    id: 2,
    userName: 'Janja Križman',
    startLocation: 'Koper',
    endLocation: 'Maribor',
    price: 5,
    seats: 2,
    startDate: "2016-03-11T14:51:28.625Z",
  },
  {
    id: 3,
    userName: 'Mila Miklačič',
    startLocation: 'Maribor',
    endLocation: 'Ljubljana',
    price: 7,
    seats: 4,
    startDate: "2016-03-10T16:51:28.625Z",
  },
  {
    id: 4,
    userName: 'Samo Miklavčič',
    startLocation: 'Ljubljana',
    endLocation: 'Maribor',
    price: 8,
    seats: 2,
    startDate: "2016-03-10T14:59:28.625Z",
  }
]

return (
  <ul>
  {rides.map(this.renderRide)}
  </ul>
  )
}

renderRide = (ride) => {
  return (
    <div key={ride.id}>
    <Ride startLocation={ride.startLocation} endLocation={ride.endLocation} price={ride.price} startDate={ride.startDate} userName={ride.userName} seats={ride.seats} />
    </div>
  )
}

}
