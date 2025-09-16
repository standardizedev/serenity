import React, { useState } from 'react';
import type { ComponentConfig } from '../../../types';
import MultiSelect from './MultiSelect';

const InteractiveMultiSelect: React.FC<{options: string[], placeholder: string}> = ({ options, placeholder }) => {
    const [selected, setSelected] = useState<string[]>(['Equities']);
    return <MultiSelect options={options} selectedOptions={selected} onChange={setSelected} placeholder={placeholder} />;
}

export const multiSelectStories: ComponentConfig = {
  'Default': {
    component: InteractiveMultiSelect,
    args: {
      options: ['Equities', 'Fixed Income', 'Commodities', 'Real Estate', 'Crypto', 'FX'],
      placeholder: 'Filter by asset class...'
    },
    argTypes: {
      placeholder: { control: { type: 'text' } },
    },
  },
};