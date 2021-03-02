import React, { useState } from 'react'

const InputBox = ({ addNew }) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    const clear = () => {
        setInputValue('');
    }
    const handleKeyUp = (e) => {
        if (e.keyCode === 13 && inputValue) {
            addNew(inputValue.trim());
            clear()
        }
    }
    return (
        <input type="text"
            onChange={handleChange}
            value={inputValue}
            onKeyUp={handleKeyUp}
            className="form-control add-todo"
            placeholder="Add New" />
    )
}

export default InputBox
