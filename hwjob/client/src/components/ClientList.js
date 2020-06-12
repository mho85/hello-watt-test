import React from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const ClientList = (props) => {

    if (props.clientData.length === 0) {
        return null;
    }

    const { clients } = props.clientData;
    console.log("ClientList:", clients);

    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>First Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clients.map(c => {
                            return (
                                <TableRow key={c.id}>
                                    <TableCell>{c.id}</TableCell>
                                    <TableCell>{c.full_name.split(" ")[1].toUpperCase()}</TableCell>
                                    <TableCell>{c.full_name.split(" ")[0]}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
}

const mapStateToProps = (state) => {
    return { clientData: state.clients };
};

export default connect(mapStateToProps)(ClientList);