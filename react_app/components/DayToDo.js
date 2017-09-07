import React from 'react';
import { Card, CardTitle } from 'react-toolbox';
import PropTypes from 'prop-types';

class DayToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card>
        <CardTitle
          title={this.props.day}
          subtitle="get 'em done"
        />
        {this.props.todos.map(x => <p> {x} </p>)}
      </Card>
    );
  }
}

DayToDo.propTypes = {
  day: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DayToDo;
