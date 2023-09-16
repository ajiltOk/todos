export default function Button({ removeList }) {
    return(
        <button onClick={() => removeList()}>Clear completed</button>
    )
}