import React, { Component } from "react";
import './App.css';
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import ToDoList from "../TodoList/TodoList";
import ItemAddPanel from "../ItemAddPanel/ItemAddPanel";


class App extends Component {

    maxId = 20;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome React App'),
            this.createTodoItem('Have a lunch')
        ]
    };

    createTodoItem(text) {
        return {
            label: text,
            done: false,
            important: false,
            id: this.maxId++
        }
    }

    DeleteItem = (id) => {
        this.setState(( { todoData } ) => {
            const idx = todoData.findIndex( (el) => el.id === id);

            return {
                todoData: [ ...todoData.slice(0, idx), ...todoData.slice(idx + 1) ]
            }
        })
    };

    addItem = (text) => {
        this.setState( ( { todoData } )  => {
            const newPart = this.createTodoItem( text );
            return {
                todoData: [ ...todoData, newPart ]
            }
        })
    };

    toggleProperty(arr, propName, id) {
            const idx = arr.findIndex( (el) => el.id === id);
            const oldItem = arr[idx];
            const newItem = { ...oldItem, [propName]: !oldItem[propName]};

            return [ ...arr.slice(0, idx), newItem, ...arr.slice(idx + 1) ];

    }

    onToggleImportant = (id) => {
        this.setState( ({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, 'important', id)
            }
        });
    };

    onToggleDone = (id) => {
        this.setState( ({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, 'done', id)
        }
        });
    };

    render() {

        const { todoData } = this.state;

        const doneCount = todoData.filter( (el) => el.done ).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="myContainer">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="d-flex justify-content-between">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <ToDoList todos={ this.state.todoData }
                          onDeleted={ this.DeleteItem }
                          onToggleDone={ this.onToggleDone }
                          onToggleImportant={ this.onToggleImportant }
                />
                <ItemAddPanel onItemAdded={ (text) => this.addItem(text) }/>
             </div>
        )
    }
}

export default App;