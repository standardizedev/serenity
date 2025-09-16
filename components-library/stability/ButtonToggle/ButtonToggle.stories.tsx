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
      options: ['Live Data', 'Test Data'],
    },
    argTypes: {
        // This story's props are not meant to be controlled directly
    },
  },
};