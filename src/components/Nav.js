import React, { useState, useEffect } from 'react';
import './../css/Nav.css'
import { NavLink, useLocation } from 'react-router-dom';

export default function Nav({ isNavOpen, setIsNavOpen }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const [activeLink, setActiveLink] = useState(currentPath);

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
        <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
        <hr className='mb fw'/>
        <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
        <hr className='mb fw'/>
        <NavLink to="/menu" className="nav-link" activeClassName="active">Menu</NavLink>
        <hr className='mb fw'/>
        <NavLink to="/reservation" className="nav-link" activeClassName="active">Reservations</NavLink>
        <hr className='mb fw'/>
        <NavLink to="/order" className="nav-link" activeClassName="active">Order Online</NavLink>
        <hr className='mb fw'/>
        <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
        <hr className='mb fw'/>
      </div>
    </nav>
  );
};