import React from 'react';

interface BarChartProps {
    data: { name: string, value: number }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
    const width = 500;
    const height = 200;
    const padding = 20;
    const barPadding = 10;
    const maxVal = Math.max(...data.map(d => d.value), 0);
    const barWidth = (width - 2 * padding) / data.length - barPadding;

    return (
        <svg viewBox={`0 0 ${width} ${height + 30}`} className="w-full h-auto">
            {data.map((item, index) => {
                const barHeight = maxVal > 0 ? (item.value / maxVal) * (height - 2 * padding) : 0;
                const x = padding + index * (barWidth + barPadding);
                const y = height - padding - barHeight;
                return (
                    <g key={item.name}>
                        <rect 
                            x={x} 
                            y={y} 
                            width={barWidth} 
                            height={barHeight} 
                            fill="#3B82F6" 
                        />
                        <text 
                            x={x + barWidth / 2} 
                            y={height - padding + 15}
                            textAnchor="middle"
                            className="fill-text-secondary text-xs"
                        >
                            {item.name}
                        </text>
                    </g>
                );
            })}
        </svg>
    );
};

export default BarChart;