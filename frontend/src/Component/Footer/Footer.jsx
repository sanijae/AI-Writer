import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';
import { LinkContainer } from 'react-router-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Writing Tools</h5>
            <Nav className="flex-column">
              <LinkContainer to="/paraphraser">
                <Nav.Link className="text-white">Paraphrasing Tool</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/paragraphRewriter">
                <Nav.Link className="text-white">Paragraph Rewriter</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sentenceRewriter">
                <Nav.Link className="text-white">Sentence Rewriter</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/summarizer">
                <Nav.Link className="text-white">Summarizer</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ai-writer-flow">
                <Nav.Link className="text-white">AI-Writer Flow</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/wordCounter">
                <Nav.Link className="text-white">Word Counter</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/translator">
                <Nav.Link className="text-white">Translator</Nav.Link>
              </LinkContainer>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>Writing Correction</h5>
            <Nav className="flex-column">
              <LinkContainer to="/grammar-checker">
                <Nav.Link className="text-white">Grammar Checker</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/proof-reader">
                <Nav.Link className="text-white">Proofreader</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/spell-checker">
                <Nav.Link className="text-white">Spell Checker</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/punctuation-checker">
                <Nav.Link className="text-white">Punctuation Checker</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/essay-checker">
                <Nav.Link className="text-white">Essay Checker</Nav.Link>
              </LinkContainer>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>Referencing and Authenticity</h5>
            <Nav className="flex-column">
              <LinkContainer to="/citation-generator">
                <Nav.Link className="text-white">Citation Generator</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/citation-generator/apa">
                <Nav.Link className="text-white">APA Citation Generator</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/citation-generator/mla">
                <Nav.Link className="text-white">MLA Citation Generator</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/plagiarism-check">
                <Nav.Link className="text-white">Plagiarism Checker</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ai-detector">
                <Nav.Link className="text-white">AI Detector</Nav.Link>
              </LinkContainer>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>Company</h5>
            <Nav className="flex-column">
              <Nav.Link href="/about-ai-writer-tool" className="text-white">About us</Nav.Link>
              {/* <Nav.Link href="#" className="text-white">Careers</Nav.Link> */}
              <Nav.Link href="/help-center" className="text-white">Help Center</Nav.Link>
              <Nav.Link href="/contact-us" className="text-white">Contact Us</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <hr className="bg-white" />
        <Row>
          <Col md={6}>
            <p className="mb-0">&copy; {new Date().getFullYear()}&nbsp;AI-Writer Inc.</p>
            <div className="d-flex justify-content-left my-2">
              <Nav.Link href="/privacy-policy" className=" mr-1 text-blue-500 link-info">Privacy Policy</Nav.Link>
              <Nav.Link href="/term-of-services" className="text-blue-500 ml-1 underline link-info">Terms of Service</Nav.Link>
            </div>
          </Col>
          <Col md={6} className='text-right'>
            <div className='text-white text-2xl flex justify-content-end'>
              <div className='mr-2 cursor-pointer p-2 text-blue-600'>
                <FiFacebook/>
              </div>
              <div className='mr-2 cursor-pointer p-2 text-blue-400'>
                <FiTwitter/>
              </div>
              <div className='mr-2 cursor-pointer p-2 text-red-400'>
                <FiYoutube/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
