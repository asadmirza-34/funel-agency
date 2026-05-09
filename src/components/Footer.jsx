import React from 'react';
import '../styles/GlobalStyles.css';

const Footer = () => {
  const footerLinks = {
    company: [
      { href: '#', label: 'About Us' },
      { href: '#', label: 'Features' },
      { href: '#', label: 'Pricing' }
    ],
    products: [
      { href: '#', label: 'Blog' },
      { href: '#', label: 'Help Center' },
      { href: '#', label: 'Contact' }
    ],
    resources: [
      { href: '#', label: 'FAQ\'S' },
      { href: '#', label: 'Testimonial' },
      { href: '#', label: 'Terms & Conditions' }
    ],
    relevant: [
      { href: '#', label: 'Why' },
      { href: '#', label: 'Products' },
      { href: '#', label: 'Customers' }
    ]
  };

  const socialLinks = [
    { href: '#', icon: 'logo-facebook', label: 'Facebook' },
    { href: '#', icon: 'logo-github', label: 'GitHub' },
    { href: '#', icon: 'logo-instagram', label: 'Instagram' },
    { href: '#', icon: 'logo-youtube', label: 'YouTube' }
  ];

  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <a href="#home" className="logo">
                <img 
                  src="/src/assets/img/logo.png" 
                  alt="Funel logo" 
                  className="footer-logo"
                />
              </a>

              <p className="footer-text">Follow us on</p>

              <ul className="social-list">
                {socialLinks.map((social, index) => (
                  <li key={index}>
                    <a 
                      href={social.href} 
                      className="social-link"
                      aria-label={social.label}
                    >
                      <ion-icon name={social.icon}></ion-icon>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-link-box">
              <ul className="footer-link-list">
                <li>
                  <h3 className="link-text">Company</h3>
                </li>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="footer-link-list">
                <li>
                  <h3 className="link-text">Products</h3>
                </li>
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="footer-link-list">
                <li>
                  <h3 className="link-text">Resources</h3>
                </li>
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="footer-link-list">
                <li>
                  <h3 className="link-text">Relevant</h3>
                </li>
                {footerLinks.relevant.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2026 <a href="#">coding asad</a> All right reserved
          </p>
        </div>
      </div>

      <style jsx>{`
        footer {
          background: var(--neutral-50);
          border-top: 1px solid var(--neutral-200);
        }

        .footer-top {
          padding: var(--space-2xl) 0 var(--space-xl);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-xl);
        }

        .footer-brand {
          text-align: center;
        }

        .footer-brand .logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-md);
        }

        .footer-logo {
          height: 40px;
          width: auto;
          transition: transform var(--transition-normal);
        }

        .footer-logo:hover {
          transform: scale(1.05);
        }

        .footer-text {
          font-size: var(--fs-6);
          color: var(--neutral-600);
          margin-bottom: var(--space-md);
          font-weight: var(--fw-500);
        }

        .social-list {
          display: flex;
          justify-content: center;
          gap: var(--space-md);
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--white);
          border: 1px solid var(--neutral-200);
          border-radius: var(--radius-md);
          color: var(--neutral-600);
          font-size: var(--fs-4);
          transition: all var(--transition-normal);
          box-shadow: var(--shadow-sm);
        }

        .social-link:hover {
          background: var(--primary-green);
          color: var(--white);
          border-color: var(--primary-green);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .footer-link-box {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-lg);
        }

        .footer-link-list {
          text-align: center;
        }

        .footer-link-list:not(:last-child) {
          margin-bottom: var(--space-lg);
        }

        .link-text {
          font-size: var(--fs-5);
          font-weight: var(--fw-600);
          color: var(--neutral-900);
          margin-bottom: var(--space-md);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-link {
          display: block;
          font-size: var(--fs-6);
          color: var(--neutral-600);
          margin-bottom: var(--space-sm);
          transition: all var(--transition-normal);
          position: relative;
        }

        .footer-link::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
          background: var(--primary-green);
          transition: width var(--transition-normal);
        }

        .footer-link:hover {
          color: var(--primary-green);
          transform: translateX(4px);
        }

        .footer-link:hover::before {
          width: 100%;
        }

        .footer-bottom {
          padding: var(--space-lg) 0;
          border-top: 1px solid var(--neutral-200);
          background: var(--white);
        }

        .copyright {
          text-align: center;
          font-size: var(--fs-6);
          color: var(--neutral-600);
          margin: 0;
        }

        .copyright a {
          color: var(--primary-green);
          font-weight: var(--fw-600);
          transition: all var(--transition-normal);
        }

        .copyright a:hover {
          color: var(--primary-green-dark);
          text-decoration: underline;
        }

        /* Tablet Styles */
        @media (min-width: 768px) {
          .footer-content {
            grid-template-columns: 2fr 3fr;
            align-items: start;
          }

          .footer-brand {
            text-align: left;
          }

          .social-list {
            justify-content: flex-start;
          }

          .footer-link-box {
            grid-template-columns: repeat(4, 1fr);
            gap: var(--space-lg);
          }

          .footer-link-list {
            text-align: left;
          }
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          .footer-top {
            padding: var(--space-2xl) 0;
          }

          .footer-content {
            gap: var(--space-2xl);
          }

          .footer-link-box {
            gap: var(--space-xl);
          }
        }

        /* Large Desktop Styles */
        @media (min-width: 1200px) {
          .footer-top {
            padding: var(--space-3xl) 0 var(--space-xl);
          }

          .footer-content {
            gap: var(--space-3xl);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
