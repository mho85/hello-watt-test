import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClientConsumption extends Component {

    componentDidMount() {
        // const id = Number(this.props.match.params.id);
    };

    render() {
        return (
            <div>--ClientConsumption</div>
        );
    }
};

// const mapStateToProps = (state) => {

// }

// const mapDispatchToProps = {};

export default connect(null)(ClientConsumption);