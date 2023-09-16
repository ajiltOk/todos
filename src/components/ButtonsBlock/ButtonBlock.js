import ControlButton from "../ControlButton/ControlButton";

const buttons = [
    {active: false, title: "All"},
    {active: false, title: "Active"},
    {active: false, title: "Completed"},
  ]

export default function ButtonBlock({ showTodos }) {
    return(
        <ul>
            { buttons.map(button => {
                return(
                    <ControlButton showTodos={ showTodos } button={ button } key={ button.title } />
                )
            }) }
        </ul>
    )
}