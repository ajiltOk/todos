import React, { useState } from 'react'
import styles from "../TodoItem/Todoitem.module.scss"
import Button from "../Button/Button";

export default function TodoItem( {todo, onChange, removeTodo} ) {
    const [inEdit, setInEdit] = useState("Edit");

    const [todoTitle, setTodoTitle] = useState(todo.title);

    const [availability, setAvailability] = useState(true);

    const [todoValue, setTodoValue] = useState(todoTitle);


    const handleChange = (event) => {
        setTodoTitle(event.target.value);
    }

    const handlerFocus = () => {
        setTodoValue(todoTitle)
    }

    const handlerBlur = () => {
        // вот тут нужно описать, что если мы кликаем в любое место, кроме кнопки "Save", то input должен стать не активным и todoTitle стать тем, что был до редактирования или расфокусировки
    }

    function changeTodo() { 
        setAvailability(false)

        setInEdit("Save")
    }

    function saveTodo() {
        setAvailability(true)

        setInEdit("Edit")
    }

    let done;

    if(todo.completed) {
        done = styles.done
    }

    return(
        <li>
            <input type="checkbox" onChange={() => onChange(todo.title)} checked={todo.completed} />
            <input value={ todoTitle } onChange={ handleChange } onFocus={ handlerFocus} onBlur={ handlerBlur } disabled={ availability } className={done} />
            <div>
                <Button buttonTitle={ inEdit } todo={ todo } changeTodo={ changeTodo } saveTodo={ saveTodo } />
                <Button buttonTitle={ "Delete" } todo={ todo } removeTodo={removeTodo} />
            </div>
        </li>
    )
}