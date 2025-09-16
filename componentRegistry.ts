import type { DesignSystems } from './types';

import { badgeStories } from './components-library/serenity/Badge/Badge.stories';
import { serenityButtonStories } from './components-library/serenity/Button/Button.stories';
import { buttonToggleStories } from './components-library/serenity/ButtonToggle/ButtonToggle.stories';
import { cardStories } from './components-library/serenity/Card/Card.stories';
import { checkboxStories } from './components-library/serenity/Checkbox/Checkbox.stories';
import { expansionPanelStories } from './components-library/serenity/ExpansionPanel/ExpansionPanel.stories';
import { inputFieldStories } from './components-library/serenity/InputField/InputField.stories';
import { multiSelectStories } from './components-library/serenity/MultiSelect/MultiSelect.stories';
import { radioButtonStories } from './components-library/serenity/RadioButton/RadioButton.stories';
import { selectStories } from './components-library/serenity/Select/Select.stories';
import { tabsStories } from './components-library/serenity/Tabs/Tabs.stories';
import { showcaseStories } from './components-library/serenity/Showcase/Showcase.stories';


export const designSystems: DesignSystems = {
  'Serenity': {
    name: 'Serenity',
    components: {
      'Showcase': showcaseStories,
      'Badge': badgeStories,
      'Button': serenityButtonStories,
      'ButtonToggle': buttonToggleStories,
      'Card': cardStories,
      'Checkbox': checkboxStories,
      'ExpansionPanel': expansionPanelStories,
      'InputField': inputFieldStories,
      'MultiSelect': multiSelectStories,
      'RadioButton': radioButtonStories,
      'Select': selectStories,
      'Tabs': tabsStories,
    },
  },
};