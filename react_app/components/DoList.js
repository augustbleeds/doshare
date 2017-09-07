import React from 'react';
import DayToDo from './DayToDo';


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

class DoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {dummyData.map(dayInfo => <DayToDo day={dayInfo.day} todos={dayInfo.todos} />)}
      </div>
    );
  }
}

export default DoList;
