
import type React from 'react';

export interface ActionArg {
  action: string;
}

export interface TextControl {
  type: 'text';
}

export interface BooleanControl {
  type: 'boolean';
}

export interface ColorControl {
    type: 'color';
}

export interface SelectControl {
  type: 'select';
}

export type Control = TextControl | BooleanControl | ColorControl | SelectControl;

export interface ArgType {
  control: Control;
  options?: string[];
}

export interface Story {
  component: React.ComponentType<any>;
  args: Record<string, any>;
  argTypes: Record<string, ArgType | ActionArg>;
}

export interface ComponentConfig {
  [storyName: string]: Story;
}

export interface DesignSystem {
  name: string;
  components: {
    [componentName: string]: ComponentConfig;
  };
}

export interface DesignSystems {
  [systemName: string]: DesignSystem;
}
