import React from 'react';
import MyAppBar from './AppBar';
import Greeting from './Greeting';

export default () => (
  <div>
    <MyAppBar />
    <Greeting />
    <p> Input Bar goes here </p>  {/* InputBar */}
    <div> {/* ToDoList */}
       ToDoList goes here
    </div>
  </div>
);
