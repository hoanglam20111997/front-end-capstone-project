import React from 'react';

function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/services">Services</a></li>
        {/* Add more navigation links here */}
      </ul>
    </nav>
  );
}

export default Nav;