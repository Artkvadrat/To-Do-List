import React from "react";
import './App.css';
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import ToDoList from "../TodoList/TodoList";

const App = () => {

    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome React App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
    ];

    return (
        <div className="myContainer">
        <AppHeader />
        <div className="d-flex justify-content-between">
            <SearchPanel />
            <ItemStatusFilter />
        </div>
        <ToDoList todos={ todoData } />
    </div>
    )
};

export default App;