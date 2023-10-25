import React, { useState } from 'react'
import TodoList from '../src/components/TodoList/TodoList'
import AddTodo from '../src/components/AddTodo/AddTodo'
import ButtonControl from './components/Button/ButtonControl'
import uuid from 'react-uuid';

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(value) {
    setTodos(todos.concat([
      {title: value,
        completed: false,
        checked: false,
        id: uuid(),
      }
    ]))
  }

  function removeTodo(idElem) {
    setTodos(todos.filter((todo) => idElem !== todo.id))
  }
   
  function renameTodo(id, newTitle) {
    setTodos(prevState => {
      let newState = [...prevState]
      newState.map((element) => {
        if(element.id === id) {
          element.title = newTitle
        }
        return element
      })
      return newState
    })
  }

  function checkedTodo(index, newTitle) {
    setTodos(prevState => {

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