import React, { useState } from 'react';
import type { ComponentConfig } from '../../../types';
import Tabs from './Tabs';

const InteractiveTabs: React.FC<{tabs: string[]}> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    return (
        <div>
            <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="pt-4 text-text-secondary">
                Content for {activeTab}
            </div>
        </div>
    );
}

export const tabsStories: ComponentConfig = {
  'Default': {
    component: InteractiveTabs,
    args: {
      tabs: ['Portfolio', 'Analysis', 'News', 'Trading'],
    },
    argTypes: {},
  },
};