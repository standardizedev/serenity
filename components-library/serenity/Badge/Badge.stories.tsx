
import type { ComponentConfig } from '../../../types';
import Badge from './Badge';

export const badgeStories: ComponentConfig = {
  'Default (Clay)': {
    component: Badge,
    args: {
      label: 'Anxiety',
      color: 'clay',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      color: { control: { type: 'select' }, options: ['moss', 'sky', 'clay'] },
    },
  },
  'Moss': {
    component: Badge,
    args: {
      label: 'New',
      color: 'moss',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      color: { control: { type: 'select' }, options: ['moss', 'sky', 'clay'] },
    },
  },
  'Sky': {
    component: Badge,
    args: {
      label: 'Sleep',
      color: 'sky',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      color: { control: { type: 'select' }, options: ['moss', 'sky', 'clay'] },
    },
  },
};
