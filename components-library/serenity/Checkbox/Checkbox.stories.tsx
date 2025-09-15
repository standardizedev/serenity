
import React, { useState } from 'react';
import type { ComponentConfig, Story } from '../../../types';
import Checkbox from './Checkbox';

const InteractiveCheckbox: React.FC<{label: string, initialChecked: boolean, disabled?: boolean}> = ({ label, initialChecked, disabled }) => {
    const [checked, setChecked] = useState(initialChecked);
    return <Checkbox label={label} checked={checked} onChange={setChecked} disabled={disabled}/>;
}

export const checkboxStories: ComponentConfig = {
  'Unchecked': {
    component: InteractiveCheckbox,
    args: {
      label: 'Save my progress',
      initialChecked: false
    },
    // FIX: Add missing 'argTypes' property.
    argTypes: {
      label: { control: { type: 'text' } },
      initialChecked: { control: { type: 'boolean' } },
      disabled: { control: { type: 'boolean' } },
    },
  },
  'Checked': {
    component: InteractiveCheckbox,
    args: {
      label: 'Save my progress',
      initialChecked: true
    },
    // FIX: Add missing 'argTypes' property.
    argTypes: {
      label: { control: { type: 'text' } },
      initialChecked: { control: { type: 'boolean' } },
      disabled: { control: { type: 'boolean' } },
    },
  },
  'Disabled': {
    component: InteractiveCheckbox,
    args: {
      label: 'Feature disabled',
      initialChecked: false,
      disabled: true
    },
    // FIX: Add missing 'argTypes' property.
    argTypes: {
      label: { control: { type: 'text' } },
      initialChecked: { control: { type: 'boolean' } },
      disabled: { control: { type: 'boolean' } },
    },
  },
};
