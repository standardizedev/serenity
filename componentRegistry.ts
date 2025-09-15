import type { DesignSystems } from './types';
import { serenityButtonStories } from './components-library/serenity/Button/Button.stories';
import { cardStories } from './components-library/serenity/Card/Card.stories';
import { checkboxStories } from './components-library/serenity/Checkbox/Checkbox.stories';
import { selectStories } from './components-library/serenity/Select/Select.stories';
import { multiSelectStories } from './components-library/serenity/MultiSelect/MultiSelect.stories';
import { badgeStories } from './components-library/serenity/Badge/Badge.stories';
import { radioButtonStories } from './components-library/serenity/RadioButton/RadioButton.stories';
import { tabsStories } from './components-library/serenity/Tabs/Tabs.stories';
import { inputFieldStories } from './components-library/serenity/InputField/InputField.stories';
import { buttonToggleStories } from './components-library/serenity/ButtonToggle/ButtonToggle.stories';
import { expansionPanelStories } from './components-library/serenity/ExpansionPanel/ExpansionPanel.stories';


export const designSystems: DesignSystems = {
  'Serenity': {
    name: 'Serenity',
    components: {
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