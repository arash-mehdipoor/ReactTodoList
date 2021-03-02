import React from 'react'
import Filter from './Filter';

const Footer = ({ count }) => {
    return (
        <div className="todo-footer">
            <div className="pull-left">
                <strong>
                    <span className="count-todos">{count}</span>
                </strong>
                {' items left'}
            </div>
            <div className="pull-right">
                <Filter />
            </div>
        </div>
    )
}

export default Footer
