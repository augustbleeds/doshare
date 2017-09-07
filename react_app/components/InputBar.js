import React from 'react';
import { Input, Button } from 'react-toolbox';
import styles from '../../styles/components/InputBar.css';


export default class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
  }

  handleTaskChange(task) {
    this.setState({ task });
  }

  render() {
    return (
      <div className={styles.input_bar}>
        <Input className={styles.bar} type="text" label="Task" value={this.state.task} onChange={val => this.handleTaskChange(val)} maxLength={25} />
        <Button className={styles.button} icon="list" label="Add" raised neutral />
      </div>
    );
  }
}
