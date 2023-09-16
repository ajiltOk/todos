export default function ControlButton({ showTodos, button }) {
    return(
        <button onClick={() => showTodos(button.title)}>{ button.title }</button>
    )
}