import React from 'react';
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css';

const ToDoList = ({ todos, onDeleted }) => {

    const elements = todos.map( (item) => {
        const { id, ...itemProps} = item;
        return (
           <li key={ item.id } className="list-group-item">
               <TodoListItem { ...itemProps } onDeleted={ () => onDeleted(id) }/>
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