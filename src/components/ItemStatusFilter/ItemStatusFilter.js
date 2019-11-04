import React, { Component } from "react";
import './ItemStatusFilter.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class ItemStatusFilter extends Component {

    state = {
        buttonsState: [
            {text: 'All', active: true, id: 1},
            {text: 'Active', active: false, id: 2},
            {text: 'Done', active: false, id: 3}
        ]
    };

    onButtonClick = (id) =>  {
        this.setState( ({ buttonsState }) => {
            let idx = id - 1;
            let newArray = buttonsState;

            let el = newArray.findIndex( (el) => el.active === true );
            newArray[el].active = false;

            newArray[idx].active = true;
            return {
                buttonsState: newArray
            }
        });
    };

    render() {

        const { buttonsState } = this.state;
        const { onPanelClick } = this.props;
        let classActive = 'btn btn-info';
        let classPassive = 'btn btn-outline-secondary';

        let buttonClick = ( name, num ) => {
            this.onButtonClick( buttonsState[num].id );
            onPanelClick(`${name}`);
        };

        return (
            <ButtonGroup>
                <button type="button"
                        className={ buttonsState[0].active ? classActive : classPassive }
                            onClick={ ()=>(buttonClick('all', 0)) }>
                    { buttonsState[0].text }
                </button>
                <button type="button"
                        className={ buttonsState[1].active ? classActive : classPassive }
                        onClick={ ()=>(buttonClick('active', 1)) }>
                    { buttonsState[1].text }
                </button>
                <button type="button"
                        className={ buttonsState[2].active ? classActive : classPassive }
                        onClick={ ()=>(buttonClick('done', 2)) }>
                    { buttonsState[2].text }
                </button>

            </ButtonGroup>
        )
    }
}

export default ItemStatusFilter;