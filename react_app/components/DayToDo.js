import React from 'react';
import { Card, CardTitle } from 'react-toolbox';
import PropTypes from 'prop-types';
import ToDo from './ToDo';
import styles from '../../styles/components/DayToDo.css';

class DayToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card className={styles.day_wrapper}>
        <CardTitle
          title={this.props.day}
          subtitle="get 'em done"
        />
        {this.props.todos.map(x => <ToDo todo={x} />)}
      </Card>
    );
  }
}

DayToDo.propTypes = {
  day: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DayToDo;
