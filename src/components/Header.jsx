import React, { useState, useEffect } from 'react';
import '../styles/GlobalStyles.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'What we do' },
    { href: '#features', label: 'Why us?' },
    { href: '#work', label: 'Our work' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#home" className="logo" onClick={closeMenu}>
          <img 
            src="/src/assets/img/logo.png" 
            alt="Funel logo" 
            className="logo-img"
          />
        </a>

        <div className="navbar-wrapper">
          <button 
            className="navbar-menu-btn" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
            <ul className="navbar-list">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <a 
                    href={item.href} 
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button className="btn btn-primary navbar-cta">
              Get in touch
            </button>
          </nav>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          transition: all var(--transition-normal);
          border-bottom: 1px solid transparent;
        }

        .header.scrolled {
          padding: 0.75rem 0;
          background: rgba(255, 255, 255, 0.98);
          border-bottom-color: var(--neutral-200);
          box-shadow: var(--shadow-md);
        }

        .header .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          z-index: 1001;
        }

        .logo-img {
          height: 40px;
          width: auto;
          transition: transform var(--transition-normal);
        }

        .logo:hover .logo-img {
          transform: scale(1.05);
        }

        .navbar-wrapper {
          position: relative;
        }

        .navbar-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--primary-green);
          border-radius: var(--radius-md);
          z-index: 1001;
          box-shadow: var(--shadow-sm);
        }

        .navbar-menu-btn:hover {
          background: var(--primary-green-dark);
          transform: scale(1.05);
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 20px;
          height: 16px;
          justify-content: center;
        }

        .hamburger span {
          display: block;
          width: 100%;
          height: 2px;
          background: var(--white);
          border-radius: var(--radius-full);
          transition: all var(--transition-normal);
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        .navbar {
          position: absolute;
          top: calc(100% + 0.5rem);
          right: 0;
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-xl);
          min-width: 280px;
          max-height: 0;
          visibility: hidden;
          opacity: 0;
          overflow: hidden;
          transition: all var(--transition-normal);
          border: 1px solid var(--neutral-200);
        }

        .navbar.active {
          max-height: 400px;
          visibility: visible;
          opacity: 1;
        }

        .navbar-list {
          padding: var(--space-md);
        }

        .nav-item:not(:last-child) {
          border-bottom: 1px solid var(--neutral-100);
        }

        .nav-link {
          display: block;
          padding: var(--space-sm) var(--space-md);
          font-size: var(--fs-5);
          font-weight: var(--fw-500);
          color: var(--neutral-700);
          border-radius: var(--radius-sm);
          transition: all var(--transition-normal);
        }

        .nav-link:hover,
        .nav-link:focus {
          background: var(--accent-green);
          color: var(--primary-green);
          transform: translateX(4px);
        }

        .navbar-cta {
          margin: var(--space-md);
          width: calc(100% - 2rem);
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          .navbar-menu-btn {
            display: none;
          }

          .navbar {
            position: static;
            background: transparent;
            box-shadow: none;
            min-width: auto;
            max-height: none;
            visibility: visible;
            opacity: 1;
            overflow: visible;
            display: flex;
            align-items: center;
            gap: var(--space-lg);
            border: none;
          }

          .navbar-list {
            display: flex;
            align-items: center;
            gap: var(--space-md);
            padding: 0;
          }

          .nav-item:not(:last-child) {
            border-bottom: none;
          }

          .nav-link {
            padding: var(--space-xs) var(--space-sm);
            font-size: var(--fs-6);
            color: var(--neutral-700);
            position: relative;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 50%;
            width: 0;
            height: 2px;
            background: var(--primary-green);
            transition: all var(--transition-normal);
            transform: translateX(-50%);
          }

          .nav-link:hover::after {
            width: 80%;
          }

          .nav-link:hover,
          .nav-link:focus {
            background: transparent;
            color: var(--primary-green);
            transform: none;
          }

          .navbar-cta {
            margin: 0;
            width: auto;
            min-width: 120px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
