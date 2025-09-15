
import type { ComponentConfig } from '../../../types';
import Card from './Card';

export const cardStories: ComponentConfig = {
  'Default': {
    component: Card,
    args: {
      imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgNSkiPjxwYXRoIGQ9Ik0yNSw4MCBDMjAsNjUgODAsNjUgNzUsODAgUTUwLDkwIDI1LDgwIFoiIGZpbGw9IiM2Yzc1N2QiLz48cGF0aCBkPSJNMzUsNTAgQzM1LDQwIDY1LDQwIDY1LDUwIEw2NSw2MCBDNjUsNzAgMzUsNzAgMzUsNjAgWiIgZmlsbD0iI2FkYjViZCIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMzAiIHI9IjEwIiBmaWxsPSIjNmM3NTdkIi8+PGNpcmNsZSBjeD0iMzAiIGN5PSI3MCIgcj0iMyIgZmlsbD0iI2FkYjViZCIvPjxjaXJjbGUgY3g9IjcwIiBjeT0iNzAiIHI9IjMiIGZpbGw9IiNhZGI1YmQiLz48L2c+PC9zdmc+',
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
