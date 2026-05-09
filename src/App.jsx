import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import OurWork from './components/OurWork';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';
import './styles/GlobalStyles.css';

function App() {
  useEffect(() => {
    // Load ionicons
    const script1 = document.createElement('script');
    script1.type = 'module';
    script1.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
    script2.setAttribute('nomodule', '');
    document.head.appendChild(script2);

    // Update document title
    document.title = 'Funel - Agency landing page';

    // Add favicon
    const link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.href = '/favicon.svg';
    document.head.appendChild(link);

    return () => {
      // Cleanup scripts if needed
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <OurWork />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <GoToTop />
      
      <style jsx global>{`
        /* Additional global styles for the app */
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Remove default margin/padding */
        body {
          margin: 0;
          padding: 0;
          font-family: var(--ff-poppins);
          background: var(--white);
          color: var(--neutral-900);
          overflow-x: hidden;
        }

        /* Add padding top to account for fixed header */
        main {
          padding-top: 80px; /* Adjust based on header height */
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: var(--neutral-100);
        }

        ::-webkit-scrollbar-thumb {
          background: var(--primary-green);
          border-radius: var(--radius-full);
        }

        ::-webkit-scrollbar-thumb:hover {
          background: var(--primary-green-dark);
        }

        /* Selection color */
        ::selection {
          background: var(--accent-green);
          color: var(--neutral-900);
        }

        /* Focus styles for accessibility */
        *:focus-visible {
          outline: 2px solid var(--primary-green);
          outline-offset: 2px;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out;
        }

        /* Responsive adjustments */
        @media (max-width: 1023px) {
          main {
            padding-top: 70px;
          }
        }

        @media (max-width: 767px) {
          main {
            padding-top: 60px;
          }
        }

        /* Loading state */
        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          font-size: var(--fs-4);
          color: var(--primary-green);
        }

        /* Error state */
        .error {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: var(--space-lg);
          text-align: center;
        }

        .error h1 {
          color: var(--neutral-900);
          margin-bottom: var(--space-md);
        }

        .error p {
          color: var(--neutral-600);
          margin-bottom: var(--space-lg);
        }

        /* Utility classes */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .container {
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 var(--container-padding);
        }

        /* Section spacing */
        .section {
          padding: var(--space-3xl) 0;
        }

        /* Text utilities */
        .text-center {
          text-align: center;
        }

        .text-left {
          text-align: left;
        }

        .text-right {
          text-align: right;
        }

        /* Margin utilities */
        .mb-sm { margin-bottom: var(--space-sm); }
        .mb-md { margin-bottom: var(--space-md); }
        .mb-lg { margin-bottom: var(--space-lg); }
        .mb-xl { margin-bottom: var(--space-xl); }
        
        .mt-sm { margin-top: var(--space-sm); }
        .mt-md { margin-top: var(--space-md); }
        .mt-lg { margin-top: var(--space-lg); }
        .mt-xl { margin-top: var(--space-xl); }
      `}</style>
    </div>
  );
}

export default App;
