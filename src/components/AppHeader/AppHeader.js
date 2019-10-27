import React, {Component} from 'react';
import './AppHeader.css';

class AppHeader extends Component {

    render() {
        const { toDo, done } = this.props;
        return(
            <div className="appHeader">
            <h1 className="header">Todo List</h1>
            <p className="restInfo">{ toDo } more to do, {done} done</p>
        </div>
        )
    }
}

export default AppHeader;