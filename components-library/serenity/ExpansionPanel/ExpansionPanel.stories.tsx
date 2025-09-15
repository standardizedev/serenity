
import React from 'react';
import type { ComponentConfig } from '../../../types';
import ExpansionPanel from './ExpansionPanel';

export const expansionPanelStories: ComponentConfig = {
  'Default': {
    component: ExpansionPanel,
    args: {
      title: 'What is mindfulness?',
      children: (
        <p>
          Mindfulness is the basic human ability to be fully present, aware of where we are and what we’re doing, and not overly reactive or overwhelmed by what’s going on around us.
        </p>
      ),
    },
    // FIX: Add missing 'argTypes' property.
    argTypes: {
      title: { control: { type: 'text' } },
    },
  },
   'Longer Content': {
    component: ExpansionPanel,
    args: {
      title: 'How do I start a meditation practice?',
      children: (
        <div className="space-y-2">
            <p>Starting is simple. Find a quiet place, sit comfortably, and set a timer for a short period, like 5 minutes. </p>
            <p>Focus on your breath, noticing the sensation of each inhale and exhale. When your mind wanders, gently guide it back to your breath. That's it. Consistency is more important than duration when you begin.</p>
        </div>
      ),
    },
    // FIX: Add missing 'argTypes' property.
    argTypes: {
      title: { control: { type: 'text' } },
    },
  },
};
