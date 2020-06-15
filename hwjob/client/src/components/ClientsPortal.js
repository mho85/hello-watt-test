import React from 'react';
import { Helmet } from 'react-helmet';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import SearchClient from './SearchClient';
import ClientList from './ClientList';

const ClientPortal = () => {


    // console.log("ClientPortal - Props: ", this.props)
    return (
        <div>
            <Helmet>
                <title>Clients | Hello Watt</title>
            </Helmet>
            <div className="title">
                <PeopleAltIcon />
                <h3>Client Portal</h3>
            </div>
            <SearchClient />
            <ClientList />
        </div>
    );
};


export default ClientPortal;