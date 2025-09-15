import React, { createContext, useState, useContext, useMemo, useCallback } from 'react';
import { designSystems } from '../componentRegistry';
import type { Story } from '../types';

type Theme = 'light' | 'dark';

interface AppState {
  theme: Theme;
  selectedSystem: string;
  selectedComponent: string | null;
  selectedStory: string | null;
  props: Record<string, any>;
  actions: string[];
}

interface AppContextType extends AppState {
  availableSystems: string[];
  currentStoryData: Story | null;
  toggleTheme: () => void;
  selectSystem: (system: string) => void;
  selectComponentStory: (component: string, story: string) => void;
  updateProp: (propName: string, value: any) => void;
  logAction: (actionName: string, ...args: any[]) => void;
  resetProps: () => void;
}

const AppStateContext = createContext<AppContextType | undefined>(undefined);

const initialSystem = Object.keys(designSystems)[0];

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>({
    theme: 'dark',
    selectedSystem: initialSystem,
    selectedComponent: null,
    selectedStory: null,
    props: {},
    actions: [],
  });

  const availableSystems = useMemo(() => Object.keys(designSystems), []);

  const toggleTheme = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      theme: prevState.theme === 'dark' ? 'light' : 'dark',
    }));
  }, []);

  const selectSystem = useCallback((system: string) => {
    setState(prevState => ({
      ...prevState,
      selectedSystem: system,
      selectedComponent: null,
      selectedStory: null,
      props: {},
      actions: [],
    }));
  }, []);

  const selectComponentStory = useCallback((component: string, story: string) => {
    const storyData = designSystems[state.selectedSystem]?.components[component]?.[story];
    if (storyData) {
      setState(prevState => ({
        ...prevState,
        selectedComponent: component,
        selectedStory: story,
        props: storyData.args,
        actions: [],
      }));
    }
  }, [state.selectedSystem]);

  const updateProp = useCallback((propName: string, value: any) => {
    setState(prevState => ({
      ...prevState,
      props: {
        ...prevState.props,
        [propName]: value,
      },
    }));
  }, []);

  const logAction = useCallback((actionName: string, ...args: any[]) => {
    const timestamp = new Date().toLocaleTimeString();
    
    // Filter out React SyntheticEvent objects, which have circular references 
    // and cause JSON.stringify to fail. We identify them by checking for a `nativeEvent` property.
    const serializableArgs = args.filter(arg => {
      return !(arg && typeof arg === 'object' && arg.nativeEvent);
    });

    let argsString = '';
    if (serializableArgs.length > 0) {
        try {
            argsString = ` with args: ${JSON.stringify(serializableArgs)}`;
        } catch (e) {
            // A fallback in case other circular structures are passed.
            console.error("Could not stringify action arguments:", e);
            argsString = ' with unserializable args';
        }
    }

    const logMessage = `[${timestamp}] ${actionName}${argsString}`;
    setState(prevState => ({
      ...prevState,
      actions: [...prevState.actions, logMessage],
    }));
  }, []);

  const currentStoryData = useMemo<Story | null>(() => {
    if (state.selectedSystem && state.selectedComponent && state.selectedStory) {
      return designSystems[state.selectedSystem]?.components[state.selectedComponent]?.[state.selectedStory] || null;
    }
    return null;
  }, [state.selectedSystem, state.selectedComponent, state.selectedStory]);

  const resetProps = useCallback(() => {
    if (currentStoryData) {
        setState(prevState => ({
            ...prevState,
            props: currentStoryData.args
        }))
    }
  }, [currentStoryData]);

  const value = {
    ...state,
    availableSystems,
    currentStoryData,
    toggleTheme,
    selectSystem,
    selectComponentStory,
    updateProp,
    logAction,
    resetProps,
  };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

export const useAppState = (): AppContextType => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};