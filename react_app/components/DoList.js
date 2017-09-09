import React from 'react';
import PropTypes from 'prop-types';
import DayToDo from './DayToDo';
import { getDay, getStringDate } from '../helper';

class DoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.days.map(dayInfo => (
          <DayToDo
            key={dayInfo.day}
            day={getDay(dayInfo.day)}
            dateStr={getStringDate(dayInfo.day)}
            todos={dayInfo.todos}
          />))
        }
      </div>
    );
  }
}

DoList.propTypes = {
  days: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DoList;
