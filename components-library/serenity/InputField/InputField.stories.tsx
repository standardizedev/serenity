
import React, { useState } from 'react';
import type { ComponentConfig } from '../../../types';
import InputField from './InputField';

const InteractiveInputField: React.FC<{
    label: string, 
    initialValue?: string, 
    helperText?: string, 
    error?: string 
}> = ({ label, initialValue = '', helperText, error }) => {
    const [value, setValue] = useState(initialValue);
    return <InputField label={label} value={value} onChange={setValue} helperText={helperText} error={error} />;
}

export const inputFieldStories: ComponentConfig = {
  'Default': {
    component: InteractiveInputField,
    args: {
      label: 'Your Name',
    },
    // FIX: Add missing 'argTypes' property.
    argTypes: {
      label: { control: { type: 'text' } },
      initialValue: { control: { type: 'text' } },
      helperText: { control: { type: 'text' } },
      error: { control: { type: 'text' } },
    },
  },
  'With Helper Text': {
    component: InteractiveInputField,
    args: {
      label: 'Password',
      helperText: 'Must be at least 8 characters long.',
    },
    // FIX: Add missing 'argTypes' property.
    argTypes: {
      label: { control: { type: 'text' } },
      initialValue: { control: { type: 'text' } },
      helperText: { control: { type: 'text' } },
      error: { control: { type: 'text' } },
    },
  },
  'With Error': {
    component: InteractiveInputField,
    args: {
      label: 'Email Address',
      initialValue: 'invalid-email',
      error: 'Please enter a valid email address.',
    },
    // FIX: Add missing 'argTypes' property.
    argTypes: {
      label: { control: { type: 'text' } },
      initialValue: { control: { type: 'text' } },
      helperText: { control: { type: 'text' } },
      error: { control: { type: 'text' } },
    },
  },
};
