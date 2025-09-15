
import React, { useState } from 'react';
import type { ComponentConfig } from '../../../types';
import MultiSelect from './MultiSelect';

const InteractiveMultiSelect: React.FC<{options: string[], placeholder: string}> = ({ options, placeholder }) => {
    const [selected, setSelected] = useState<string[]>([]);
    return <MultiSelect options={options} selectedOptions={selected} onChange={setSelected} placeholder={placeholder} />;
}

export const multiSelectStories: ComponentConfig = {
  'Default': {
    component: InteractiveMultiSelect,
    args: {
      options: ['Focus', 'Anxiety', 'Sleep', 'Gratitude', 'Beginner', 'Advanced'],
      placeholder: 'Select categories...'
    },
    // FIX: Add missing 'argTypes' property.
    argTypes: {
      placeholder: { control: { type: 'text' } },
    },
  },
};
