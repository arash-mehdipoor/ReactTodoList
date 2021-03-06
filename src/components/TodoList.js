import React from 'react'
import Footer from './Footer'
import Header from './Header'
import TodoItem from './TodoItem'

const TodoList = ({ title, items }) => {
    const count = items.length;
    return (
        <div className="todolist">
            <Header title={title} />
            <ul className="list-unstyled">
                {
                    items.map(item =>
                        <TodoItem data={item} />
                    )
                }
            </ul>
            <Footer count={count} />
        </div>
    )
}

export default TodoList
