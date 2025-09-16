import React, { useState } from 'react';
import type { ComponentConfig } from '../../../types';
import Select from './Select';

const InteractiveSelect: React.FC<{options: string[], label?: string}> = ({ options, label }) => {
    const [selectedValue, setSelectedValue] = useState(options[0]);
    return <Select options={options} value={selectedValue} onChange={setSelectedValue} label={label}/>;
}

export const selectStories: ComponentConfig = {
  'Default': {
    component: InteractiveSelect,
    args: {
      options: ['1D', '5D', '1M', '6M', 'YTD', '1Y', '5Y', 'MAX'],
    },
    argTypes: {},
  },
  'With Label': {
    component: InteractiveSelect,
    args: {
      options: ['1D', '5D', '1M', '6M', 'YTD', '1Y', '5Y', 'MAX'],
      label: "Time Range"
    },
    argTypes: {
      label: { control: { type: 'text' } }
    },
  },
};