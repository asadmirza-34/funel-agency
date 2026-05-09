import React from 'react';
import '../styles/GlobalStyles.css';

const Features = () => {
  const features = [
    {
      image: '/src/assets/img/feature-1.png',
      title: 'Cover your everyday expenses',
      description: 'Inspiration comes in many ways and you like to save everything from. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      reversed: false
    },
    {
      image: '/src/assets/img/feature-2.png',
      title: 'We offer low fees that are transparent',
      description: 'Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the development of the asset through its charitable foundation.',
      reversed: true
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title animate-fade-in-up">
            Our team is made up of all different backgrounds from all over the world.
          </h2>
          <p className="section-text animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Each time a digital asset is purchased or sold, Sequoir donates a
            percentage of the fees back into the development of the asset
            through its charitable foundation.
          </p>
        </div>

        <div className="features-list">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`features-item ${feature.reversed ? 'reversed' : ''} animate-fade-in-up`}
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <figure className="features-item-banner">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="features-image"
                />
              </figure>

              <div className="features-item-content">
                <h3 className="item-title">
                  {feature.title}
                </h3>
                <p className="item-text">
                  {feature.description}
                </p>
                <button className="btn btn-primary">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .features {
          padding: var(--space-3xl) 0;
          background: var(--white);
        }

        .features-header {
          text-align: center;
          margin-bottom: var(--space-3xl);
        }

        .features-header .section-title {
          color: var(--neutral-900);
          margin-bottom: var(--space-md);
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .features-header .section-text {
          max-width: 600px;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-3xl);
        }

        .features-item {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-xl);
          align-items: center;
          background: var(--neutral-50);
          padding: var(--space-2xl);
          border-radius: var(--radius-xl);
          border: 1px solid var(--neutral-200);
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        .features-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--gradient-primary);
          opacity: 0;
          transition: opacity var(--transition-normal);
          z-index: 0;
        }

        .features-item:hover::before {
          opacity: 0.03;
        }

        .features-item:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
          border-color: var(--primary-green);
        }

        .features-item-banner {
          order: 2;
          position: relative;
          z-index: 1;
        }

        .features-item-content {
          order: 1;
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .features-item.reversed .features-item-banner {
          order: 1;
        }

        .features-item.reversed .features-item-content {
          order: 2;
        }

        .features-image {
          width: 100%;
          max-width: 350px;
          height: auto;
          margin: 0 auto;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          transition: transform var(--transition-slow);
        }

        .features-image:hover {
          transform: scale(1.05);
        }

        .item-title {
          font-size: var(--fs-2);
          font-weight: var(--fw-700);
          color: var(--neutral-900);
          margin-bottom: var(--space-md);
          line-height: 1.3;
        }

        .item-text {
          font-size: var(--fs-5);
          color: var(--neutral-600);
          line-height: 1.7;
          margin-bottom: var(--space-xl);
        }

        /* Tablet Styles */
        @media (min-width: 768px) {
          .features-item {
            grid-template-columns: 1fr 1fr;
            padding: var(--space-2xl);
            gap: var(--space-2xl);
          }

          .features-item-banner {
            order: 1;
          }

          .features-item-content {
            order: 2;
            text-align: left;
          }

          .features-item.reversed .features-item-banner {
            order: 2;
          }

          .features-item.reversed .features-item-content {
            order: 1;
            text-align: right;
          }

          .features-image {
            margin: 0;
          }

          .features-item.reversed .features-image {
            margin-left: auto;
            margin-right: 0;
          }
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          .features {
            padding: var(--space-3xl) 0;
          }

          .features-item {
            padding: var(--space-3xl);
            gap: var(--space-3xl);
          }

          .features-item-banner {
            max-width: 400px;
          }

          .features-item-content {
            max-width: 500px;
          }

          .features-item.reversed .features-item-content {
            margin-left: auto;
          }

          .item-title {
            font-size: var(--fs-2);
          }

          .item-text {
            font-size: var(--fs-4);
          }
        }

        /* Large Desktop Styles */
        @media (min-width: 1200px) {
          .features-item {
            gap: var(--space-3xl);
          }

          .features-item-banner {
            max-width: 450px;
          }

          .features-item-content {
            max-width: 600px;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
