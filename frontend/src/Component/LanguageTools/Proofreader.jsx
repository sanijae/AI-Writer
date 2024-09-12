import React, { useState, useCallback, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { MdFileUpload } from 'react-icons/md';
import SelectOptions from '../SelectOptions/SelectOptions';

const HowItWorksCard = ({ title, text, icon }) => (
  <div className="m-2 p-3 rounded card border-0">
    <div className="card-body">
      <div className="card-title d-flex align-items-center">
        <span className="mr-2">{icon}</span>
        {title}
      </div>
      <div className="card-text">{text}</div>
    </div>
  </div>
);

const Proofreader = () => {
  const [inputText, setInputText] = useState('');
  const [file, setFile] = useState('');
  const [proofreadText, setProofreadText] = useState('');
  const [error, setError] = useState('');
  const [selectedMode, setSelectedMode] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  useEffect(() => {
    document.title = 'Proofreader Tool';
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles);
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  console.log(file, selectedLanguage, selectedMode);

  const handleProofread = () => {
    if (!inputText.trim()) {
      setError('Input text cannot be empty');
      return;
    }

    // Mock proofreading function. Replace with actual API call in real-world scenario.
    const proofread = inputText.split(' ').map((word) => `${word}_proof`).join(' ');
    setProofreadText(proofread);
    setError('');
  };

  const handleModeChange = (selectedOption) => {
    setSelectedMode(selectedOption);
  };

  const handleLanguageChange = (selectedOption) => {
    setSelectedLanguage(selectedOption);
  };

  return (
    <div className="p-3">
      <div className="bg-white p-3 mb-2 flex flex-col-reverse md:flex-row justify-between items-center">
        <SelectOptions handleModeChange={handleModeChange} handleLanguageChange={handleLanguageChange} />
        <div className="text-2xl primary_color">Proofreader Tool</div>
      </div>
      <div className="bg-white p-3 rounded-md">
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-gray-800">
          <div className="w-full md:mr-1 p-2 bg-white">
            <form>
              <div className="mb-2 flex flex-col p-2">
                <textarea
                  className="border-0 focus:outline-none p-2"
                  style={{ minHeight: '60vh', resize: 'none' }}
                  rows={5}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter or paste text here to proofread"
                ></textarea>
              </div>
              <div className="flex justify-between items-center align-middle">
                <div
                  {...getRootProps()}
                  className="p-2 flex items-center bg-gray-400 text-white text-2xl hover:bg-gray-600 cursor-pointer rounded-lg"
                >
                  <input {...getInputProps()} />
                  <span>Upload</span>
                  <MdFileUpload />
                </div>
                <button onClick={handleProofread} className="primary_button text-2xl hover:bg-gray-900">
                  Proofread
                </button>
              </div>
            </form>
          </div>
          <div className="top-line w-full md:ml-1 p-2 bg-white h-full">
            <form>
              <div className="mb-2 flex flex-col p-2">
                <textarea
                  className="border-0 focus:outline-none p-2"
                  style={{ minHeight: '60vh', resize: 'none' }}
                  value={proofreadText}
                  readOnly
                  placeholder="Proofread text will appear here"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-2 bg-white p-3">
        <h2 className="text-center mb-4">How it Works</h2>
        <div className="row justify-content-center">
          <div className="col-lg-4 shadow-md">
            <HowItWorksCard
              title="Step 1: Enter Text"
              text="Simply type or paste your text into the input box."
              icon={<MdFileUpload />}
            />
          </div>
          <div className="col-lg-4 shadow-md">
            <HowItWorksCard
              title="Step 2: Upload File"
              text="Alternatively, upload a text file to proofread."
              icon={<MdFileUpload />}
            />
          </div>
          <div className="col-lg-4 shadow-md">
            <HowItWorksCard
              title="Step 3: Proofread"
              text="Click the 'Proofread' button to generate the proofread text."
              icon={<MdFileUpload />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proofreader;
