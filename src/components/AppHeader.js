import React from 'react';
import './AppHeader.css';

const AppHeader = () => {
    return(
        <div className="appHeader">
            <h1 className="header">Todo List</h1>
            <p className="restInfo">1 more to do, 3 done</p>
        </div>
    )
};

export default AppHeader;