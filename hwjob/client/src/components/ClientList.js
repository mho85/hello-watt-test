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
import ReactPaginate from 'react-paginate';
import { Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WarningIcon from '@material-ui/icons/Warning';

import { fetchClients, setPage } from '../actions';


class ClientList extends Component {

    handlePageChange = (page) => {
        console.log(`Active page is ${page}`);
        this.props.setPage(page);
    }

    componentDidMount() {
        this.props.fetchClients(undefined, 1);
    }

    componentDidUpdate(prevProps) {
        const { query, page } = this.props;
        // console.log(prevProps.page, page);

        if (prevProps.query !== query) {
            this.props.fetchClients(query, 1);
        };

        if (prevProps.page !== page) {
            this.props.fetchClients(query, page);
        };
    }

    handlePageClick = (data) => {
        this.props.setPage(data.selected + 1);
    };

    render() {
        // console.log("ClientList, props:", this.props);
        if (!this.props.data.clients) {
            return null;
        }

        if (this.props.data.clients.length === 0) {
            return (
                <div class="warning">
                    <WarningIcon />
                    <span>No clients found.</span>
                </div>
            );
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
                            {this.props.data.clients.map(c => {
                                return (
                                    <TableRow key={c.id}>
                                        <TableCell>{c.id}</TableCell>
                                        <TableCell>{c.full_name}</TableCell>
                                        <TableCell>
                                            <Link to={`/clients/${c.id}`}>
                                                <Button variant="contained" style={{ backgroundColor: "#1fa5d7", color: "white" }}>
                                                    <AccountCircleIcon />
                                                </Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.props.data.page_count}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log("ClientList, state", state);
    return {
        data: state.clients,
        query: state.query,
        page: state.page
    };
};

const mapDispatchToProps = { fetchClients, setPage };

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);