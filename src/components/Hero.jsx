import React from 'react';
import '../styles/GlobalStyles.css';
import heroBanner from '../assets/img/hero-banner.png'
import bgShape from '../assets/img/bg.png'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in-up">
            Your full-funel growth agency
          </h1>
          <p className="hero-text animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Capture and retrieve your lists across devices to help you stay
            organized at work, home, and on the go.
          </p>
          <div className="hero-buttons animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button className="btn btn-primary">
              Get started
            </button>
            <button className="btn btn-secondary">
              Learn more
            </button>
          </div>
        </div>

        <div className="hero-banner animate-slide-in-right">
          <img 
            src={heroBanner}
            alt="Hero illustration" 
            className="hero-image"
          />
        </div>
      </div>

      <div className="hero-shape">
        <img 
          src={heroBanner} 
          alt="Background shape" 
          className="shape-content"
        />
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          padding: calc(100px + 4rem) 0 var(--space-3xl);
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: var(--gradient-hero);
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, var(--accent-green) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, var(--primary-green) 0%, transparent 50%);
          opacity: 0.1;
          z-index: 0;
        }

        .hero .container {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-3xl);
          align-items: center;
        }

        .hero-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: var(--fs-1);
          font-weight: var(--fw-700);
          color: var(--neutral-900);
          margin-bottom: var(--space-lg);
          line-height: 1.2;
        }

        .hero-text {
          font-size: var(--fs-4);
          color: var(--neutral-600);
          margin-bottom: var(--space-xl);
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          gap: var(--space-md);
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-banner {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image {
          width: 100%;
          max-width: 400px;
          height: auto;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1));
          transition: transform var(--transition-slow);
        }

        .hero-image:hover {
          transform: scale(1.05) translateY(-10px);
        }

        .hero-shape {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .shape-content {
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        /* Tablet Styles */
        @media (min-width: 768px) {
          .hero {
            padding: calc(120px + 4rem) 0 var(--space-3xl);
          }

          .hero .container {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-2xl);
          }

          .hero-content {
            text-align: left;
            margin: 0;
          }

          .hero-buttons {
            justify-content: flex-start;
          }

          .hero-banner {
            justify-content: flex-end;
          }

          .hero-image {
            max-width: 450px;
          }
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          .hero {
            padding: calc(140px + 4rem) 0 var(--space-3xl);
          }

          .hero-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
          }

          .hero-text {
            font-size: var(--fs-4);
            margin-bottom: 2rem;
          }

          .hero-image {
            max-width: 500px;
          }

          .shape-content {
            width: 800px;
            height: 800px;
            top: -300px;
            right: -300px;
          }
        }

        /* Large Desktop Styles */
        @media (min-width: 1200px) {
          .hero .container {
            gap: var(--space-3xl);
          }

          .hero-image {
            max-width: 600px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
