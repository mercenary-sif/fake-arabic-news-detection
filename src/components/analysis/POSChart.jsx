import './posChart.css';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList
} from 'recharts';



// Show label on every bar
const CustomLabel = ({ x, y, value }) => (
  <text x={x + 5} y={y + 15} fill="#fff" fontSize={13} textAnchor="start" fontWeight="bold">
    {value}
  </text>
);

const POSChart = ({data}) => {
  return (
    <div style={{
      background: '#e6f0ff',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      fontFamily: 'Poppins, sans-serif',
      width:`100%`
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontWeight: 600 }}>POS Distribution</h4>
       
      </div>

      <ResponsiveContainer width="100%" height={270}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
           barCategoryGap={`5%`}
        >
          <XAxis
            type="number"
            tick={{ fontWeight: 'bold', fill: '#333', fontSize: 16 }}
            axisLine={{ stroke: '#333', strokeWidth: 2.5  }}
          />
          <YAxis
            type="category"
            dataKey="metric"
            tick={{ fontWeight: 'bold', fill: '#333', fontSize: 18 }}
            axisLine={{ stroke: '#333', strokeWidth: 3.5 }}
          />
          <Tooltip formatter={(value) => `${value} words`} />
          <Bar dataKey="value" barSize={40} radius={0}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList dataKey="value" content={<CustomLabel />} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default POSChart;
