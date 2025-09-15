
import type { ComponentConfig } from '../../../types';
import Card from './Card';

export const cardStories: ComponentConfig = {
  'Default': {
    component: Card,
    args: {
      imageUrl: 'https://images.unsplash.com/photo-1502485019203-a7251434b6b6?q=80&w=800',
      title: 'Morning Gratitude',
      duration: '10 min',
      category: 'Mindfulness',
    },
    argTypes: {
      imageUrl: { control: { type: 'text' } },
      title: { control: { type: 'text' } },
      duration: { control: { type: 'text' } },
      category: { control: { type: 'text' } },
    },
  },
};
