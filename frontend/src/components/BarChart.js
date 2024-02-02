import React from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip 
    
} from "recharts";


export default function BarCharts({ data }) {

    return (
        <BarChart data={data} width={730} height={250} >
            <CartesianGrid vertical={false} strokeDasharray="1 1" />
            <XAxis 
                dataKey="day" 
                tickLine={false} 
                tick={{ fontSize: 14 }}
                dy={15}
                />
            <YAxis 
                dataKey="kilogram"
                type='number'
                tickLine={false}
                tick={{ fontSize: 14 }}
                axisLine={false}
                tickCount={4}
                orientation='right'
                />
            <YAxis 
                yAxisId="calories" 
                dataKey="calories" 
                type="number" 
                tickLine={false} 
                tick={{ fontSize: 14 }} 
                orientation="right" 
                hide/>  
            <Tooltip />
            <Bar  dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
            <Bar  yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />        
        </BarChart>
    )
}
