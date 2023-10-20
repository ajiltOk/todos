import React, { useState, useRef } from 'react'
import styles from "../TodoItem/Todoitem.module.scss"
import Button from "../Button/Button";

export default function TodoItem( {todo, onChange, removeTodo} ) {

    const [todoTitle, setTodoTitle] = useState(todo.title);

    const [availability, setAvailability] = useState(true);

    const [todoValue, setTodoValue] = useState(todoTitle);

    const [isEdit, setIsEdit] = useState(false);

    const inputElemnt = useRef(null)


    const handleChange = (event) => {
        setTodoTitle(event.target.value); 
    }

    const handlerFocus = () => {
        setTodoValue(todoTitle)
    }

    const handlerBlur = () => {

        setTodoTitle(todoValue)

        setIsEdit(false)

        setAvailability(true)
    }

    function changeTodo() { 
        setAvailability(false)

        setIsEdit(true)

        inputElemnt.current.focus()
    }

    function saveTodo() {
        setAvailability(true)

        setIsEdit(false)
    }

    let done;

    if(todo.completed) {
        done = styles.done
    }

    return(
        <li>
            <input type="checkbox" onChange={() => onChange(todo.title)} checked={todo.completed} />
            <input ref={ inputElemnt } value={ todoTitle } onChange={ handleChange } onFocus={ handlerFocus} onBlur={ handlerBlur } disabled={ availability } className={done} />
            <div>
                {isEdit && <Button buttonTitle={ 'Save' } todo={ todo } saveTodo={ saveTodo } />}
                {!isEdit && <Button buttonTitle={ 'Edit' } todo={ todo } changeTodo={ changeTodo } />}
                <Button buttonTitle={ "Delete" } todo={ todo } removeTodo={removeTodo} />
            </div>
        </li>
    )
}