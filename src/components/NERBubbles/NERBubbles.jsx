// import React from 'react';
// import 'react-circular-progressbar/dist/styles.css';
// import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
// import './nerbubbles.css';

// const NERBubbles = ({ data }) => {
//   return (
//     <div className="ner-chart-container">
//       <h4 className="ner-chart-title">NER Summary</h4>
//       <ResponsiveContainer width="100%" height="80%">
//         <PieChart>
//           <Pie
//             data={data}
//             dataKey="value"
//             nameKey="title"
//             innerRadius={60}
//             outerRadius={90}
//             paddingAngle={3}
//             label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={entry.color} />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend verticalAlign="bottom" height={30}    className="ner-chart-legend" />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };



// export default NERBubbles;


import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import './nerbubbles.css';

const NERBubbles = ({ data }) => {
  // Check if all values are zero
  const isAllZero = data.every((item) => item.value === 0);

  return (
    <div className="ner-chart-container">
      <h4 className="ner-chart-title">NER Summary</h4>
      {isAllZero ? (
        <div className="ner-chart-no-data">
          <p>No entites detected</p>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="80%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="title"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={30} className="ner-chart-legend" />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default NERBubbles;