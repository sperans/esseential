import React from 'react';
import Task from './Task.js';

export default class Tasks extends React.Component {
  render() {
    const tasks = [
      {
        id : 1,
        body : "This is a task!",
        name: "Miha"
      },
      {
        id : 2,
        body : "This is another task!",
        name: "Janja"
      },
      {
        id : 3,
        body : "This is a third task!",
        name: "Mila"
      }
    ]

    return (
      <ul>
         { tasks.map(this.renderTask) }
      </ul>
    )
  }


  renderTask = (task) => {
    return (
      <li key={task.id}>
        <Task task={task.body} name={task.name} />
      </li>
    )
  }
}
