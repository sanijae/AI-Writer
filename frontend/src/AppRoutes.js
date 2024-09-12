import React from 'react';
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home/Home'
import Paraphraser from './Component/WriterTools/Paraphraser'
import ParagraphRewriter from './Component/WriterTools/ParagraphRewriter'
import SentenceRewriter from './Component/WriterTools/SentenceRewriter'
import Summarizer from './Component/WriterTools/Summarizer'
import AIWriterFlow from './Component/WriterTools/AIWriterFlow'
import WordCounter from './Component/WriterTools/WordCounter'
import Translator from './Component/WriterTools/Translator'
import GrammarChecker from './Component/LanguageTools/GrammerCheck'
import Proofreader from './Component/LanguageTools/Proofreader'
import SpellChecker from './Component/LanguageTools/SpellCheck'
import PunctuationChecker from './Component/LanguageTools/PunctuationCheck'
import EssayChecker from './Component/LanguageTools/EssayCheck'
import PlagiarismChecker from './Component/CitationOriginaltyTools/PlagiarismCheck'
import CitationGenerator from './Component/CitationOriginaltyTools/CitationGenerator'
import AIDetector from './Component/CitationOriginaltyTools/AIDetector'
import Login from './Component/Auth/Login';
import Register from './Component/Auth/Register';
import WebsiteLanguage from './Component/SelectOptions/GenLanguage';
import Plans from './Pages/Plan/Plans';
import HelpCenter from './Pages/Help/Help';
import SettingsPage from './Pages/Settings/Settings';
import ProfilePage from './Component/Profile/Profile';
import AboutPage from './Pages/About/About';
import ContactUsPage from './Pages/Contact/Contacts';
import TermsOfServicePage from './Pages/About/ToS';
import PrivacyPolicyPage from './Pages/About/Policy';
import Report from './Component/Profile/Report';
import APACitationGenerator from './Component/CitationOriginaltyTools/APACitationGenerator';
import MLACitationGenerator from './Component/CitationOriginaltyTools/MLACitationGenerator';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/login' Component={Login} />

      <Route path='/contact-us' Component={ContactUsPage} />
      <Route path='/term-of-services' Component={TermsOfServicePage} />
      <Route path='/privacy-policy' Component={PrivacyPolicyPage} />
      <Route path='/about-ai-writer-tool' Component={AboutPage} />
      <Route path='/plans' Component={Plans} />
      <Route path='/reports' Component={Report} />
      <Route path='/profile' Component={ProfilePage} />
      <Route path='/help-center' Component={HelpCenter} />
      <Route path='/register' Component={Register} />
      <Route path='/settings' Component={SettingsPage} />
      <Route path='/language-selection' Component={WebsiteLanguage} />
      <Route path='/paraphraser' Component={Paraphraser} />
      <Route path='/paragraphRewriter' Component={ParagraphRewriter} />
      <Route path='/sentenceRewriter' Component={SentenceRewriter} />
      <Route path='/ai-writer-flow' Component={AIWriterFlow} />
      <Route path='/wordCounter' Component={WordCounter} />
      <Route path='/translator' Component={Translator} />
      <Route path='/summarizer' Component={Summarizer} />
      <Route path='/grammar-checker' Component={GrammarChecker} />
      <Route path='/proof-reader' Component={Proofreader} />
      <Route path='/spell-checker' Component={SpellChecker} />
      <Route path='/punctuation-checker' Component={PunctuationChecker} />
      <Route path='/essay-checker' Component={EssayChecker} />
      <Route path='/plagiarism-check' Component={PlagiarismChecker} />
      <Route path='//citation-generator/apa' Component={APACitationGenerator} />
      <Route path='//citation-generator/mla' Component={MLACitationGenerator} />
      <Route path='/citation-generator' Component={CitationGenerator} />
      <Route path='/ai-detector' Component={AIDetector} />
    </Routes>
  );
};

export default AppRoutes;
