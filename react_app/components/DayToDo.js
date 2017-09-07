import React from 'react';
import { Card, CardTitle } from 'react-toolbox';

export default class extends React.Component {
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
      </Card>
    );
  }
}
