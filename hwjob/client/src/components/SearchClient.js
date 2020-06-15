import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import '../styles/SearchClient.css';

import { setQuery } from '../actions';


const SearchClient = (props) => {
    // console.log("SearchClient.js", props)

    return (
        <div id="SearchClient">
            <TextField
                label="Enter name or ID"
                type="text"
                onChange={(event) => props.setQuery(event.target.value)}
            />
        </div>

    );
}

const mapDispatchToProps = { setQuery };

export default connect(null, mapDispatchToProps)(SearchClient);