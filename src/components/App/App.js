import React, { Component } from "react";
import './App.css';
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import ToDoList from "../TodoList/TodoList";


class App extends Component {

    state = {
        todoData: [
            { label: 'Drink Coffee', id: 1 },
            { label: 'Make Awesome React App', id: 2 },
            { label: 'Have a lunch', id: 3 }
        ]
    };

    DeleteItem = (id) => {
        this.setState(( { todoData }) => {
            const idx = todoData.findIndex( (el) => el.id === id);

            return {
                todoData: [ ...todoData.slice(0, idx), ...todoData.slice(idx + 1) ]
            }
        })
    };

    render() {
        return (
            <div className="myContainer">
        <AppHeader />
        <div className="d-flex justify-content-between">
            <SearchPanel />
            <ItemStatusFilter />
        </div>
        <ToDoList todos={ this.state.todoData }
                  onDeleted={ (id) => { this.DeleteItem(id) }}/>
    </div>
        )
    }
}

export default App;