import React, { Component } from "react";
import './ItemAddPanel.css';

class ItemAddPanel extends Component {

    state ={
        label: '',
        valid: true,
        checked: true
    };

    onLabelChange = (event) => {
        let text = event.target.value;
        this.setState( () => {
            let invalidSymbols = "*|,\":<>[]{}`';()@&$#%"; // checking for invalid symbols
            let checked = true;
            for (let i = 0; i < text.length; i++) {
                if (invalidSymbols.indexOf(text.charAt(i)) !== -1) {
                    checked = false;
                }
            }
            let valid = text.length <= 25; // checking for valid length of line

            if ( valid && checked ) {
                return{
                    label: text,
                    valid: valid
                }
            } else {
                return {
                    valid: valid,
                    checked: checked
                }
            }

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
        const { valid, checked } = this.state;
        if ( valid && checked ) {
            this.tabooClass = 'none';
            this.tabooText = '';
        } else if ( !valid ) {
            this.tabooText = 'Too many symbols. Please use less than 25 symbols.';
            this.tabooClass = 'active color';
        } else if (!checked ) {
            this.tabooClass = 'active color';
            this.tabooText = 'Incorrect symbols. Please don\'t use symbols like this: *|,\\":<>[]{}`\';()@&$#%"';
        }


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
                <p className={ this.tabooClass }> { this.tabooText } </p>
            </div>
        );
    }
}

export default ItemAddPanel;

