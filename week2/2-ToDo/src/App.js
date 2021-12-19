import React, { useState } from 'react';
import {listOfTodos} from './api/data'
import TodoList from './components/TodoList';
import './styles.css';

function App() {

  const [todos, setTodos] = useState(listOfTodos);

  /*
        In defining state, we also need a mechanism to update the state.
        We use completeTodo to update the state of todos and pass it as a prop.
        Whichever compoment uses the state, needs a function to update it.
        Note: Just passing the setTodos function as a prop is not enough.
  */
  const completeTodo = (id) => {
    // make copy of array first
     const tempTodos = [...todos];
    // find the index of the todo to toggle
     const index = tempTodos.findIndex(todo => todo.id === id);
    // toggle the isCompleted value
     tempTodos[index].isCompleted = !tempTodos[index].isCompleted;
    // set the new todos array
     setTodos(tempTodos);
  }
      
  return (
      <>
         <TodoList 
            todos={todos} 
            completeTodo={completeTodo} 
         />
      </>
  )
}

export default App;