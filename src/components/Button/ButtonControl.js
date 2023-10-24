export default function ButtonControl({ children, onClick }) {
    return(
        <button onClick={ onClick }>{ children }</button>
    )
}