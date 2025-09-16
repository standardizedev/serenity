import React from 'react';

interface LineChartProps {
  data: number[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const width = 500;
  const height = 200;
  const padding = 20;

  const maxVal = Math.max(...data, 0);
  
  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * (width - 2 * padding) + padding;
      const y = height - (d / maxVal) * (height - 2 * padding) - padding;
      return `${x},${y}`;
    })
    .join(' ');
  
  const areaPoints = `${points} ${width - padding},${height-padding} ${padding},${height-padding}`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
       <defs>
        <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.3}/>
            <stop offset="100%" stopColor="#3B82F6" stopOpacity={0}/>
        </linearGradient>
      </defs>
      {[...Array(5)].map((_, i) => (
         <line key={i} x1={padding} y1={(i * (height - 2 * padding) / 4) + padding} x2={width-padding} y2={(i * (height - 2 * padding) / 4) + padding} className="stroke-border" strokeWidth="1" />
      ))}
      <polyline
        fill="url(#areaGradient)"
        points={areaPoints}
      />
      <polyline
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2"
        points={points}
      />
    </svg>
  );
};

export default LineChart;