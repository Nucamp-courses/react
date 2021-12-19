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

           When the todo state array changes, App, TodoList, and Todo will be re-rendered
           because they are all dependent on the todos state array.

           Whenever state or props change, the component will be re-rendered.
             - State changes in App, and props changes in TodoList, Todo.

*/

function Todo({ todo, index, completeTodo }) {
    return (
      <li key={index}>
        <input 
           type="checkbox"
           checked={todo.isCompleted}
           onChange={()=> completeTodo(todo.id)}
           /> 
        <span style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
           {" "}{todo.text}{" "}
        </span>
      </li>
    );
}
  
  export default Todo;  