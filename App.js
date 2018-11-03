import React, { Component,Fragment } from 'react';
import Todolist from './page/todolist/Todolist';
import Login from './page/login/login';

class App extends Component {
  render() {
    return (
        <Fragment>
           <Todolist/>
            <Login/>
        </Fragment>
    );
  }
}

export default App;
