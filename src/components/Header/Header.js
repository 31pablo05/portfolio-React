import React from 'react';
import './Header.css';
import Logo from './Logo';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <header className="header" role="banner">
      <Logo />
      <NavLinks />
    </header>
  );
};

export default Header;
