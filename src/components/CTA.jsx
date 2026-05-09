import React, { useState } from 'react';
import '../styles/GlobalStyles.css';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsSubmitted(false);
  };

  return (
    <section className="cta">
      <div className="container">
        <div className="cta-card animate-fade-in-up">
          <h3 className="cta-title">Try for 7 days free</h3>
          <p className="cta-text">
            Each time a digital asset is purchased or sold, Sequoir donates
            a percentage of the fees back.
          </p>

          {!isSubmitted ? (
            <form className="cta-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Your email address"
                  className="cta-input"
                  required
                />
                <button type="submit" className="btn btn-secondary cta-btn">
                  Try It Now
                </button>
              </div>
            </form>
          ) : (
            <div className="success-message">
              <div className="success-icon">
                <ion-icon name="checkmark-circle-outline"></ion-icon>
              </div>
              <p>Thank you! Check your email for further instructions.</p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .cta {
          padding: var(--space-3xl) 0;
          background: var(--neutral-50);
        }

        .cta-card {
          background: var(--gradient-primary);
          padding: var(--space-3xl);
          border-radius: var(--radius-xl);
          text-align: center;
          box-shadow: var(--shadow-2xl);
          position: relative;
          overflow: hidden;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }

        .cta-title {
          color: var(--white);
          font-size: var(--fs-1);
          font-weight: var(--fw-700);
          line-height: 1.3;
          margin-bottom: var(--space-md);
          position: relative;
          z-index: 1;
        }

        .cta-text {
          color: rgba(255, 255, 255, 0.9);
          font-size: var(--fs-5);
          margin-bottom: var(--space-xl);
          position: relative;
          z-index: 1;
        }

        .cta-form {
          position: relative;
          z-index: 1;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          max-width: 500px;
          margin: 0 auto;
        }

        .cta-input {
          background: rgba(255, 255, 255, 0.95);
          color: var(--neutral-900);
          padding: var(--space-md) var(--space-lg);
          border-radius: var(--radius-lg);
          font-size: var(--fs-5);
          border: 2px solid transparent;
          transition: all var(--transition-normal);
          backdrop-filter: blur(10px);
        }

        .cta-input::placeholder {
          color: var(--neutral-500);
        }

        .cta-input:focus {
          outline: none;
          border-color: var(--white);
          background: var(--white);
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);
        }

        .cta-btn {
          background: var(--white);
          color: var(--primary-green);
          border: 2px solid var(--white);
          font-weight: var(--fw-600);
          padding: var(--space-md) var(--space-xl);
          border-radius: var(--radius-lg);
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        .cta-btn:hover {
          background: transparent;
          color: var(--white);
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .cta-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left var(--transition-slow);
        }

        .cta-btn:hover::before {
          left: 100%;
        }

        .success-message {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-md);
          color: var(--white);
          position: relative;
          z-index: 1;
          animation: fadeInUp 0.6s ease-out;
        }

        .success-icon {
          font-size: 3rem;
          color: var(--white);
          animation: scaleIn 0.5s ease-out;
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .success-message p {
          font-size: var(--fs-5);
          margin: 0;
          opacity: 0.95;
        }

        /* Tablet Styles */
        @media (min-width: 768px) {
          .cta-card {
            padding: var(--space-3xl) var(--space-2xl);
          }

          .input-group {
            flex-direction: row;
            align-items: stretch;
          }

          .cta-input {
            border-radius: var(--radius-lg) 0 0 var(--radius-lg);
            border-right: none;
          }

          .cta-btn {
            border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
            border-left: none;
            min-width: 140px;
          }
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          .cta-card {
            padding: var(--space-3xl) var(--space-2xl);
          }

          .cta-title {
            font-size: clamp(2.5rem, 4vw, 3rem);
          }

          .cta-text {
            font-size: var(--fs-4);
            margin-bottom: 2rem;
          }
        }

        /* Large Desktop Styles */
        @media (min-width: 1200px) {
          .cta-card {
            padding: var(--space-3xl);
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;
