import {
    CircularProgressbar,
    buildStyles
  } from 'react-circular-progressbar';
  import 'react-circular-progressbar/dist/styles.css';
  
  const ConfidenceCircle = ({ confidence }) => {
    return (
      <div style={{ width: 145, height: 145 }}>
        <CircularProgressbar
          value={confidence}
          text={`${confidence}%`}
          strokeWidth={15} 
          styles={buildStyles({
            pathColor: confidence > 70 ? '#0077b6' : confidence > 40 ? '#ff9800' : '#d32f2f',
            textColor: '#dfd6d0',
            trailColor: '#dfd6d0',
            strokeLinecap: 'round',
          })}
        />
      </div>
    );
  };

export default ConfidenceCircle;