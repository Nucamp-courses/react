import React, { Component } from 'react';
import TodoList from './components/TodoList';
import { todos} from './api/data'
import './styles.css';

class App extends Component() {

  constructor(props) {
    super(props);
    this.state = {
      todos: todos
    }
  }
  
  render() {
      
      return (
         <>
            <TodoList todos={todos} />
         </>
      )
  };
}

export default App;