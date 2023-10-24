import React, { useState, useRef, useEffect } from 'react'
import styles from "../TodoItem/Todoitem.module.scss"
import ButtonControl from '../Button/ButtonControl'

export default function TodoItem( props ) {
    const [todoTitle, setTodoTitle] = useState(props.todo)

    const [isEdit, setIsEdit] = useState(false)

    const [isChecked, setIsChecked] = useState(false);

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
        props.renameTodo(props.index, todoTitle)
    }

    const onButtonDelClick = () => {
        props.removeTodo(props.index)
        props.decreaseCounter()
    }

    const handleChange = (event) => {
        setTodoTitle(event.target.value)
    }

    const handleBlur = (event) => {
        setIsEdit(false)
        
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)

        if(isChecked) {
            props.decreaseCounter()
            //props.checkedTodo()
        } else {
            props.increaseCounter()
        }
        
    };

    let done;

    if(isChecked) {
        done = styles.done
    }

    return (
        <div>
            <input type="checkbox" onChange={ handleCheckboxChange } checked={ isChecked } />
            <input ref={ inputRef } type="text" value={ isEdit ? todoTitle : props.todo } onChange={ handleChange } disabled= { !isEdit } onBlur={ handleBlur } className={done} />
            {!isEdit && <ButtonControl children={ "Edit" } onClick={ onButtonEditClick } />}
            {isEdit && <ButtonControl children={ "Save" } onClick={ onButtonSaveClick} />}
            <ButtonControl children={ "Delete" } onClick={ onButtonDelClick } />
        </div>
    );
}