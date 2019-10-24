import React, { Component } from "react";
import './ItemStatusFilter.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class ItemStatusFilter extends Component {

    state ={
      one: false,
      two: false,
      three: true
    };



    render() {

        let classNameOne = 'btn';
        let classNameTwo = 'btn';
        let classNameThree = 'btn';

        if( this.state.one ) {
            classNameOne += ' btn-info';
            classNameTwo += ' btn-outline-secondary';
            classNameThree +=  ' btn-outline-secondary';
        }

        if( this.state.two ) {
            classNameOne += ' btn-outline-secondary';
            classNameTwo += ' btn-info';
            classNameThree +=  ' btn-outline-secondary';
        }

        if( this.state.three ) {
            classNameOne += ' btn-outline-secondary';
            classNameTwo += ' btn-outline-secondary';
            classNameThree +=  ' btn-info';
        }

        return (
            <ButtonGroup>
            <button type="button"
                    className={ classNameOne }>All</button>
            <button type="button"
                    className={ classNameTwo }>Active</button>
            <button type="button"
                    className={ classNameThree }>Done</button>
        </ButtonGroup>
        )
    }
}

export default ItemStatusFilter;