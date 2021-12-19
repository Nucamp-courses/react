import Todo from './Todo';

function TodoList({ todos, completeTodo }) {

  /* 
     Passing completeTodo function to the Todo component because 
     the Todo component needs to know how to complete a todo
  */
   return (
    <ul>
      {
         todos.map((todo, index) => {
             return <Todo todo={todo} key={index} completeTodo = {completeTodo} />;
         })
      }
    </ul>
  );
}

export default TodoList;