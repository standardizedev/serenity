import type { ComponentConfig } from '../../../types';
import Button from './Button';

export const buttonStories: ComponentConfig = {
  'Primary': {
    component: Button,
    args: {
      label: 'Execute Trade',
      variant: 'primary',
      disabled: false,
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary', 'destructive'] },
      disabled: { control: { type: 'boolean' } },
      onClick: { action: 'clicked' },
    },
  },
  'Secondary': {
    component: Button,
    args: {
      label: 'Export Data',
      variant: 'secondary',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary', 'destructive'] },
      disabled: { control: { type: 'boolean' } },
      onClick: { action: 'clicked' },
    },
  },
    'Tertiary': {
    component: Button,
    args: {
      label: 'Cancel',
      variant: 'tertiary',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary', 'destructive'] },
      disabled: { control: { type: 'boolean' } },
      onClick: { action: 'clicked' },
    },
  },
  'Destructive': {
    component: Button,
    args: {
      label: 'Delete Portfolio',
      variant: 'destructive',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary', 'destructive'] },
      disabled: { control: { type: 'boolean' } },
      onClick: { action: 'clicked' },
    },
  },
  'Disabled': {
    component: Button,
    args: {
      label: 'Execute Trade',
      variant: 'primary',
      disabled: true,
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary', 'destructive'] },
      disabled: { control: { type: 'boolean' } },
      onClick: { action: 'clicked' },
    },
  },
};