import React, { useState, useEffect } from 'react';
import '../styles/GlobalStyles.css';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`go-top ${isVisible ? 'active' : ''}`}
      onClick={scrollToTop}
      aria-label="Go to top"
    >
      <ion-icon name="chevron-up-outline"></ion-icon>
    </button>
  );

  // Note: The styles are moved to a separate style tag for better organization
  const GoToTopStyles = () => (
    <style jsx>{`
      .go-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 1000;
        width: 50px;
        height: 50px;
        background: var(--gradient-primary);
        box-shadow: var(--shadow-lg);
        display: grid;
        place-items: center;
        border-radius: var(--radius-full);
        color: var(--white);
        font-size: 1.25rem;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: all var(--transition-normal);
        border: none;
        cursor: pointer;
        transform: scale(0.8);
      }

      .go-top.active {
        opacity: 1;
        visibility: visible;
        pointer-events: all;
        transform: scale(1);
      }

      .go-top:hover {
        transform: scale(1.1);
        box-shadow: var(--shadow-xl);
        background: var(--primary-green-dark);
      }

      .go-top:active {
        transform: scale(0.95);
      }

      /* Tablet Styles */
      @media (min-width: 768px) {
        .go-top {
          width: 56px;
          height: 56px;
          font-size: 1.5rem;
        }
      }

      /* Desktop Styles */
      @media (min-width: 1024px) {
        .go-top {
          bottom: 40px;
          right: 40px;
          width: 60px;
          height: 60px;
          font-size: 1.5rem;
        }
      }
    `}</style>
  );
};

export default GoToTop;
