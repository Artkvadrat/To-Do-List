import React, { Component } from "react";
import './ItemAddPanel.css';
import Button from 'react-bootstrap/Button';

class ItemAddPanel extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between addPanelForm">
                <input placeholder="Add item" className="ItemSearch"/>
                <Button variant="outline-info" onClick={ () => this.props.onItemAdded('add') }>Add Item</Button>
            </div>
        )
    }
}

export default ItemAddPanel;

