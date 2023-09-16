import styles from "../TodoItem/Todoitem.module.scss"

export default function TodoItem( {todo, onChange} ) {
    let done;

    if(todo.completed) {
        done = styles.done
    }

    return(
        <li>
            <input type="checkbox" onChange={() => onChange(todo.title)} checked={todo.completed} />
            <span className={done}>
                { todo.title }
            </span>
        </li>
    )
}