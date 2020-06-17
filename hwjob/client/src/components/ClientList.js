// MODULES
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// STYLESHEETS
import '../styles/paginate.scss';
import '../styles/ClientList.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ReactPaginate from 'react-paginate';
import WarningIcon from '@material-ui/icons/Warning';

// REDUX
import { fetchClients, setPage } from '../actions';

/**
 * ClientList Component displays a list of clients according to the user query and the page selected
 */
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
                <div className="warning">
                    <WarningIcon />
                    <span>No clients found.</span>
                </div>
            );
        }

        return (
            <div id="client-list">
                <TableContainer component={Paper}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="left">Full name</TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.data.clients.map(c => {
                                return (
                                    <TableRow key={c.id}>
                                        <TableCell align="center">{c.id}</TableCell>
                                        <TableCell align="left">{c.full_name}</TableCell>
                                        <TableCell align="left">
                                            <Link to={`/clients/${c.id}`}>
                                                <div className="link">{'>'}</div>
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
                    pageRangeDisplayed={2}
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