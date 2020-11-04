import React, { PureComponent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import { useDispatch } from 'react-redux';
import { chosenPoint, updateHidden } from '../redux/actions';

import { useSelector } from 'react-redux';

import SimpleMenu from './menu';

const data = [
    {
        name: 'Ven-16 sept 2020',
        ppm: 10,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Ven-17 sept 2020',
        ppm: 3,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Ven-18 sept 2020',
        ppm: 11,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Ven-19 sept 2020',
        ppm: 2,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Ven-20 sept 2020',
        ppm: 9,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Ven-21 sept 2020',
        ppm: 4,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Ven-22 sept 2020',
        ppm: 10,
        pv: 4300,
        amt: 2100,
    },
];

const Chart = () => {
    const dispatch = useDispatch();
    const hidden = useSelector((state) => state.hidden);
    const color = useSelector((state) => state.color);


    return (
        !hidden && (
            <div style={{ backgroundColor: 'white', marginTop: '30px' }}>
                 <SimpleMenu/>
                <ResponsiveContainer width="95%" height={700} >
                    <LineChart
                        layout="vertical"
                        data={data}
                        margin={{
                            top: 50,
                            right: 30,
                            left: 50,
                            bottom: 15,
                        }}
                        onClick={(e) => {
                            dispatch(updateHidden(false));
                            if (e != undefined) {
                                dispatch(
                                    chosenPoint(data[e.activeTooltipIndex])
                                );
                            }
                        }}
                    >
                        <CartesianGrid strokeDasharray="11 11" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="ppm" stroke={color} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    );
};

export default Chart;
