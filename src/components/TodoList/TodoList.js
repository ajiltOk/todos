import TodoItem from "../TodoItem/TodoItem";

export default function TodoList( props ) {
    return(
        <ul>
            { props.todos.map( todo => {
                return(
                    <TodoItem 
                        todo={ todo } 
                        key={todo.title} 
                        onChange={props.onToggle}
                     />
                )
            }) }
        </ul>
    )
}