
import React, { useState } from 'react';
import type { ComponentConfig } from '../../../types';
import RadioButton from './RadioButton';

const RadioButtonGroup: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState('email');
    const options = [
        { label: 'Email', value: 'email' },
        { label: 'Phone', value: 'phone' },
        { label: 'Mail', value: 'mail', disabled: true },
    ];
    
    return (
        <div className="flex flex-col gap-3">
            {options.map(option => (
                <RadioButton
                    key={option.value}
                    name="contact"
                    label={option.label}
                    value={option.value}
                    checked={selectedValue === option.value}
                    onChange={setSelectedValue}
                    disabled={option.disabled}
                />
            ))}
        </div>
    );
};

export const radioButtonStories: ComponentConfig = {
  'Radio Group': {
    component: RadioButtonGroup,
    args: {},
    // FIX: Add missing 'argTypes' property.
    argTypes: {},
  },
};
