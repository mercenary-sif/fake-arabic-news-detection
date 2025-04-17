import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './analyticsChart.css';

function AnalyticsChart({data}) {
  return (
    <div className="analytics-chart-container">
      <h3 className="chart-title">Subjectivity and Lexical Diversity</h3>
      <BarChart width={350}  height={240} data={data} barCategoryGap="10%" barGap={8}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 1]}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="subjectivity" fill="#8884d8" barSize={70}  />
        <Bar dataKey="lexicalDiversity" fill="#82ca9d" barSize={70}  />
      </BarChart>
    </div>
  );
}

export default AnalyticsChart;
