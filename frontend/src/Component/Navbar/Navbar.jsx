import React,{useState} from 'react';
import { FaCrown, FaSign, FaSignOutAlt } from 'react-icons/fa';
import { MdHelpCenter, MdReport, MdSettings } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { CgClose, CgMenuGridO } from "react-icons/cg";
import './Nav.css'; 
import './Sidenav.css'
import { Link, useNavigate } from 'react-router-dom';
import { FaGlobe, FaPerson } from 'react-icons/fa6';
import AlltoolsDesktop from './AlltoolsDesktop';
import AlltoolsMobile from './AlltoolsMobile';

const MyNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showItems, setShowItems] = useState(false);
  const navigate = useNavigate()


  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  const handleShowTools = () => {
    setShowTools(!showTools);
  };
  const handleShowItems = () => {
    setShowItems(!showItems);
  };
  
  return (
    <div className="my-navbar fixed-top">
      <div className="container-fluid">
        <div  className="navbar-brands" onClick={()=>navigate('/')}>
          <img
            src={require('../../Assets/brands/AI-Writer-logo.png')}
            alt="Brand"
            className="brand-img"
          />
          <div className='title'>AI-Writer</div>
          <ul className='mobile-nav nav-list'>
          <li className="nav-item">
            <Link to="/" className="nav-link" style={{color:'#0097B2'}}>
              Home
            </Link>
          </li>
        </ul>
        </div>
        <div className="desktop-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link ">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/paraphraser" className="nav-link ">
                Paraphraser
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/summarizer" className="nav-link">
                Summarizer
              </Link>
            </li>
            <li className="nav-item">
              <Link to="plagiarism-check" className="nav-link">
                Plagiarism
              </Link>
            </li>
            <li className="nav-item">
              <button onClick={handleShowTools} className="d-flex align-content-center">
                All &nbsp; <CgMenuGridO size={'1.6em'} />
              </button>
            </li>
          </ul>
        </div>
        <div className="desktop-nav">
          <ul className="nav-list">
            <li className="nav-item login">
              <Link to="/login" className="nav-link">
                Get Started
              </Link>
            </li>
            <li className="nav-item">
              <div onClick={handleShowItems} style={{cursor:'pointer'}}>
                <RiMenu3Fill size={'1.6em'} />
              </div>
            </li>
          </ul>
        </div>
        <div className="mobile-nav">
          <ul className="nav-list">
            <li className="nav-item d-flex items-center" onClick={handleMenuClick}>
              Tools &nbsp;<CgMenuGridO size={'1.5em'} />
            </li>
            <li className="nav-item">
              <div onClick={handleShowItems}>
                <RiMenu3Fill size={'1.5em'} />
              </div>
            </li>
          </ul>
        </div>
        {showItems && 
          <div className={`${showItems ? "showItems" : ''}`}>
            <div className='close bg-white text-dark' onClick={handleShowItems}>
              <CgClose/>
            </div>
            <div className="mobileItems pt-5" onClick={handleShowItems}>
              <Link to='/profile' > <FaPerson/> &nbsp; Profile</Link>
              <Link to='/reports' > <MdReport/> &nbsp; Report</Link>
              <Link to='/plans' > <FaCrown/> &nbsp; Premium</Link>
              <Link to='/settings' > <MdSettings/> &nbsp; Setting</Link>
              <Link to='/language-selection' > <FaGlobe/> &nbsp; Language</Link>
              <Link to='/login' > <FaSign/>&nbsp; Login</Link>
              <Link to='/register' > <FaSignOutAlt/> &nbsp; Logout</Link>
              <Link to='/help-center' > <MdHelpCenter/> &nbsp; Help Center</Link>
            </div>
        </div>
        }
        {showMenu && <AlltoolsMobile showMenu={showMenu} handleMenuClick={handleMenuClick} /> }
        {showTools && <AlltoolsDesktop handleShowTools={handleShowTools} />   }
      </div>
    </div>
);
}

export default MyNavbar;
