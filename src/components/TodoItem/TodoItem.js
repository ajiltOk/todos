import React, { useState, useRef } from 'react'
import styles from "../TodoItem/Todoitem.module.scss"
import Button from "../Button/Button";

export default function TodoItem( {todo, onChange, removeTodo} ) {

    const [todoTitle, setTodoTitle] = useState(todo.title);

    const [availability, setAvailability] = useState(true);

    const [todoValue, setTodoValue] = useState(todoTitle);

    const [isEdit, setIsEdit] = useState(true);

    const inputElemnt = useRef(null)


    const handleChange = (event) => {
        event.preventDefault()

        setTodoTitle(event.target.value); 
    }

    const handleFocus = () => {
        setTodoValue(todoTitle)
    }

    const handleBlur = () => {
        setTodoTitle(todoValue)

        setIsEdit(true)

        setAvailability(true)
    }

    function changeTodo() { 
        setAvailability(false)

        setIsEdit(false)
    }

    function saveTodo() {
        setAvailability(true)

        setIsEdit(true)
    }

    let done;

    if(todo.completed) {
        done = styles.done
    }

    return(
        <li>
            <input type="checkbox" onChange={ () => onChange(todo.title) } checked={ todo.completed } />
            <input ref={ inputElemnt } value={ todoTitle } onChange={ handleChange } onFocus={ handleFocus} onBlur={ handleBlur } disabled={ availability } className={done} />
            <div>
                {isEdit && <Button children={ "Edit" } clickOnEdit={ changeTodo } />}
                {!isEdit && <Button children={ "Save" } clickOnSave={ saveTodo } />}
                <Button children={ "Delete" } todo={ todo } clickOnDelete={ removeTodo } />
            </div>
        </li>
    )
}