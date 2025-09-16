import React, { useState } from 'react';
import type { ComponentConfig } from '../../../types';
import InputField from './InputField';

const InteractiveInputField: React.FC<{
    label: string, 
    initialValue?: string, 
    helperText?: string, 
    error?: string,
    type?: 'text' | 'password' | 'number',
    disabled?: boolean,
}> = (args) => {
    const [value, setValue] = useState(args.initialValue || '');
    return <InputField {...args} value={value} onChange={setValue} />;
}

export const inputFieldStories: ComponentConfig = {
  'Default': {
    component: InteractiveInputField,
    args: {
      label: 'API Key',
      initialValue: 'sk-xxxxxxxxxxxxxxxxxxxx',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      initialValue: { control: { type: 'text' } },
      helperText: { control: { type: 'text' } },
      error: { control: { type: 'text' } },
      disabled: { control: { type: 'boolean' } },
    },
  },
  'Password': {
    component: InteractiveInputField,
    args: {
      label: 'Password',
      type: 'password',
      initialValue: 'password123',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      type: { control: { type: 'select' }, options: ['text', 'password', 'number'] },
      initialValue: { control: { type: 'text' } },
      disabled: { control: { type: 'boolean' } },
    },
  },
  'With Helper Text': {
    component: InteractiveInputField,
    args: {
      label: 'Trade Amount (USD)',
      type: 'number',
      helperText: 'Enter the total amount for the trade.',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      helperText: { control: { type: 'text' } },
    },
  },
  'With Error': {
    component: InteractiveInputField,
    args: {
      label: 'Account Number',
      initialValue: '123-ABC',
      error: 'Account number must be numeric.',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      initialValue: { control: { type: 'text' } },
      error: { control: { type: 'text' } },
    },
  },
  'Disabled': {
    component: InteractiveInputField,
    args: {
      label: 'System ID',
      initialValue: 'SYS-READONLY-001',
      disabled: true,
    },
    argTypes: {
      label: { control: { type: 'text' } },
      initialValue: { control: { type: 'text' } },
      disabled: { control: { type: 'boolean' } },
    },
  },
};