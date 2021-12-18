/*
     Note: By breaking down our app into child components for the list of todos
           we are building a component hierarchy. This is one of the main patterns
           in developing applications. As your applications grows, adhering to 
           principles such as SRP (single responsibility principle) is vital.

           https://reactjs.org/docs/thinking-in-react.html
           https://en.wikipedia.org/wiki/Single-responsibility_principle

           So with our Todo app:

           <App /> 
                <TodoList /> 
                          <Todo />

*/

function Todo({ todo, index }) {
    return (
      <li key={index}>
        <input type="checkbox" /> <span> {todo.text} </span>
      </li>
    );
  }
  
  export default Todo;  