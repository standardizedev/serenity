import React, { useState, useRef, useEffect } from 'react';
import ChevronDownIcon from '../../../components/icons/ChevronDownIcon';
import CloseIcon from '../../../components/icons/CloseIcon';
import CheckIcon from '../../../components/icons/CheckIcon';

interface MultiSelectProps {
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
  placeholder: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, selectedOptions, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  const handleSelect = (option: string) => {
    const newSelection = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
    onChange(newSelection);
  };

  const handleRemove = (option: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(selectedOptions.filter((item) => item !== option));
  }

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-2 text-left bg-surface border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-interactive-default"
      >
        <div className="flex flex-wrap gap-1.5 flex-1">
          {selectedOptions.length === 0 ? (
            <span className="text-text-secondary">{placeholder}</span>
          ) : (
            selectedOptions.map((option) => (
              <span key={option} className="flex items-center gap-1.5 bg-interactive-default/20 text-interactive-default text-xs font-semibold px-2 py-0.5 rounded-md">
                {option}
                <button onClick={(e) => handleRemove(option, e)} className="hover:text-negative-default"><CloseIcon className="h-3 w-3" /></button>
              </span>
            ))
          )}
        </div>
        <ChevronDownIcon className={`w-5 h-5 text-text-secondary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-surface border border-border rounded-md shadow-lg max-h-60 overflow-auto">
          <ul>
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className="px-3 py-2 text-text-primary hover:bg-border cursor-pointer flex items-center justify-between"
              >
                {option}
                {selectedOptions.includes(option) && <CheckIcon className="w-4 h-4 text-interactive-default" />}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;