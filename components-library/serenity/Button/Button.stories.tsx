
import type { ComponentConfig } from '../../../types';
import Button from './Button';

export const serenityButtonStories: ComponentConfig = {
  'Primary': {
    component: Button,
    args: {
      label: 'Begin Meditation',
      variant: 'primary',
      disabled: false,
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary'] },
      disabled: { control: { type: 'boolean' } },
      onClick: { action: 'clicked' },
    },
  },
  'Secondary': {
    component: Button,
    args: {
      label: 'Save to Favorites',
      variant: 'secondary',
      disabled: false,
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary'] },
      disabled: { control: { type: 'boolean' } },
      onClick: { action: 'clicked' },
    },
  },
    'Tertiary': {
    component: Button,
    args: {
      label: 'Skip',
      variant: 'tertiary',
      disabled: false,
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary'] },
      disabled: { control: { type: 'boolean' } },
      onClick: { action: 'clicked' },
    },
  },
  'Disabled': {
    component: Button,
    args: {
      label: 'Begin Meditation',
      variant: 'primary',
      disabled: true,
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary'] },
      disabled: { control: { type: 'boolean' } },
      onClick: { action: 'clicked' },
    },
  },
};
