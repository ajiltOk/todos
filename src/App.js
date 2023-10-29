import React, { useState, useMemo } from 'react'
import TodoList from '../src/components/TodoList/TodoList'
import AddTodo from '../src/components/AddTodo/AddTodo'
import ButtonBlock from './components/ButtonsBlock/ButtonBlock'
import uuid from 'react-uuid'

function App() {
  const [todos, setTodos] = useState([])

  const [active, setActive] = useState(false)

  const [completed, setCompleted] = useState(false)

  const filteredTodos = useMemo(() => {
    if (active) {
      return todos.filter((todo) => todo.checked === false)
    } else if (completed) {
      return todos.filter((todo) => todo.checked === true)
    } else {
      return todos
    }
  }, [todos, active, completed])

  let counter = todos.filter((todo) => todo.checked === false).length

  function addTodo(value) {
    setTodos(todos.concat([{ title: value, checked: false, id: uuid() }]))
  }

  function removeTodo(idTodo) {
    setTodos(todos.filter((todo) => idTodo !== todo.id))
  }

  function renameTodo(id, newTitle) {
    setTodos((prevState) => {
      let newState = [...prevState]
      newState.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle
        }
        return todo
      })
      return newState
    })
  }

  function checkedTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.checked = !todo.checked
        }
        return todo
      })
    )
  }

  function activeTodos() {
    setCompleted(false)
    setActive(true)
  }

  function completedTodos() {
    setActive(false)
    setCompleted(true)
  }

  function allTodos() {
    setActive(false)
    setCompleted(false)
  }

  return (
    <div>
      <h1>todos</h1>
      <AddTodo onCreate={addTodo} />
      <TodoList
        todos={filteredTodos}
        removeTodo={removeTodo}
        renameTodo={renameTodo}
        checkedTodo={checkedTodo}
      />
      <div>
        {counter < 2 ? (
          <span>{counter + ' item left'}</span>
        ) : (
          <span>{counter + ' items left'}</span>
        )}
        <ButtonBlock
          todos={todos}
          activeTodos={activeTodos}
          completedTodos={completedTodos}
          allTodos={allTodos}
        />
      </div>
    </div>
  )
}

export default App
