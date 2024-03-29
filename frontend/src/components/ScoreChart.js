import React from "react";
import { Container, Title, Text, Score } from "../styles/scoreChartStyle";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

/**
 * Generates a score chart based on the user's score.
 *
 * @param {Object} userScore - The user's score used to generate the chart.
 * @return {JSX.Element} The JSX element representing the score chart.
 */
export default function ScoreChart({ userScore }) {
  const data = [
    {
      uv: (100 - userScore) + userScore,
      fill: "#FF0000", display: "none",
    },
    {
      uv:  userScore ,
      fill: "#FF0000",
    }
  ]
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
          barSize={10}
          data={ data }
        >
          <RadialBar
            label={{ fill: 'black', fontSize: 26, fontWeight: 600, position: 'centerBottom', dx: -13, dy: -18 }}
            //background
            clockWise
            dataKey='uv' 
            cornerRadius={10}
            />
        </RadialBarChart>
      </ResponsiveContainer>
      <Text>
        <Score>%</Score>
        <br />de votre<br /> objectif
      </Text>
    </Container>
  );
}



