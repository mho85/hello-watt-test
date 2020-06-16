// MODULES
import React, { Component } from 'react';

// STYLESHEETS
import '../styles/CustomTooltip.css';

// CONSTANTS, VARIABLES
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

class CustomTooltip extends Component {

    render() {
        const { active } = this.props;

        if (active) {
            const { payload, label } = this.props;
            return (
                <div className="custom-tooltip">
                    <p>{`${months[label - 1]} ${new Date().getFullYear() - 1}: `}<span className="value">{Math.round(payload[0].value)}</span> KWh</p>
                </div>
            );
        }

        return null;
    }
}

export default CustomTooltip;
