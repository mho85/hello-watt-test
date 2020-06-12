import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { fetchClients } from '../actions';


class ClientList extends Component {

    componentDidMount() {
        this.props.fetchClients(undefined, 1);
    }

    componentDidUpdate(prevProps) {
        const { query } = this.props;
        if (query === "Mr." || query === "Miss" || query === "Mrs.") {
            console.log("Titles not allowed to refresh the table")
            return;
        }

        if (prevProps.query !== query) {
            this.props.fetchClients(query, 1);
        };
    }

    render() {
        console.log("ClientList:", this.props);
        if (!this.props.clients) {
            return null;
        }

        return (
            <div>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Full name</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.clients.map(c => {
                                return (
                                    <TableRow key={c.id}>
                                        <TableCell>{c.id}</TableCell>
                                        <TableCell>{c.full_name}</TableCell>
                                        <TableCell>
                                            <Link to={`/clients/${c.id}`}>
                                                <Button variant="contained" style={{ backgroundColor: "#1fa5d7", color: "white" }}>
                                                    <AccountCircleIcon />
                                                    {/* <span style={{ marginLeft: "5px" }}>Profile</span> */}
                                                </Button>
                                            </Link>

                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    const { clients, page, page_count } = state.clients;
    return {
        clients,
        page,
        page_count,
        query: state.query
    };
};

const mapDispatchToProps = { fetchClients };

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);