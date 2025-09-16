import React from 'react';
import type { ComponentConfig } from '../../../types';
import ExpansionPanel from './ExpansionPanel';
import Button from '../Button/Button';

export const expansionPanelStories: ComponentConfig = {
  'Default': {
    component: ExpansionPanel,
    args: {
      title: 'Risk Disclosure',
      children: (
        <p>
          Trading financial instruments involves significant risk and can result in the loss of your invested capital. You should not invest more than you can afford to lose.
        </p>
      ),
    },
    argTypes: {
      title: { control: { type: 'text' } },
    },
  },
   'With Complex Content': {
    component: ExpansionPanel,
    args: {
      title: 'Advanced Settings',
      children: (
        <div className="space-y-4">
            <p>Configure advanced parameters for this trading algorithm. Changes will apply to the next execution cycle.</p>
            <Button label="Reset to Defaults" variant="secondary" />
        </div>
      ),
    },
    argTypes: {
      title: { control: { type: 'text' } },
    },
  },
};