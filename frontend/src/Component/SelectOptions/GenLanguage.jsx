import React, { useState } from 'react';
import Select from 'react-select';

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'zh', label: 'Chinese' },
  { value: 'ja', label: 'Japanese' },
  { value: 'ru', label: 'Russian' },
  { value: 'ko', label: 'Korean' },
  { value: 'it', label: 'Italian' },
  { value: 'pt', label: 'Portuguese' },
  // Add more languages as needed
];

const WebsiteLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageChange = (selectedOption) => {
    setSelectedLanguage(selectedOption);
    console.log(`Language selected:`, selectedOption);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="bg-white p-5 rounded shadow-sm w-50">
        <h2 className="text-center mb-4">Select Website Language</h2>
        <Select
          value={selectedLanguage}
          onChange={handleLanguageChange}
          options={languages}
          className="mb-3"
        />
      </div>
    </div>
  );
};

export default WebsiteLanguage;
