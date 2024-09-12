import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Sidenav.css'

export default function AlltoolsDesktop ({handleShowTools}){
  return (
    <section className="py-5 showTools">
        <div  className="w-100" onClick={handleShowTools}>
            <Container className=''>
                <Row>
                <Col md={4}>
                    <h5 className=''>Writing Tools</h5>
                    <hr/>
                    <Nav className="flex-column">
                    <LinkContainer to="/paraphraser">
                        <Nav.Link className="text-black">Paraphrasing Tool</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/paragraphRewriter">
                        <Nav.Link className="text-black">Paragraph Rewriter</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/sentenceRewriter">
                        <Nav.Link className="text-black">Sentence Rewriter</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/summarizer">
                        <Nav.Link className="text-black">Summarizer</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/ai-writer-flow">
                        <Nav.Link className="text-black">AI-Writer Flow</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/wordCounter">
                        <Nav.Link className="text-black">Word Counter</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/translator">
                        <Nav.Link className="text-black">Translator</Nav.Link>
                    </LinkContainer>
                    </Nav>
                </Col>
                <Col md={4}>
                    <h5>Writing Correction</h5>
                    <hr/>
                    <Nav className="flex-column">
                    <LinkContainer to="/grammar-checker">
                        <Nav.Link className="text-black">Grammar Checker</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/proof-reader">
                        <Nav.Link className="text-black">Proofreader</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/spell-checker">
                        <Nav.Link className="text-black">Spell Checker</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/punctuation-checker">
                        <Nav.Link className="text-black">Punctuation Checker</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/essay-checker">
                        <Nav.Link className="text-black">Essay Checker</Nav.Link>
                    </LinkContainer>
                    </Nav>
                </Col>
                <Col md={4}>
                    <h5>Referencing and Authenticity</h5>
                    <hr/>
                    <Nav className="flex-column">
                    <LinkContainer to="/citation-generator">
                        <Nav.Link className="text-black">Citation Generator</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/citation-generator/apa">
                        <Nav.Link className="text-black">APA Citation Generator</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/citation-generator/mla">
                        <Nav.Link className="text-black">MLA Citation Generator</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/plagiarism-check">
                        <Nav.Link className="text-black">Plagiarism Checker</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/ai-detector">
                        <Nav.Link className="text-black">AI Detector</Nav.Link>
                    </LinkContainer>
                    </Nav>
                </Col>
                </Row>
            </Container>
      </div>
    </section>
  );
};

