import React from 'react'
import InputBox from './InputBox'

const Header = ({ titleTodoApp, addNew }) => {
    return (
        <header>
            <h1>{titleTodoApp}</h1>
            <InputBox addNew={addNew} />
        </header>
    )
}

export default Header
