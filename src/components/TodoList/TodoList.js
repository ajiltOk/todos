import TodoItem from "../TodoItem/TodoItem";

export default function TodoList( props ) {

    return(
        <ul>
            { props.todos.map( todo => {
                return(
                    <div key={ todo.title }>
                        <TodoItem 
                            todo={ todo }  
                            onChange={ props.onToggle }
                            removeTodo={ props.removeTodo }
                        />
                    </div>
                )
            }) }
        </ul>
    )
}