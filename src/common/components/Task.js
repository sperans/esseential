import React from 'react';

export default class Task extends React.Component {
  render() {
    return (
      <div>
        <span> {this.props.task} </span>
          <span> {this.props.name} </span>
      </div>
    )
  }
}
