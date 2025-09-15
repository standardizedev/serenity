
import React, { useState } from 'react';
import type { ComponentConfig } from '../../../types';
import Tabs from './Tabs';

const InteractiveTabs: React.FC<{tabs: string[]}> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    return (
        <div>
            <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="pt-4 text-stone-600 dark:text-sand-100">
                Content for {activeTab}
            </div>
        </div>
    );
}

export const tabsStories: ComponentConfig = {
  'Default': {
    component: InteractiveTabs,
    args: {
      tabs: ['My Meditations', 'Discover', 'Sleep Stories'],
    },
    // FIX: Add missing 'argTypes' property.
    argTypes: {},
  },
};
