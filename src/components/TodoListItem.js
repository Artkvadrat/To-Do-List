import React from 'react';
import './TodoListItem.css';

const TodoListItem = ( { label , important = false } ) => {

    const style = {
        color: important ? 'red' : 'black'
    };

    return (
        <span style={style} className="todoListItem">
            { label }
        </span>
    )
};

export default TodoListItem;