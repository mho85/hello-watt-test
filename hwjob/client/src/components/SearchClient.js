import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import { setQuery } from '../actions';

const SearchClient = (props) => {
    // console.log("SearchClient.js", props)
    return (
        <div>
            <p>Look for a client</p>
            <TextField
                label="Name / ID"
                type="text"
                onChange={(event) => props.setQuery(event.target.value)}
            />
        </div>

    );
}

const mapDispatchToProps = { setQuery };

export default connect(null, mapDispatchToProps)(SearchClient);