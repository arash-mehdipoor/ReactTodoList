import React from 'react'

const TodoItem = ({ items }) => {
    return (
        items.map(item => (
            <li className="ui-state-default" key={item.id}>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="" />
                        {item.text}</label>
                </div>
            </li>
        ))
    )
}

export default TodoItem
