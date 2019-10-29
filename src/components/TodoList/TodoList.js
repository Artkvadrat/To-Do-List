import React, {Component} from 'react';
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css';

class ToDoList extends Component{



    render() {

        const { todos, onDeleted, onToggleDone, onToggleImportant } = this.props;

        const elements = todos.map( (item) => {
            const { id, display, ...itemProps} = item;
            let className = 'list-group-item';
            if (!display) {
                className += ' d-none';
            }
            return (
                <li key={ item.id } className={ className }>
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
    }
}

export default ToDoList;