import React from 'react'

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title.toUpperCase()}</h1>
            <input type="text" className="form-control add-todo" placeholder="Add New" />
        </header>
    )
}

export default Header
