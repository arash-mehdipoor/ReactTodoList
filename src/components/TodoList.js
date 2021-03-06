import React from 'react'

const TodoList = ({ title, items }) => {
    return (
        <div className="todolist">
            <h1>{title.toUpperCase()}</h1>
            <ul className="list-unstyled">
                {
                    items.map(item =>
                        <li className="ui-state-default" key={item.id}>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value="" />{item.text}</label>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default TodoList
