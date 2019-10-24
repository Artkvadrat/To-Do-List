import React, { Component } from "react";
import './App.css';
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import ToDoList from "../TodoList/TodoList";
import ItemAddPanel from "../ItemAddPanel/ItemAddPanel";


class App extends Component {

    state = {
        todoData: [
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'Make Awesome React App', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 }
        ]
    };

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
            const length = todoData.length;
            const newPart = {
                label: text,
                important: false,
                id: length+1
            };
            return {
                todoData: [ ...todoData, newPart ]
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
                <ItemAddPanel onItemAdded={ (text) => this.addItem(text) }/>
             </div>
        )
    }
}

export default App;