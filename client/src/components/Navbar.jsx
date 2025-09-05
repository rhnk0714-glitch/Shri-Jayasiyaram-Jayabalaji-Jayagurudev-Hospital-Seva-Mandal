import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle.jsx';
import logo from '../imgs/trust_logo.png'

export default function Navbar(){
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 769);
      if (window.innerWidth >= 769) {
        setIsMenuOpen(false); // reset mobile menu on desktop
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const navLinks = [
    { to: '/', text: t('nav.home') },
    { to: '/about', text: t('nav.about') },
    { to: '/services', text: t('nav.services') },
    { to: '/donate', text: t('nav.donate') },
    { to: '/media', text: t('nav.media') },
    //{ to: '/join', text: t('nav.join') },
    { to: '/contact', text: t('nav.contact') },
    //{ to: '/admin', text: t('nav.admin') },
    { to: '/trustee', text: t('nav.trustee') }
    
  ];

  return (
    <nav role="navigation" aria-label="Main">
      <div className="brand">
        {/* <div className="logo"><img width='100%' src={logo} alt="" /></div> */}
        {/* <div className="title">{t('nav.title')}</div> */}
      </div>
      <div className={`links ${isMenuOpen ? 'show' : ''}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.text}
          </NavLink>
        ))}
      </div>
      
      <div className="controls">
        <LanguageToggle />
      </div>
        {!isDesktop && (
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      )}
    </nav>
  );
}