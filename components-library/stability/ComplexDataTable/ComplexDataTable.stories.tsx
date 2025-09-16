import type { ComponentConfig } from '../../../types';
import ComplexDataTable from './ComplexDataTable';
import Badge from '../Badge/Badge';
import React from 'react';

const columns = [
  { key: 'ticker', label: 'Ticker', sortable: true },
  { key: 'price', label: 'Price', sortable: true },
  { key: 'change', label: 'Change', sortable: true },
  { key: 'volume', label: 'Volume', sortable: true },
  { key: 'status', label: 'Status' },
];

const rawData = [
  { ticker: 'AAPL', price: 172.25, change: -1.45, volume: '52.3M', status: 'Active' },
  { ticker: 'GOOGL', price: 140.80, change: 0.75, volume: '25.1M', status: 'Active' },
  { ticker: 'MSFT', price: 370.95, change: 2.15, volume: '30.8M', status: 'Active' },
  { ticker: 'AMZN', price: 145.18, change: -0.62, volume: '45.9M', status: 'Active' },
  { ticker: 'TSLA', price: 245.01, change: 5.50, volume: '110.2M', status: 'Active' },
  { ticker: 'NVDA', price: 492.22, change: -3.78, volume: '60.5M', status: 'Active' },
  { ticker: 'META', price: 335.90, change: 1.20, volume: '28.7M', status: 'Active' },
  { ticker: 'JPM', price: 155.45, change: 0.95, volume: '15.6M', status: 'Pending' },
  { ticker: 'V', price: 250.78, change: -0.25, volume: '8.9M', status: 'Inactive' },
  { ticker: 'PG', price: 158.30, change: 0.15, volume: '7.2M', status: 'Active' },
  { ticker: 'JNJ', price: 162.50, change: -0.80, volume: '9.4M', status: 'Active' },
  { ticker: 'WMT', price: 165.75, change: 0.55, volume: '12.1M', status: 'Active' },
];

const dataWithComponents = rawData.map(item => ({
    ...item,
    price: `$${item.price.toFixed(2)}`,
    change: <span className={item.change > 0 ? 'text-positive-default' : 'text-negative-default'}>{item.change.toFixed(2)}</span>,
    status: <Badge 
        label={item.status} 
        variant={item.status === 'Active' ? 'positive' : item.status === 'Pending' ? 'warning' : 'negative'} 
    />
}));


export const complexDataTableStories: ComponentConfig = {
  'Default': {
    component: ComplexDataTable,
    args: {
      columns: columns,
      data: dataWithComponents,
      itemsPerPage: 5,
    },
    argTypes: {
      itemsPerPage: { control: { type: 'text' } }
    },
  },
};