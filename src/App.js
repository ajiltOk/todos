import React, { useState } from 'react'
import TodoList from "../src/components/TodoList/TodoList"
import AddTodo from "../src/components/AddTodo/AddTodo"
import Button from './components/Button/Button'

function App() {
  const [todos, setTodos] = useState([])

  const [allTodos, setAllTodos] = useState([])
  
  const [count, setCount] = useState(0);

  const [text, setText] = useState(" item left");

  function toggleTodo(title) {
    setTodos(
      todos.map(todo => {
        if(todo.title === title && todo.completed === false) {
          todo.completed = !todo.completed

          if(count < 3) {
            setCount(count - 1)
            setText(" item left")
          } else {
            setCount(count - 1)
          }

        } else if(todo.title === title && todo.completed === true){
          todo.completed = !todo.completed
    
          if(count > 0) {
            setCount(count + 1)
            setText(" items left")
          } else {
            setCount(count + 1)
          }
          
        }
        return todo
      })
    )
    
    setAllTodos(
      allTodos.map(todo => {
        if(todo.title === title && todo.completed === false) {
          todo.completed = !todo.completed
        } else if(todo.title === title && todo.completed === true){
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      completed: false,
      title
    }]))

    setAllTodos(allTodos.concat([{
      completed: false,
      title
    }]))

    setCount(count + 1)

    if(count > 0) {
      setText(" items left")
    }
  }
  
  function removeCompletedTodos() {
    setTodos(todos.filter(todo => 
      todo.completed === false
    ))
  }

  function deleteTodo(title) {
    setTodos(todos.filter(todo => todo.title !== title))

    setAllTodos(allTodos.filter(todo => todo.title !== title))
  }

  return (
    <div>
      <h1>todos</h1>
      <AddTodo onCreate={ addTodo } />
      {todos.length ? <TodoList todos={ todos } onToggle={ toggleTodo } removeTodo={ deleteTodo } /> : <p>No todos</p>}
      <div>
        <span>{ count }{ text }</span>
        <Button children={ "Active" } removeCompletedTodos={ removeCompletedTodos } />
        <Button children={ "Completed" } />
        <Button children={ "All" } />
      </div>
  </div>
  );
}

export default App;