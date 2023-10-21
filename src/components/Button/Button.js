import React from 'react'

export default function Button({ todo, children, clickOnEdit, clickOnSave, clickOnDelete, removeCompletedTodos }) {
    function handleClick() {
        switch(children){
            case "Edit": clickOnEdit()
            break
            case "Save": clickOnSave()
            break
            case "Delete": clickOnDelete(todo.title)
            break
            case "Active": removeCompletedTodos()
            break
        }

    }

    return(
        <button onClick={ handleClick }>{ children }</button>
    )
}