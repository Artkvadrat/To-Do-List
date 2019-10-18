import React from "react";
import './ItemStatusFilter.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ItemStatusFilter = () => {
    return (
        <ButtonGroup>
            <button type="button"
                    className="btn btn-info">All</button>
            <button type="button"
                    className="btn btn-outline-secondary">Active</button>
            <button type="button"
                    className="btn btn-outline-secondary">Done</button>
        </ButtonGroup>
    )
};

export default ItemStatusFilter;