import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const ToDoList = () => {
  return (
    <ul>
            <li>Learn React</li>
            <li>Drink Coffee</li>
        </ul>
    )
};

const AppHeader = () => {
    return(
        <h1>My ToDo list</h1>
    )
};

const SearchPanel = () => {
    return (
        <input placeholder="search"/>
    )
};

const App = () => {
    return (
        <div>
        <AppHeader/>
        <SearchPanel/>
        <ToDoList/>
    </div>
    )
};

const el = (
    <App/>
);

ReactDOM.render(el, document.getElementById('root'));