import Todo from './Todo';

function TodoList({ todos }) {

  return (
    <ul>
      {
         todos.map((todo, index) => {
             return <Todo todo={todo} key={index} />;
         })
      }
    </ul>
  );
}

export default TodoList;