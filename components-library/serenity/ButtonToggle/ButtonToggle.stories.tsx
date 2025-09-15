
import React, { useState } from 'react';
import type { ComponentConfig } from '../../../types';
import ButtonToggle from './ButtonToggle';

const InteractiveButtonToggle: React.FC<{options: string[]}> = ({ options }) => {
    const [selectedValue, setSelectedValue] = useState(options[0]);
    return <ButtonToggle options={options} value={selectedValue} onChange={setSelectedValue} />;
}

export const buttonToggleStories: ComponentConfig = {
  'Default': {
    component: InteractiveButtonToggle,
    args: {
      options: ['10 min', '15 min', '20 min'],
    },
    // FIX: Add missing 'argTypes' property.
    argTypes: {},
  },
};
