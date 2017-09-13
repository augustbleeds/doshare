import React from 'react';
import PropTypes from 'prop-types';
import { ListCheckbox } from 'react-toolbox';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ListCheckbox
        caption={this.props.isCompleted ? <strike>{this.props.todo}</strike> : this.props.todo}
        legend="hello world"
      />
    );
  }
}

ToDo.propTypes = {
  todo: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

export default ToDo;
