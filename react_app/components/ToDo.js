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
        caption={this.props.todo}
        legend="hello world"
      />
    );
  }
}

ToDo.propTypes = {
  todo: PropTypes.string.isRequired,
};

export default ToDo;
