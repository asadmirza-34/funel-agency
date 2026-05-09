import React from 'react';
import '../styles/GlobalStyles.css';

const About = () => {
  const services = [
    {
      icon: 'briefcase',
      title: 'Paid Search and Social Management',
      description: 'Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the development of the asset through its charitable foundation.'
    },
    {
      icon: 'chatbubbles',
      title: 'Direct Response Content',
      description: 'Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the development of the asset through its charitable foundation.'
    },
    {
      icon: 'rocket',
      title: 'CRO and Retention Optimizations',
      description: 'Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the development of the asset through its charitable foundation.'
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-top">
          <h2 className="section-title animate-fade-in-up">
            What we do
          </h2>
          <p className="section-text animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Each time a digital asset is purchased or sold, Sequoir donates
            a percentage of the fees back into the development of the asset
            through its charitable foundation.
          </p>

          <div className="about-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="about-card animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="card-icon">
                  <ion-icon name={`${service.icon}-outline`}></ion-icon>
                </div>
                <h3 className="card-title">
                  {service.title}
                </h3>
                <p className="card-text">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-bottom">
          <div className="about-bottom-content">
            <figure className="about-bottom-banner animate-slide-in-left">
              <img 
                src="/src/assets/img/about-banner.png" 
                alt="About us illustration" 
                className="about-banner-img"
              />
            </figure>

            <div className="about-bottom-text animate-slide-in-right">
              <h2 className="section-title">
                We're obsessed with growth
              </h2>
              <p className="section-text text-left">
                Each time a digital asset is purchased or sold, Sequoir
                donates a percentage of the fees back into the development of
                the asset through its charitable foundation.
              </p>
              <button className="btn btn-secondary">
                Sign Up For Free
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          position: relative;
          background: linear-gradient(135deg, var(--accent-green-light) 0%, var(--white) 100%);
          padding: var(--space-3xl) 0;
          overflow: hidden;
        }

        .about::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('/src/assets/img/about-bg.png') no-repeat center;
          background-size: cover;
          opacity: 0.05;
          z-index: 0;
        }

        .about .container {
          position: relative;
          z-index: 1;
        }

        .about-top {
          text-align: center;
          margin-bottom: var(--space-3xl);
        }

        .about-top .section-title {
          color: var(--neutral-900);
          margin-bottom: var(--space-md);
        }

        .about-top .section-text {
          max-width: 700px;
          margin-bottom: var(--space-2xl);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-lg);
          margin-top: var(--space-2xl);
        }

        .about-card {
          background: var(--white);
          padding: var(--space-xl);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--neutral-200);
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        .about-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-primary);
          transform: scaleX(0);
          transition: transform var(--transition-normal);
        }

        .about-card:hover::before {
          transform: scaleX(1);
        }

        .about-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-2xl);
        }

        .about-card .card-icon {
          margin-bottom: var(--space-lg);
          background: var(--gradient-primary);
          color: var(--white);
          font-size: 2rem;
          width: 70px;
          height: 70px;
          margin-left: auto;
          margin-right: auto;
        }

        .about-card .card-title {
          font-size: var(--fs-3);
          font-weight: var(--fw-600);
          color: var(--neutral-900);
          margin-bottom: var(--space-md);
          line-height: 1.3;
        }

        .about-card .card-text {
          color: var(--neutral-600);
          line-height: 1.7;
          font-size: var(--fs-5);
        }

        .about-bottom {
          margin-top: var(--space-3xl);
        }

        .about-bottom-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-2xl);
          align-items: center;
        }

        .about-bottom-banner {
          order: 2;
        }

        .about-banner-img {
          width: 100%;
          height: auto;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          transition: transform var(--transition-slow);
        }

        .about-banner-img:hover {
          transform: scale(1.02);
        }

        .about-bottom-text {
          order: 1;
          text-align: center;
        }

        .about-bottom-text .section-title {
          color: var(--neutral-900);
          margin-bottom: var(--space-md);
        }

        .about-bottom-text .section-text {
          margin-bottom: var(--space-xl);
        }

        .text-left {
          text-align: left;
        }

        /* Tablet Styles */
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-xl);
          }

          .about-bottom-content {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-2xl);
          }

          .about-bottom-banner {
            order: 1;
          }

          .about-bottom-text {
            order: 2;
            text-align: left;
          }
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-xl);
          }

          .about-card {
            padding: var(--space-2xl);
          }

          .about-bottom-content {
            gap: var(--space-3xl);
          }
        }

        /* Large Desktop Styles */
        @media (min-width: 1200px) {
          .about-top .section-text {
            font-size: var(--fs-4);
          }

          .about-bottom-text .section-text {
            font-size: var(--fs-4);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
