import React, { useState } from 'react';
import type { ComponentConfig } from '../../../types';
import RadioButton from './RadioButton';

const RadioButtonGroup: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState('market');
    const options = [
        { label: 'Market Order', value: 'market' },
        { label: 'Limit Order', value: 'limit' },
        { label: 'Stop Order', value: 'stop' },
        { label: 'Trailing Stop (disabled)', value: 'trailing', disabled: true },
    ];
    
    return (
        <div className="flex flex-col gap-3">
            {options.map(option => (
                <RadioButton
                    key={option.value}
                    name="orderType"
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
    argTypes: {},
  },
};