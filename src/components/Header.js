import React from 'react';
import Nav from './Nav';

export default function Header({ isNavOpen, setIsNavOpen }) {
  return (
    <header className='fw'>
        <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
    </header>
  );
}