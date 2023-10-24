import React, { useState } from 'react'
import ButtonControl from '../Button/ButtonControl'

export default function AddTodo( {onCreate, increment} ) {
    const [value, setValue] = useState("")

    function submitHendler(event) {
        event.preventDefault()

        if(value.trim()) {
            onCreate(value)
            setValue("")
        }

        increment()
    }

    return(
        <form onSubmit={submitHendler}>
            <input value={ value } onChange={ (event) => setValue(event.target.value) } />
            <ButtonControl children={ "Add todo" } type="submit" />
        </form>
    )
}