export default function Button({ removeCompletedTodo, removeTodo, changeTodo, saveTodo, todo, buttonTitle }) {
    return(
        <button onClick={() => {
            if(buttonTitle === "Clear completed") {
                removeCompletedTodo()
            } else if(buttonTitle === "Delete") {
                removeTodo(todo.title)
            } else if(buttonTitle === "Edit") {
                changeTodo()
            } else if(buttonTitle === "Save") {
                saveTodo()
            }
        }}>{ buttonTitle }</button>
    )
}