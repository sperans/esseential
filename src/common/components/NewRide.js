import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';


const style = {
marginTop: 12,
width: '100%',
};

const NewRide = () => (
  <div>
  <h3>Make a new ride</h3>
  <TextField
    hintText="Message Field"
    floatingLabelText="Starting From"
    fullWidth={true}
    multiLine={true}
    rows={2}
    />

    <br />
    <TextField
      hintText="Message Field"
      floatingLabelText="Going to"
      fullWidth={true}
      multiLine={true}
      rows={2}
      />

    <br />
      <TextField
      hintText="Message Field"
      floatingLabelText="Number of seats"
      fullWidth={true}
      multiLine={true}
      rows={2}
        />

      <br />
      <TextField
      hintText="Message Field"
      floatingLabelText="Price per seat"
      fullWidth={true}
      multiLine={true}
      rows={2}
        />

        <br />
        <DatePicker
        hintText="Date of Travel"
        mode="landscape"
        fullWidth={true}
        multiLine={true}
        rows={2}
        />

        <br />
        <TimePicker
          format="24hr"
          hintText="Time of Travel"
          fullWidth={true}
          multiLine={true}
          rows={2}
        />
        <RaisedButton label="MAKE NEW RIDE" secondary={true} style={style} />
      </div>

);

export default NewRide;
