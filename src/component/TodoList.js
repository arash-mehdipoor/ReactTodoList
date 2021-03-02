import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TodoItem from './TodoItem';

const TodoList = ({ items, title, addItem }) => {
    const count = items.length;
    return (

        <div className="container">
            <div className="row">
                <div className="todolist">
                    <Header addNew={addItem} titleTodoApp={title} />
                    <ul className="list-unstyled">
                        <TodoItem items={items} />
                    </ul>
                    <Footer count={count} />
                </div>
            </div>
        </div>

    )
}

export default TodoList
