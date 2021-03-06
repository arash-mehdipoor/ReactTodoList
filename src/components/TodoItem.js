import React from 'react'

const TodoItem = ({ data }) => {
    return (
        <li className="ui-state-default" key={data.id}>
            <div className="checkbox">
                <label>
                    <input type="checkbox" value="" />{data.text}</label>
            </div>
        </li>
    )
}

export default TodoItem
