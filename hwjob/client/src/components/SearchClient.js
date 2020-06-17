// MODULES
import React from 'react';
import { connect } from 'react-redux';

// STYLESHEETS
import TextField from '@material-ui/core/TextField';
import '../styles/SearchClient.scss';

// REDUX
import { setQuery } from '../actions';

/**
 * SearchClient Component displays an input for user queries.
 * @param {*} props 
 */
const SearchClient = (props) => {
    // console.log("SearchClient.js", props)

    return (
        <div id="search-client">
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