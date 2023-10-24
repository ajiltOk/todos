import TodoItem from "../TodoItem/TodoItem";

export default function TodoList( props ) {
    return(
        <ul>
            { props.todos.map( (todo, index) => { 
                return(
                    <li key={ todo.title }>
                        <TodoItem 
                            todo={ todo.title } 
                            decreaseCounter={ props.decrement }
                            increaseCounter={ props.increment }
                            removeTodo={ props.removeTodo }
                            checkedTodo={ props.checkedTodo }
                            renameTodo={ props.renameTodo }
                            index={ index }
                        />
                    </li>
                )
            }) }
        </ul>
    )
}