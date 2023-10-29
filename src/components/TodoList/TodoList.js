import TodoItem from '../TodoItem/TodoItem'

export default function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <li key={todo.title}>
            <TodoItem
              todo={todo.title}
              removeTodo={props.removeTodo}
              renameTodo={props.renameTodo}
              checkedTodo={props.checkedTodo}
              checked={todo.checked}
              id={todo.id}
            />
          </li>
        )
      })}
    </ul>
  )
}
