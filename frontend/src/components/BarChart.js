import React from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer

} from "recharts";
import { Wrapper, Head, Title, Text, Icon, Legend, Info } from "../styles/barChartStyle";
import ActivityTooltip from './ActivityTooltip';
import { PropTypes } from 'prop-types';



export default function BarCharts({ userActivity }) {
    return (
        <Wrapper>
            <Head>
                <Title>Activité quotidienne</Title>
                <Legend>
                    <Info>
                        <Icon color='#282D30' />
                        <Text>Poids (kg)</Text>
                    </Info>
                    <Info>
                        <Icon color='#E60000' />
                        <Text>Calories brûlées (kCal)</Text>
                    </Info>
                </Legend>
            </Head>
            <ResponsiveContainer width="100%" height={198} >
                <BarChart 
                    data={userActivity} 
                    barGap={8} 
                    barCategoryGap={1}
                    margin={{ top: 0, right: 0, left: 0, bottom: 35 }} 
                    >
                        
                    <CartesianGrid vertical={false} strokeDasharray="1 1" />
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            tick={{ fontSize: 14 }}
                            dy={10}
                            stroke="1 1"
                        />
                        <YAxis
                            yAxisId="kilogram"
                            dataKey="kilogram"
                            type='number'
                            tickLine={false}
                            tick={{ fontSize: 14 }}
                            axisLine={false}
                            tickCount={4}
                            domain={['dataMin -1', 'dataMax + 1']}
                            orientation='right'
                        />
                        <YAxis
                            yAxisId="calories"
                            dataKey="calories"
                            type="number"
                            tickLine={false}
                            tick={{ fontSize: 14 }}
                            hide
                        />
                    <Tooltip content={<ActivityTooltip />} />
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </Wrapper>
    )
}

BarCharts.propTypes = {
    userActivity: PropTypes.array
}

