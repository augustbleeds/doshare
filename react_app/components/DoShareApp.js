import React from 'react';
import MyAppBar from './AppBar';
import Greeting from './Greeting';
import InputBar from './InputBar';
import DoList from './DoList';

const dummyData =
[
  {
    day: 'Monday',
    todos: ['Eat', 'Sleep', 'Play'],
  },
  {
    day: 'Tuesday',
    todos: ['Do Dishes', 'Do Homework', 'Eat Dinner'],
  }];

export default class DoShareApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { days: [] };
  }

  componentWillMount() {
    this.setState({ days: dummyData });
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
