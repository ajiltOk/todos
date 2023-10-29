import React, { useState, useRef, useEffect } from 'react'
import ButtonControl from '../Button/ButtonControl'

export default function TodoItem(props) {
  const [todoTitle, setTodoTitle] = useState(props.todo)

  const [isEdit, setIsEdit] = useState(false)

  const [isChecked, setIsChecked] = useState(props.checked)

  const inputRef = useRef(null)

  useEffect(() => {
    if (isEdit) {
      inputRef.current.focus()
    }
  }, [isEdit])

  const onButtonEditClick = () => {
    setIsEdit(true)
  }

  const onButtonSaveClick = () => {
    props.renameTodo(props.id, todoTitle)
  }

  const onButtonDelClick = () => {
    props.removeTodo(props.id)
  }

  const handleChange = (event) => {
    setTodoTitle(event.target.value)
  }

  const handleCheckboxChange = () => {
    props.checkedTodo(props.id)
    setIsChecked(!isChecked)
  }

  return (
    <div>
      <input type="checkbox" onChange={handleCheckboxChange} checked={isChecked} />
      <input ref={inputRef} type="text" value={todoTitle} onChange={handleChange} />
      {!isEdit && <ButtonControl children={'Edit'} onClick={onButtonEditClick} />}
      {isEdit && <ButtonControl children={'Save'} onClick={onButtonSaveClick} />}
      <ButtonControl children={'Delete'} onClick={onButtonDelClick} />
    </div>
  )
}
