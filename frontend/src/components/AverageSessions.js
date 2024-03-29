import React from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import AvSessionsTooltip from './AvSessionsTooltip';
import { Container, Title } from "../styles/userAverageSessionStyle";
import CustomCursor from './CustomCursor';


/**
 * Renders the average sessions component with the given user average sessions data.
 *
 * @param {object} userAverageSessions - the user's average session data
 * @return {JSX.Element} the rendered average sessions component
 */
export default function AverageSessions({ userAverageSessions }) {
    return (
        <Container>
            <Title>Durée moyenne des sessions</Title>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    height={263} 
                    data={userAverageSessions}
                    margin={{ top: 0, right: 0, left: -5, bottom: 10 }}>
                    <CartesianGrid vertical={false} horizontal={false}  />
                    <XAxis className=''
                        type="category"
                        dataKey="day"
                        stroke="rgba(255, 255, 255, 0.7)"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 14, fontWeight: 600 }}
                        // dy={5}
                        padding={{ left:10, right: 8 }}
                    />
                    <YAxis
                        dataKey={'sessionLength'}
                        domain={['dataMin -20', 'dataMax + 30']}
                        hide />
                        
                    <Tooltip 
                        content={<AvSessionsTooltip />} 
                        cursor={<CustomCursor />} />
                    <Line
                        type="natural"
                        dataKey={'sessionLength'}
                        stroke="rgba(255, 255, 255, 0.7)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                            stroke: "white",
                            strokeWidth: 2,
                            r: 5
                        }}

                    />
                    
                </LineChart>
            </ResponsiveContainer>
        </Container>

    );
}



