import React, { useState } from 'react';
import type { ComponentConfig } from '../../../types';
import Checkbox from './Checkbox';

const InteractiveCheckbox: React.FC<{label: string, initialChecked: boolean, disabled?: boolean}> = ({ label, initialChecked, disabled }) => {
    const [checked, setChecked] = useState(initialChecked);
    return <Checkbox label={label} checked={checked} onChange={setChecked} disabled={disabled}/>;
}

export const checkboxStories: ComponentConfig = {
  'Default': {
    component: InteractiveCheckbox,
    args: {
      label: 'Enable GTC Orders',
      initialChecked: false
    },
    argTypes: {
      label: { control: { type: 'text' } },
      initialChecked: { control: { type: 'boolean' } },
      disabled: { control: { type: 'boolean' } },
    },
  },
  'Checked': {
    component: InteractiveCheckbox,
    args: {
      label: 'Enable GTC Orders',
      initialChecked: true
    },
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
    argTypes: {
      label: { control: { type: 'text' } },
      initialChecked: { control: { type: 'boolean' } },
      disabled: { control: { type: 'boolean' } },
    },
  },
};