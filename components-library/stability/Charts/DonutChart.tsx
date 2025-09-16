import React from 'react';

interface DonutChartProps {
  data: { name: string; value: number; color: 'interactive' | 'positive' | 'warning' }[];
  label: string;
}

const DonutChart: React.FC<DonutChartProps> = ({ data, label }) => {
  const size = 150;
  const strokeWidth = 15;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const total = data.reduce((acc, item) => acc + item.value, 0);

  const colors = {
    interactive: '#3B82F6', // interactive-default
    positive: '#22C55E',    // positive-default
    warning: '#EAB308',     // warning-default
  }

  let offset = 0;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
      {data.map((item, index) => {
        const dasharray = (item.value / total) * circumference;
        const dashoffset = offset;
        offset += dasharray;
        
        return (
          <circle
            key={index}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={colors[item.color]}
            strokeWidth={strokeWidth}
            strokeDasharray={`${dasharray} ${circumference - dasharray}`}
            strokeDashoffset={-dashoffset}
          />
        );
      })}
      <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="transform rotate-90 origin-center fill-text-primary text-xl font-semibold">
        {label}
      </text>
    </svg>
  );
};

export default DonutChart;