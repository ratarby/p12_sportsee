import React from 'react'
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer
} from 'recharts';
import { Container } from '../styles/performanceStyle';

export default function Performance({ userPerformance }) {
    return (
        <Container>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="48%"
                    cy="50%"
                    outerRadius="65%"
                    width={258}
                    height={263}
                    data={userPerformance}
                >
                    <PolarGrid gridType='polygon' />
                    <PolarAngleAxis 
                    dataKey="kind" 
                    stroke='white' 
                    tickLine={false}  
                    axisLine={false} 
                    tick={{ fontSize: 10,  }} />
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