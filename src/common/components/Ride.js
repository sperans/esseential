
import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';


const style = {
  height: 100,
  width: '100%',
  marginTop: 12,
  paddingTop: 12,
  paddingRight: 12,
  paddingBottom: 12,
  paddingLeft: 12,
  textAlign: 'center',
};

const styleAvatar = {
  marginTop: 10,
  float: 'left',
};
const styleStartLocation = {
  fontWeight: 'bold',
  float: 'left',
  paddingLeft: 30,
  paddingTop: 18,
  fontSize: '1.2em',
};
const styleEndLocation ={
  fontWeight: 'bold',
  paddingTop: 18,
  color: '#F97F85',
  fontSize: '1.8em',
};
const stylePrice = {
  float: 'right',
  color: '#F97F85',
  fontSize: '2em',
  fontWeight: 'bold',
  paddingTop: 15,
  paddingRight: 45,
};
const styleUsername = {
    float: 'left',
    fontWeight: 'bold',
    paddingLeft: 85,
    fontSize: '0.9em',
};
const styleDate = {
  fontWeight: 'bold',
  fontSize: '0.9em',
};
const styleTime = {
  fontWeight: 'bold',
  float: 'right',
  paddingRight: 45,
  fontSize: '0.9em',
};


export default class Ride extends React.Component {

  render() {
      return (

<Paper
            style={style} zDepth={1}>
<div>
<Avatar
            src="http://lorempixel.com/100/100/nature/"
            size={55}
            style={styleAvatar}
/>
<span
            style={styleStartLocation}>{this.props.startLocation}</span>
<span
            style={styleEndLocation}>{this.props.endLocation}</span>
<span
            style={stylePrice}>{this.props.price} €</span>
</div>
<br></br>
<br></br>
<div>
<span
            style={styleUsername}>{this.props.userName}</span>
<span
            style={styleDate}>{this.props.startDate}</span>
<span
            style={styleTime}>S: {this.props.seats}</span>
</div>
</Paper>
  )
}
}
