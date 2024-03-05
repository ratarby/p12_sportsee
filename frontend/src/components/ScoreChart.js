import React from "react";
import { Container, Title, Text, Score } from "../styles/scoreChartStyle";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types';

export default function ScoreChart({ userScore }) {
  return (
    <Container>
      <Title>Score</Title>
      <ResponsiveContainer width='100%' height='100%'>
        <RadialBarChart
          width={258}
          height={263}
          cx="50%"
          cy="55.6%"
          
          innerRadius={15}
          outerRadius={150}
          startAngle={90}
          endAngle={450}
          barSize={15}
          data={ userScore }
        >
          <RadialBar
            minAngle={15}
            label={{fill: 'black', fontSize: 26 , fontWeight: 600, position: 'centerBottom', dx: -13, dy: -18 }}
            // background={{ fill: '#fbfbfb' }}
            // background={{  fill: 'white' }}
            clockWise
            dataKey="value"            
            cornerRadius={10}
            fill="#FF0000"
          />
          
        </RadialBarChart>
      </ResponsiveContainer>
        <Text> 
          <Score>%</Score> 
        <br/>de votre<br/> objectif 
        </Text>
    </Container>
  );
}

ScoreChart.propTypes = {
  userScore: PropTypes.array
}

