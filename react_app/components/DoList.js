import React from 'react';
import PropTypes from 'prop-types';
import DayToDo from './DayToDo';

class DoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.days.map(dayInfo => <DayToDo day={dayInfo.day} todos={dayInfo.todos} />)}
      </div>
    );
  }
}

DoList.propTypes = {
  days: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DoList;
