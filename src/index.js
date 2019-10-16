import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import ToDoList from "./components/TodoList";
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const App = () => {

    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome React App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
    ];

    return (
    <div>
        <AppHeader />
        <SearchPanel />
        <ToDoList todos={ todoData } />
    </div>
    )
};

const el = (
    <App/>
);

ReactDOM.render(el, document.getElementById('root'));