import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import SearchClient from './SearchClient';
import AddClient from './AddClient';
import ClientList from './ClientList';

import { fetchClients } from '../actions';

class ClientPortal extends Component {

    componentDidMount() {
        this.props.fetchClients(undefined, 1);
    }

    render() {
        console.log("ClientPortal - Props: ", this.props)
        return (
            <div>
                <Helmet>
                    <title>Clients | Hello Watt</title>
                </Helmet>
                -ClientPortal
                <hr />
                <SearchClient />
                <hr />
                <AddClient />
                <hr />
                <ClientList />
            </div>
        );
    }
}


const mapDispatchToProps = { fetchClients };

export default connect(null, mapDispatchToProps)(ClientPortal);