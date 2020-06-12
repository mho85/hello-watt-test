import React from 'react';
import TextField from '@material-ui/core/TextField';

const SearchClient = () => {
    return (
        <div>
            <p>Look for a client</p>
            <TextField
                label="Name / ID"
                type="text"
            />
        </div>

    );
}

export default SearchClient;