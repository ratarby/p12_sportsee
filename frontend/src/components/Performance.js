import React from 'react'
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer
} from 'recharts';
import { Container } from '../styles/performanceStyle';

/**
 * Renders a performance chart using the provided user performance data.
 *
 * @param {Object} props - The props object containing the user performance data.
 * @param {Array} props.userPerformance - An array of objects representing the user's performance data.
 * @param {string} props.userPerformance[].kind - The kind of performance data.
 * @param {number} props.userPerformance[].value - The value of the performance data.
 * @return {JSX.Element} The rendered performance chart component.
 */
export default function Performance({ userPerformance }) {
    return (
        <Container>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="75%"
                    width={258}
                    height={263}
                    data={userPerformance}
                >
                    <PolarGrid 
                        gridType='polygon' 
                        />
                    <PolarAngleAxis 
                        dataKey="kind" 
                        stroke='white' 
                        tickLine={false}  
                        axisLine={false} 
                        tick={{ fontSize: 10 , dy:3, dx:-0.1, fontWeight: 500 }} 
                        />
                    <Radar
                        dataKey="value"
                        stroke='#FF0101'
                        fill='#FF0101'
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </Container>
    );
}

