import React from 'react';
import Select from 'react-select';

export const modes = [
  { value: 'standard', label: 'Standard' },
  { value: 'fluency', label: 'Fluency' },
  { value: 'natural', label: 'Natural' },
  { value: 'formal', label: 'Formal' },
  { value: 'academic', label: 'Academic' },
  { value: 'simple', label: 'Simple' },
  { value: 'creative', label: 'Creative' },
  { value: 'expand', label: 'Expand' },
  { value: 'shorten', label: 'Shorten' },
];

export const languages = [
  { value: 'english', label: 'English' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'chinese', label: 'Chinese' },
  { value: 'hindi', label: 'Hindi' },
];

export const customStyles = {
  control: (base) => ({
    ...base,
    minHeight: 50,
    fontSize: 16,
    borderColor: '#ced4da',
    '&:hover': { borderColor: '#80bdff' },
    boxShadow: 'none',
  }),
  menu: (base) => ({
    ...base,
    fontSize: 16,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#007bff' : state.isFocused ? '#e9ecef' : 'white',
    color: state.isSelected ? 'white' : 'black',
  }),
};

const SelectOptions = ({ handleModeChange, handleLanguageChange }) => (
  <div className="d-flex mt-2 md:mt-0 md:m-0">
    <div className='mr-2'>
      <Select
        options={modes}
        onChange={handleModeChange}
        styles={customStyles}
        placeholder="Select Mode"
      />
    </div>
    <div className='ml-2'>
      <Select
        options={languages}
        onChange={handleLanguageChange}
        styles={customStyles}
        placeholder="Select Language"
      />
    </div>
  </div>
);

export default SelectOptions;
