import React from 'react';

// Import all the components
import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import ButtonToggle from '../ButtonToggle/ButtonToggle';
import Card from '../Card/Card';
import Checkbox from '../Checkbox/Checkbox';
import ComplexDataTable from '../ComplexDataTable/ComplexDataTable';
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';
import InputField from '../InputField/InputField';
import MultiSelect from '../MultiSelect/MultiSelect';
import RadioButton from '../RadioButton/RadioButton';
import Select from '../Select/Select';
import Tabs from '../Tabs/Tabs';

// Mock data for components that need it
const tableColumns = [{ key: 'feature', label: 'Feature' }, { key: 'status', label: 'Status' }];
const tableData = [
    { feature: 'Real-time Quotes', status: <Badge label="Active" variant="positive" /> },
    { feature: 'API Access', status: <Badge label="Pending" variant="warning" /> },
    { feature: 'Algo Trading v1', status: <Badge label="Inactive" variant="negative" /> },
];

export const AllComponentsShowcase: React.FC = () => {
    // State for interactive components
    const [inputValue, setInputValue] = React.useState('Some text');
    const [errorInputValue, setErrorInputValue] = React.useState('invalid-email');
    const [isChecked, setIsChecked] = React.useState(true);
    const [toggleValue, setToggleValue] = React.useState('Live');
    const [selectValue, setSelectValue] = React.useState('Option 2');
    const [multiSelectValues, setMultiSelectValues] = React.useState(['Equities']);
    const [radioValue, setRadioValue] = React.useState('market');
    const [activeTab, setActiveTab] = React.useState('UI Elements');

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-text-primary">Stability Component Showcase</h1>

            <Tabs
                tabs={['UI Elements', 'Data Display']}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

            {activeTab === 'UI Elements' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Buttons Card */}
                    <Card title="Buttons">
                        <div className="flex flex-wrap gap-4 items-start">
                            <Button label="Primary" variant="primary" />
                            <Button label="Secondary" variant="secondary" />
                            <Button label="Tertiary" variant="tertiary" />
                            <Button label="Destructive" variant="destructive" />
                            <Button label="Disabled" variant="primary" disabled />
                        </div>
                    </Card>

                    {/* Badges Card */}
                    <Card title="Badges">
                        <div className="flex flex-wrap gap-4">
                            <Badge label="Positive" variant="positive" />
                            <Badge label="Negative" variant="negative" />
                            <Badge label="Warning" variant="warning" />
                            <Badge label="Interactive" variant="interactive" />
                        </div>
                    </Card>

                    {/* Input Fields Card */}
                    <Card title="Input Fields" padding="lg">
                        <div className="space-y-6">
                            <InputField label="Standard Input" value={inputValue} onChange={setInputValue} helperText="This is a helper text." />
                            <InputField label="Error State" value={errorInputValue} onChange={setErrorInputValue} error="Invalid format." />
                            <InputField label="Disabled Input" value="Read-only value" onChange={() => {}} disabled />
                            <InputField label="Password" value="password123" onChange={() => {}} type="password" />
                        </div>
                    </Card>

                    {/* Selection Controls Card */}
                    <Card title="Selection Controls">
                        <div className="space-y-4">
                            <Checkbox label="Enable this feature" checked={isChecked} onChange={setIsChecked} />
                             <div className="space-y-2">
                                <p className="text-sm font-medium text-text-secondary">Order Type</p>
                                <div className="flex flex-col gap-2">
                                    <RadioButton label="Market Order" name="order" value="market" checked={radioValue === 'market'} onChange={setRadioValue} />
                                    <RadioButton label="Limit Order" name="order" value="limit" checked={radioValue === 'limit'} onChange={setRadioValue} />
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Dropdowns Card */}
                    <Card title="Dropdowns">
                        <div className="space-y-4">
                            <Select
                                label="Select an Option"
                                options={['Option 1', 'Option 2', 'Option 3']}
                                value={selectValue}
                                onChange={setSelectValue}
                            />
                            <MultiSelect
                                placeholder="Select multiple assets..."
                                options={['Equities', 'Bonds', 'FX', 'Crypto']}
                                selectedOptions={multiSelectValues}
                                onChange={setMultiSelectValues}
                            />
                        </div>
                    </Card>
                    
                    {/* Toggles and Panels */}
                    <Card title="Toggles & Panels">
                         <div className="space-y-4">
                            <ButtonToggle options={['Live', 'Test']} value={toggleValue} onChange={setToggleValue} />
                            <ExpansionPanel title="View Advanced Settings">
                                <p>Here are some more detailed settings you can configure.</p>
                            </ExpansionPanel>
                        </div>
                    </Card>
                </div>
            )}
            
            {activeTab === 'Data Display' && (
                <div className="space-y-6">
                     <Card title="Complex Data Table">
                        <ComplexDataTable columns={tableColumns} data={tableData} itemsPerPage={3} />
                    </Card>
                </div>
            )}
        </div>
    );
};