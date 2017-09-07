import React from 'react';
import MyAppBar from './AppBar';
import Greeting from './Greeting';
import InputBar from './InputBar';

export default () => (
  <div>
    <MyAppBar />
    <Greeting />
    <InputBar />
    <div> {/* ToDoList */}
       ToDoList goes here
    </div>
  </div>
);
