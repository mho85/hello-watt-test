// MODULES
import React, { Component } from 'react';
import { connect } from 'react-redux';

// SERVICES
import ServerService from '../api/ServerService';

// STYLESHEETS
import '../styles/ClientDetails.scss';
import TextField from '@material-ui/core/TextField';
import ErrorIcon from '@material-ui/icons/Error';
import FlashOnIcon from '@material-ui/icons/FlashOn';

// REDUX
import { fetchClient } from '../actions';

/**
 * ClientDetails displays the client data: 
 * Name (editable)
 * Electrical heating (if applicable)
 * Anomaly (if applicable)
 */
class ClientDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            updated: false
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
            .then(() => this.setState({ updated: true }));
        setTimeout(() => { this.setState({ updated: false }) }, 1000)
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
                        value={this.state.updated ? "CHANGED!" : "CHANGE"}
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