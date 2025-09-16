import type { ComponentConfig } from '../../../types';
import Card from './Card';

export const cardStories: ComponentConfig = {
  'Default': {
    component: Card,
    args: {
      children: <p className="text-text-secondary">This is the content area of the card.</p>,
    },
    argTypes: {},
  },
  'With Title': {
    component: Card,
    args: {
      title: 'Market Overview',
      children: <p className="text-text-secondary">This card has a title, which is useful for modular dashboards.</p>,
    },
    argTypes: {
      title: { control: { type: 'text' } },
    },
  },
};