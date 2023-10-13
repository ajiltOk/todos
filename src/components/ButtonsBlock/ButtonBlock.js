import ControlButton from "../Button/Button";

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
                    <ControlButton showTodos={showTodos} buttonTitle={ button.title } key={ button.title } />
                )
            }) }
        </ul>
    )
}