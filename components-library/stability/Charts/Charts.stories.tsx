import type { ComponentConfig } from '../../../types';
import LineChart from './LineChart';
import DonutChart from './DonutChart';
import BarChart from './BarChart';
import React from 'react';

const lineChartData = [120, 150, 140, 180, 210, 190, 240, 230, 260, 280, 295, 305];
const donutChartData = [
    { name: 'Equities', value: 45, color: 'interactive' as const },
    { name: 'Bonds', value: 30, color: 'positive' as const },
    { name: 'Cash', value: 25, color: 'warning' as const },
];
const barChartData = [
    { name: 'Jan', value: 65 },
    { name: 'Feb', value: 59 },
    { name: 'Mar', value: 80 },
    { name: 'Apr', value: 81 },
    { name: 'May', value: 56 },
    { name: 'Jun', value: 55 },
];


export const chartStories: ComponentConfig = {
  'Line Chart': {
    component: LineChart,
    args: {
      data: lineChartData,
    },
    argTypes: {},
  },
  'Donut Chart': {
    component: DonutChart,
    args: {
        data: donutChartData,
        label: '$1.2M',
    },
    argTypes: {
        label: { control: { type: 'text' } },
    },
  },
  'Bar Chart': {
    component: BarChart,
    args: {
        data: barChartData,
    },
    argTypes: {},
  },
};