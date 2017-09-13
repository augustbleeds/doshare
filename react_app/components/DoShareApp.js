import React from 'react';
import MyAppBar from './AppBar';
import Greeting from './Greeting';
import InputBar from './InputBar';
import DoList from './DoList';

const dummyData =
[
  {
    day: new Date(1996, 7, 14),
    todos: [{ task: 'Eat', completed: false }, { task: 'Sleep', completed: false }, { task: 'Play', completed: true }],
  },
  {
    day: new Date(),
    todos: [{ task: 'Wakeup', completed: true }, { task: 'Do HW', completed: false }, { task: 'Eat Dinner', completed: false }],
  }];

export default class DoShareApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { days: [] };
  }

  componentWillMount() {
    this.setState({ days: dummyData });
  }

  // TODO find the current day and add new task to the todos list
  addToDo(task) {
    // const newToDo = { task, completed: false };
    // const today = new Date();
    console.log(task);
    this.setState({ days: this.state.days });
  }

  render() {
    return (
      <div>
        <MyAppBar />
        <Greeting />
        <InputBar />
        <DoList days={this.state.days} />
      </div>
    );
  }
}
