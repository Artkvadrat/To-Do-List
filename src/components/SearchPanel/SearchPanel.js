import React, {Component} from 'react';
import './SearchPanel.css';

class SearchPanel extends Component {

    render() {

        const { searchItem } = this.props;

        return (
            <input placeholder="type to search" className="searchLine" onChange={ searchItem }/>
        )
    }
}

export default SearchPanel;