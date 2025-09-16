import type { ComponentConfig } from '../../../types';
import Badge from './Badge';

export const badgeStories: ComponentConfig = {
  'Positive': {
    component: Badge,
    args: {
      label: 'Active',
      variant: 'positive',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['positive', 'negative', 'warning', 'interactive'] },
    },
  },
  'Negative': {
    component: Badge,
    args: {
      label: 'Inactive',
      variant: 'negative',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['positive', 'negative', 'warning', 'interactive'] },
    },
  },
  'Warning': {
    component: Badge,
    args: {
      label: 'Pending',
      variant: 'warning',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['positive', 'negative', 'warning', 'interactive'] },
    },
  },
  'Interactive': {
    component: Badge,
    args: {
      label: 'Processing',
      variant: 'interactive',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['positive', 'negative', 'warning', 'interactive'] },
    },
  },
};