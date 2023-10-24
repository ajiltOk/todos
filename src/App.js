import React, {useState, useRef} from 'react'
import TodoList from '../src/components/TodoList/TodoList'
import AddTodo from '../src/components/AddTodo/AddTodo'
import ButtonControl from './components/Button/ButtonControl'

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(value) {
    setTodos(todos.concat([
      {title: value,
        completed: false 
      }
    ]))
  }
  console.log(todos)

  function removeTodo(indexElem) {
    setTodos(todos.filter((_, index) => indexElem !== index))
  }
   
  function renameTodo(index, newTitle) {
    setTodos(prevState => {
      const newState = [...prevState]
      newState[index] = { ...newState[index], title: newTitle }
      return newState
    })
  }

  return (
    <div>
      <h1>todos</h1>
      <AddTodo onCreate={ addTodo } />
      <TodoList todos={ todos }  removeTodo={ removeTodo } renameTodo={ renameTodo } />
      <div>
        
        <ButtonControl children={ "Active" } />
        <ButtonControl children={ "Completed" } />
        <ButtonControl children={ "All" } />
        <ButtonControl children={ "Clear all" } />
      </div>
  </div>
  )
}

export default App;