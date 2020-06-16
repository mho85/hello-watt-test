import React, { Component } from 'react';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';
import '../styles/ClientConsumption.css';

import consumptionData from '../data.json';

class ClientConsumption extends Component {

    filterData(id, year) {
        return consumptionData.filter(
            el => el.client_id === id &&
                el.year === year
        );
    }

    render() {
        const lastYear = new Date().getFullYear() - 1;
        const data = this.filterData(this.props.id, lastYear)
        // console.log(data)

        const colorMain = "#1fa5d7";

        return (
            <div id="client-consumption">
                <h4>{lastYear} CONSUMPTION (KWh)</h4>
                <ResponsiveContainer width="95%" height={350}>
                    <AreaChart width={730} height={250} data={data}
                        margin={{ top: 10, right: 7, left: 7, bottom: 0 }}>
                        <defs>
                            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={colorMain} stopOpacity={0.8} />
                                <stop offset="95%" stopColor={colorMain} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis stroke={colorMain} />
                        <CartesianGrid strokeDasharray="5 5" />
                        <Tooltip />
                        <Area type="monotone" dataKey="kwh_consumed" stroke={colorMain} fillOpacity={1} fill="url(#color)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    }
};

export default ClientConsumption;