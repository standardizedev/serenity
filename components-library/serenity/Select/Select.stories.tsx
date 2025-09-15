
import React, { useState } from 'react';
import type { ComponentConfig } from '../../../types';
import Select from './Select';

const InteractiveSelect: React.FC<{options: string[]}> = ({ options }) => {
    const [selectedValue, setSelectedValue] = useState(options[0]);
    return <Select options={options} value={selectedValue} onChange={setSelectedValue} />;
}

export const selectStories: ComponentConfig = {
  'Default': {
    component: InteractiveSelect,
    args: {
      options: ['Beginner', 'Intermediate', 'Advanced'],
    },
    // FIX: Add missing 'argTypes' property.
    argTypes: {},
  },
};
