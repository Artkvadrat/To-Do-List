import React, { Component } from "react";
import './ItemAddPanel.css';

class ItemAddPanel extends Component {

    state ={
        label: ''
    };

    onLabelChange = (event) => {
        this.setState({
           label: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        if ( this.state.label ) {
            this.props.onItemAdded( this.state.label );
            this.setState({
                label: ''
            });
        }
    };

    render() {
        return (
            <div>
                <form className="d-flex justify-content-between addPanelForm"
                      onSubmit={ this.onSubmit }>
                    <input type="text"
                           placeholder="Add a new item"
                           className="ItemSearch form-control"
                           onChange={ this.onLabelChange }
                           value={ this.state.label }/>
                    <button className="btn btn-outline-info" >Add Item</button>
                </form>
            </div>
        )
    }
}

export default ItemAddPanel;

