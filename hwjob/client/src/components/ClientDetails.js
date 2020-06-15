import React, { Component } from 'react';
import { connect } from 'react-redux';
import ServerService from '../api/ServerService';
import '../styles/ClientDetails.css';

import TextField from '@material-ui/core/TextField';
import ErrorIcon from '@material-ui/icons/Error';
import FlashOnIcon from '@material-ui/icons/FlashOn';

import { fetchClient } from '../actions';

class ClientDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    handleChange = (event) => {
        // console.log(event.target.value);
        this.setState({ name: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('full_name', this.state.name);
        ServerService.post(`/client/${this.props.id}`, data)
            .then(() => console.log("Username updated successfully."))
    }

    componentDidMount() {
        this.props.fetchClient(this.props.id);
    };

    componentDidUpdate(prevProps) {
        if (prevProps.client.full_name !== this.props.client.full_name) {
            this.setState({ name: this.props.client.full_name });
        }
    }

    render() {
        // console.log("ClientDetails, client:", this.props.client)
        const c = this.props.client;

        return (
            <div id="client-details">
                <h4>CLIENT</h4>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        label="Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="submit"
                        value="CHANGE"
                    />
                </form>
                <ul>
                    {c.has_elec_heating ?
                        <li>
                            <div id="elec-heating">
                                <FlashOnIcon />
                                Electrical heating
                            </div>
                        </li>
                        : null}
                    {c.has_anomaly ?
                        <li>
                            <div className="error">
                                <ErrorIcon />
                            Anomaly detected
                            </div>
                        </li> :
                        null
                    }
                    {/* <li>Any anomalies detected? {c.has_anomaly ? "Yes" : "No"}</li> */}
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