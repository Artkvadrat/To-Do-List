import React from 'react';
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css';

const ToDoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {

    const elements = todos.map( (item) => {
        const { id, ...itemProps} = item;
        return (
           <li key={ item.id } className="list-group-item">
               <TodoListItem { ...itemProps }
                             onDeleted={ () => onDeleted(id)}
                             onToggleDone={ () => onToggleDone(id)}
                             onToggleImportant={ () => onToggleImportant(id)} />
           </li>
        )
    });

    return (
        <ul className="list-group todoList">
            { elements }
        </ul>
    )
};

export default ToDoList;