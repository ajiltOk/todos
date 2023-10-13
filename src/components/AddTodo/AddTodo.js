import React, { useState } from 'react';

export default function AddTodo({ onCreate }) {
    const [value, setValue] = useState("")

    function submitHendler(event) {
        event.preventDefault()

        if(value.trim()) {
            onCreate(value)
            setValue("")
        }
    }

    return(
        <form onSubmit={submitHendler}>
            <input value={value} onChange={event => setValue(event.target.value)} />
            <button type="submit">{ "Add todo" }</button>
        </form>
    )
}