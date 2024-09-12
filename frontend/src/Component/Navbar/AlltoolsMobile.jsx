import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { CgClose } from "react-icons/cg";
import './Sidenav.css';

export default function AlltoolsMobile({ showMenu, handleMenuClick }) {
  const [openSections, setOpenSections] = useState({
    writingTools: false,
    writingCorrection: false,
    referencing: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  return (
    <section className={`${showMenu ? "showMenu" : ''}`}>
      <div className="mobileMenu">
        <div className='p-2'>
          <h1>All tools</h1>
          <hr />
        </div>
        <div className='p-2 scrollable-content'>
          <div className=''>
            <div className='btn w-100'>
                <div  className="d-flex justify-content-between align-items-center" style={{color:'#0097B2', fontWeight:'bold'}} onClick={() => toggleSection('writingTools')}>
                    <span>Writing Tools</span>
                    <i>{openSections.writingTools ? '▲' : '▼'}</i>
                </div>
                <hr />
            </div>
            {openSections.writingTools && (
              <Nav className="flex-column">
                <LinkContainer onClick={handleMenuClick} to="/paraphraser">
                  <Nav.Link className="text-black">Paraphrasing Tool</Nav.Link>
                </LinkContainer>
                <LinkContainer onClick={handleMenuClick} to="/paragraphRewriter">
                  <Nav.Link className="text-black">Paragraph Rewriter</Nav.Link>
                </LinkContainer>
                <LinkContainer onClick={handleMenuClick} to="/sentenceRewriter">
                  <Nav.Link className="text-black">Sentence Rewriter</Nav.Link>
                </LinkContainer>
                <LinkContainer onClick={handleMenuClick} to="/summarizer">
                  <Nav.Link className="text-black">Summarizer</Nav.Link>
                </LinkContainer>
                <LinkContainer onClick={handleMenuClick} to="/ai-writer-flow">
                  <Nav.Link className="text-black">AI-Writer Flow</Nav.Link>
                </LinkContainer>
                <LinkContainer onClick={handleMenuClick} to="/wordCounter">
                  <Nav.Link className="text-black">Word Counter</Nav.Link>
                </LinkContainer>
                <LinkContainer onClick={handleMenuClick} to="/translator">
                  <Nav.Link className="text-black">Translator</Nav.Link>
                </LinkContainer>
              </Nav>
            )}
          </div>
          <div className=''>
            <div className='btn w-100'>
                <div  className="d-flex justify-content-between align-items-center" style={{color:'#0097B2', fontWeight:'bold'}} onClick={() => toggleSection('writingCorrection')}>
                    <span>Writing Correction</span>
                    <i>{openSections.writingCorrection ? '▲' : '▼'}</i>
                </div>
                <hr />
            </div>
            {openSections.writingCorrection && (
              <Nav className="flex-column">
                <LinkContainer onClick={handleMenuClick} to="/grammar-checker">
                  <Nav.Link className="text-black">Grammar Checker</Nav.Link>
                </LinkContainer>
                <LinkContainer onClick={handleMenuClick} to="/proof-reader">
                  <Nav.Link className="text-black">Proofreader</Nav.Link>
                </LinkContainer>
                <LinkContainer onClick={handleMenuClick} to="/spell-checker">
                  <Nav.Link className="text-black">Spell Checker</Nav.Link>
                </LinkContainer>
                <LinkContainer onClick={handleMenuClick} to="/punctuation-checker">
                  <Nav.Link className="text-black">Punctuation Checker</Nav.Link>
                </LinkContainer>
                <LinkContainer onClick={handleMenuClick} to="/essay-checker">
                  <Nav.Link className="text-black">Essay Checker</Nav.Link>
                </LinkContainer>
              </Nav>
            )}
          </div>
          <div className=''>
            <div className='btn w-100'>
                <div className="d-flex justify-content-between align-items-center" style={{color:'#0097B2', fontWeight:'bold'}} onClick={() => toggleSection('referencing')}>
                    <span>Referencing and Authenticity</span>
                    <i>{openSections.referencing ? '▲' : '▼'}</i>
                </div>
                <hr />
            </div>
            {openSections.referencing && (
              <Nav className="flex-column ">
                <LinkContainer onClick={handleMenuClick} to="/citation-generator">
                  <Nav.Link className="text-black">Citation Generator</Nav.Link>
                </LinkContainer>
                <LinkContainer onClick={handleMenuClick} to="/citation-generator/apa">
                  <Nav.Link className="text-black">APA Citation Generator</Nav.Link>
                </LinkContainer>
                <LinkContainer onClick={handleMenuClick} to="/citation-generator/mla">
                  <Nav.Link className="text-black">MLA Citation Generator</Nav.Link>
                </LinkContainer>
                <LinkContainer onClick={handleMenuClick} to="/plagiarism-check">
                  <Nav.Link className="text-black">Plagiarism Checker</Nav.Link>
                </LinkContainer>
                <LinkContainer onClick={handleMenuClick} to="/ai-detector">
                  <Nav.Link className="text-black">AI Detector</Nav.Link>
                </LinkContainer>
              </Nav>
            )}
          </div>
        </div>
      </div>
      <div className='close bg-white text-dark' onClick={handleMenuClick}>
        <CgClose />
      </div>
    </section>
  );
}
