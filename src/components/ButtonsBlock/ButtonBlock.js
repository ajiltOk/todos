import ButtonControl from '../Button/ButtonControl'

export default function ButtonBlock({ activeTodos, completedTodos, allTodos }) {
  function activeTodoCounter() {
    activeTodos()
  }

  function checkedTodoCounter() {
    completedTodos()
  }

  function allTodoCounter() {
    allTodos()
  }

  return (
    <>
      <ButtonControl children={'Active'} onClick={activeTodoCounter} />
      <ButtonControl children={'Completed'} onClick={checkedTodoCounter} />
      <ButtonControl children={'All'} onClick={allTodoCounter} />
    </>
  )
}
