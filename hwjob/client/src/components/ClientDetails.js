import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchClient } from '../actions';

class ClientDetails extends Component {

    componentDidMount() {
        this.props.fetchClient(this.props.id);
    };

    render() {
        // console.log("ClientDetails, client:", this.props.client)
        const c = this.props.client;

        return (
            <div>
                <h2>Client information</h2>
                <p>Full name: {c.full_name}</p>
                <ul>
                    <li>Electric heating: {c.has_elec_heating ? "Yes" : "No"}</li>
                    <li>Any anomalies detected? {c.has_anomaly ? "Yes" : "No"}</li>
                </ul>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { client: state.client };
}

const mapDispatchToProps = { fetchClient };

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetails);