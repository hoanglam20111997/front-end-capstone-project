import React, { useState, useEffect } from 'react';
import './../css/Nav.css'
import { Link } from 'react-router-dom';

export default function Nav({ isNavOpen, setIsNavOpen }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [navHeight, setNavHeight] = useState(0);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    const handleResize = () => {
      const newNavHeight = document.getElementById('nav').offsetHeight;
      setNavHeight(newNavHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize(); // Initialize the navHeight

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [prevScrollPos]);

  const navStyles = {
    position: 'fixed',
    top: isVisible ? 0 : -(navHeight),
    transitionProperty: 'top',
    transitionDuration: '0.3s',
    zIndex: 9999,
  };

  return (
    <nav className={`nav content`} style={navStyles} id="nav">
      <div className="nav-left">
        <div className='nav-img-containt'>
          <img
            src={require('./../assets/logo-images/Asset 16@4x.png')}
            alt="Logo"
            className="nav-logo"
          />
        </div>
        
        <div className={`nav-toggle ${isNavOpen ? 'open' : ''} mb`} onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div className={`nav-right ${isNavOpen ? 'open' : ''}`}>
        <hr className='mb fw'/>
        <Link to="/" className="nav-link">Home</Link>
        <hr className='mb fw'/>
        <Link to="/about" className="nav-link">About</Link>
        <hr className='mb fw'/>
        <Link to="/menu" className="nav-link">Menu</Link>
        <hr className='mb fw'/>
        <Link to="/reservation" className="nav-link">Reservations</Link>
        <hr className='mb fw'/>
        <Link to="/order" className="nav-link">Order Online</Link>
        <hr className='mb fw'/>
        <Link to="/login" className="nav-link">Login</Link>
        <hr className='mb fw'/>
      </div>
    </nav>
  );
};