import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './analyticsChart.css';

function AnalyticsChart({ data }) {
  // Custom Tooltip Formatter
  const customTooltipFormatter = (value) => {
    return value === 2.111 ? "0" : value;
  };

  // Ensure minimum bar size for zero values
  const adjustedData = data.map((item) => ({
    ...item,
    subjectivity: item.subjectivity === 0 ? 2.111 : item.subjectivity, // Small bar for zero
    unique_words_ratio: item.unique_words_ratio === 0 ? 2.111 : item.unique_words_ratio, // Small bar for zero
  }));

  return (
    <div className="analytics-chart-container">
      <h3 className="chart-title">Subjectivity and Lexical Diversity</h3>
      <BarChart
        width={350}
        height={240}
        data={adjustedData}
        barCategoryGap="5%"
        barGap={0}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title" />
        <YAxis dataKey="value" domain={[0, 100]} />
        <Tooltip formatter={customTooltipFormatter} />
        <Legend />
        <Bar dataKey="subjectivity" fill="#8884d8" barSize={70} />
        <Bar dataKey="unique_words_ratio" fill="#82ca9d" barSize={70} />
      </BarChart>
    </div>
  );
}

export default AnalyticsChart;