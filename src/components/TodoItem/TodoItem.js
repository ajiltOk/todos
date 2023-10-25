import React, { useState, useRef, useEffect } from 'react'
import ButtonControl from '../Button/ButtonControl'

export default function TodoItem( props ) {
    const [todoTitle, setTodoTitle] = useState(props.todo)

    const [isEdit, setIsEdit] = useState(false)

    const inputRef = useRef(null);

    useEffect(() => {
        if(isEdit){
            inputRef.current.focus()
        }
    },[isEdit])

    const onButtonEditClick = () => {
        setIsEdit(true)
        setTodoTitle(props.todo)
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

    const handleBlur = () => {
        setIsEdit(false)
    }

    const handleCheckboxChange = () => {
        
    }


    return (
        <div>
            <input type="checkbox" onChange={ handleCheckboxChange } checked={ props.todo.checked} />
            <input ref={ inputRef } type="text" value={ isEdit ? todoTitle : props.todo } onChange={ handleChange } disabled= { !isEdit } onBlur={ handleBlur } />
            {!isEdit && <ButtonControl children={ "Edit" } onClick={ onButtonEditClick } />}
            {isEdit && <ButtonControl children={ "Save" } onClick={ onButtonSaveClick} />}
            <ButtonControl children={ "Delete" } onClick={ onButtonDelClick } />
        </div>
    );
}