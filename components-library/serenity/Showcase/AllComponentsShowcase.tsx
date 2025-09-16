import React from 'react';

// Import all the components from Serenity
import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import ButtonToggle from '../ButtonToggle/ButtonToggle';
import Card from '../Card/Card';
import Checkbox from '../Checkbox/Checkbox';
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';
import InputField from '../InputField/InputField';
import MultiSelect from '../MultiSelect/MultiSelect';
import RadioButton from '../RadioButton/RadioButton';
import Select from '../Select/Select';
import Tabs from '../Tabs/Tabs';

// Container component for showcase sections
const ShowcaseSection: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
    <div className="bg-surface rounded-lg shadow-sm border border-border p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">{title}</h3>
        <div className={className || "flex flex-wrap gap-4 items-start"}>
            {children}
        </div>
    </div>
);


export const AllComponentsShowcase: React.FC = () => {
    // State for interactive components
    const [inputValue, setInputValue] = React.useState('My journal entry...');
    const [errorInputValue, setErrorInputValue] = React.useState('invalid-email');
    const [isChecked, setIsChecked] = React.useState(true);
    const [toggleValue, setToggleValue] = React.useState('10 min');
    const [selectValue, setSelectValue] = React.useState('Intermediate');
    const [multiSelectValues, setMultiSelectValues] = React.useState(['Focus']);
    const [radioValue, setRadioValue] = React.useState('email');
    const [activeTab, setActiveTab] = React.useState('Discover');

    return (
        <div className="space-y-8 p-4 bg-background">
            <h1 className="text-3xl font-bold text-text-primary">Serenity Component Showcase</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                <div className="space-y-8 flex flex-col">
                    <ShowcaseSection title="Buttons">
                        <Button label="Primary" variant="primary" />
                        <Button label="Secondary" variant="secondary" />
                        <Button label="Tertiary" variant="tertiary" />
                        <Button label="Disabled" variant="primary" disabled />
                    </ShowcaseSection>
                    
                    <ShowcaseSection title="Badges">
                        <Badge label="Anxiety" color="clay" />
                        <Badge label="New" color="moss" />
                        <Badge label="Sleep" color="sky" />
                    </ShowcaseSection>
                    
                    <ShowcaseSection title="Selection Controls">
                        <div className="space-y-4 w-full">
                            <Checkbox label="Remember me" checked={isChecked} onChange={setIsChecked} />
                             <div className="space-y-2">
                                <p className="text-sm font-medium text-text-primary">Contact preference</p>
                                <div className="flex flex-col gap-2">
                                    <RadioButton label="Email" name="contact" value="email" checked={radioValue === 'email'} onChange={setRadioValue} />
                                    <RadioButton label="Phone" name="contact" value="phone" checked={radioValue === 'phone'} onChange={setRadioValue} />
                                </div>
                            </div>
                        </div>
                    </ShowcaseSection>
                </div>
                
                <div className="space-y-8 flex flex-col">
                    <ShowcaseSection title="Input Fields" className="space-y-6 w-full">
                         <InputField label="Your Name" value={inputValue} onChange={setInputValue} helperText="Use your preferred name." />
                         <InputField label="Email Address" value={errorInputValue} onChange={setErrorInputValue} error="Please enter a valid email." />
                    </ShowcaseSection>

                    <ShowcaseSection title="Dropdowns" className="space-y-4 w-full">
                        <Select
                            options={['Beginner', 'Intermediate', 'Advanced']}
                            value={selectValue}
                            onChange={setSelectValue}
                        />
                        <MultiSelect
                            placeholder="Select categories..."
                            options={['Focus', 'Anxiety', 'Sleep', 'Gratitude']}
                            selectedOptions={multiSelectValues}
                            onChange={setMultiSelectValues}
                        />
                    </ShowcaseSection>
                </div>

                <div className="space-y-8 flex flex-col">
                     <ShowcaseSection title="Button Toggle">
                        <ButtonToggle options={['10 min', '15 min', '20 min']} value={toggleValue} onChange={setToggleValue} />
                    </ShowcaseSection>
                    
                    <ShowcaseSection title="Content Display" className="space-y-4 w-full">
                       <Card 
                            imageUrl='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgNSkiPjxwYXRoIGQ9Ik0yNSw4MCBDMjAsNjUgODAsNjUgNzUsODAgUTUwLDkwIDI1LDgwIFoiIGZpbGw9IiM2Yzc1N2QiLz48cGF0aCBkPSJNMzUsNTAgQzM1LDQwIDY1LDQwIDY1LDUwIEw2NSw2MCBDNjUsNzAgMzUsNzAgMzUsNjAgWiIgZmlsbD0iI2FkYjViZCIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMzAiIHI9IjEwIiBmaWxsPSIjNmM3NTdkIi8+PGNpcmNsZSBjeD0iMzAiIGN5PSI3MCIgcj0iMyIgZmlsbD0iI2FkYjViZCIvPjxjaXJjbGUgY3g9IjcwIiBjeT0iNzAiIHI9IjMiIGZpbGw9IiNhZGI1YmQiLz48L2c+PC9zdmc+'
                            title="Evening Wind Down"
                            duration="15 min"
                            category="Sleep"
                        />
                        <Tabs
                            tabs={['My Meditations', 'Discover', 'Sleep Stories']}
                            activeTab={activeTab}
                            onTabChange={setActiveTab}
                        />
                        <ExpansionPanel title="What is meditation?">
                            <p className="text-sm">Meditation is a practice to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.</p>
                        </ExpansionPanel>
                    </ShowcaseSection>
                </div>
            </div>
        </div>
    );
};