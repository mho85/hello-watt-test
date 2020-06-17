// MODULES
import React, { Component } from 'react';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ReferenceLine, Label } from 'recharts';
import { computeAvg, computeMin, computeMax } from '../helpers/consumption';

// COMPONENTS
import CustomTooltip from './CustomTooltip';

// STYLESHEETS
import '../styles/ClientConsumption.scss';

// DATA
import consumptionData from '../data.json';

/**
 * ClientConsumption Component displays a graph of the client consumption during the previous year
 */
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
        const colorMain = "#1fa5d7";
        const avgColor = "purple";
        const minMaxColor = "#163e5c";
        const avg = computeAvg(data);
        const min = computeMin(data);
        const max = computeMax(data);

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
                        <Tooltip content={<CustomTooltip />} />
                        <Area type="monotone" dataKey="kwh_consumed" stroke={colorMain} fillOpacity={1} fill="url(#color)" />
                        <ReferenceLine y={avg} stroke={avgColor} strokeDasharray="10 3">
                            <Label value={`AVG: ${Math.round(avg)} KWh`} position="top" fill={avgColor} />
                        </ReferenceLine>
                        <ReferenceLine y={min} stroke={minMaxColor} strokeDasharray="10 3">
                            <Label value={`MIN: ${Math.round(min)} KWh`} position="top" fill={minMaxColor} />
                        </ReferenceLine>
                        <ReferenceLine y={max} stroke={minMaxColor} strokeDasharray="10 3">
                            <Label value={`MAX: ${Math.round(max)} KWh`} position="top" fill={minMaxColor} />
                        </ReferenceLine>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    }
};

export default ClientConsumption;