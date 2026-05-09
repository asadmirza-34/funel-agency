import React, { useState } from 'react';
import '../styles/GlobalStyles.css';
import portfolioProject1 from '../assets/img/portfolio_project_1.jpg';
import portfolioProject3 from '../assets/img/portfolio_project_3.png';
import portfolioProject4 from '../assets/img/portfolio_project_4.jpg';

const OurWork = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with seamless user experience and advanced analytics dashboard for tracking sales performance.',
      image: portfolioProject1,
      category: 'web',
      liveDemo: 'https://example.com/demo1',
      github: 'https://github.com/example/project1',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Secure and intuitive mobile banking application with biometric authentication and real-time transaction monitoring.',
      image: '/src/assets/img/portfolio_project_4.jpg',
      category: 'mobile',
      liveDemo: 'https://example.com/demo2',
      github: 'https://github.com/example/project2',
      technologies: ['React Native', 'Firebase', 'Stripe']
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      description: 'Comprehensive SaaS platform with multi-tenant architecture, advanced analytics, and automated reporting features.',
      image: '/src/assets/img/portfolio_project_3.png',
      category: 'web',
      liveDemo: 'https://example.com/demo3',
      github: 'https://github.com/example/project3',
      technologies: ['Vue.js', 'Python', 'PostgreSQL']
    },
      ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="our-work" id="work">
      <div className="container">
        <div className="work-header">
          <h2 className="section-title animate-fade-in-up">
            Our Work
          </h2>
          <p className="section-text animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Explore our portfolio of innovative digital solutions that have helped businesses transform their online presence and achieve remarkable growth.
          </p>
        </div>

        <div className="work-filters animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="work-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="work-card animate-fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="work-card-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="work-card-content">
                <h3 className="project-title">
                  {project.title}
                </h3>
                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="project-links">
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <ion-icon name="eye-outline"></ion-icon>
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <ion-icon name="logo-github"></ion-icon>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="work-cta animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="cta-title">Have a project in mind?</h3>
          <p className="cta-text">
            Let's work together to bring your ideas to life and create something amazing.
          </p>
          <button className="btn btn-primary">
            Start Your Project
          </button>
        </div>
      </div>

      <style jsx>{`
        .our-work {
          padding: var(--space-3xl) 0;
          background: linear-gradient(135deg, var(--accent-green-light) 0%, var(--white) 100%);
          position: relative;
          overflow: hidden;
        }

        .our-work::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 20%, var(--primary-green) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, var(--accent-green) 0%, transparent 50%);
          opacity: 0.05;
          z-index: 0;
        }

        .our-work .container {
          position: relative;
          z-index: 1;
        }

        .work-header {
          text-align: center;
          margin-bottom: var(--space-3xl);
        }

        .work-header .section-title {
          color: var(--neutral-900);
          margin-bottom: var(--space-md);
        }

        .work-header .section-text {
          max-width: 700px;
          margin: 0 auto var(--space-2xl);
        }

        .work-filters {
          display: flex;
          justify-content: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-3xl);
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: var(--space-sm) var(--space-lg);
          border: 2px solid var(--neutral-300);
          background: var(--white);
          color: var(--neutral-700);
          border-radius: var(--radius-full);
          font-size: var(--fs-6);
          font-weight: var(--fw-500);
          cursor: pointer;
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        .filter-btn:hover {
          border-color: var(--primary-green);
          color: var(--primary-green);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .filter-btn.active {
          background: var(--gradient-primary);
          color: var(--white);
          border-color: var(--primary-green);
          box-shadow: var(--shadow-lg);
        }

        .work-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-xl);
          margin-bottom: var(--space-3xl);
        }

        .work-card {
          background: var(--white);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--neutral-200);
          transition: all var(--transition-normal);
          position: relative;
        }

        .work-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-2xl);
          border-color: var(--primary-green);
        }

        .work-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-primary);
          transform: scaleX(0);
          transition: transform var(--transition-normal);
          z-index: 2;
        }

        .work-card:hover::before {
          transform: scaleX(1);
        }

        .work-card-image {
          position: relative;
          overflow: hidden;
          height: 250px;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .work-card:hover .project-image {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
          opacity: 0;
          transition: opacity var(--transition-normal);
          display: flex;
          align-items: flex-end;
          padding: var(--space-lg);
        }

        .work-card:hover .image-overlay {
          opacity: 1;
        }

        .overlay-content {
          width: 100%;
        }

        .tech-tags {
          display: flex;
          gap: var(--space-xs);
          flex-wrap: wrap;
        }

        .tech-tag {
          background: var(--primary-green);
          color: var(--white);
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-full);
          font-size: var(--fs-6);
          font-weight: var(--fw-500);
        }

        .work-card-content {
          padding: var(--space-xl);
        }

        .project-title {
          font-size: var(--fs-3);
          font-weight: var(--fw-700);
          color: var(--neutral-900);
          margin-bottom: var(--space-md);
          line-height: 1.3;
        }

        .project-description {
          font-size: var(--fs-5);
          color: var(--neutral-600);
          line-height: 1.7;
          margin-bottom: var(--space-xl);
        }

        .project-links {
          display: flex;
          gap: var(--space-sm);
          flex-wrap: wrap;
        }

        .btn-sm {
          padding: var(--space-xs) var(--space-md);
          font-size: var(--fs-6);
          gap: var(--space-xs);
        }

        .work-cta {
          text-align: center;
          background: var(--white);
          padding: var(--space-3xl);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--neutral-200);
          position: relative;
          overflow: hidden;
        }

        .work-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--gradient-primary);
          opacity: 0.03;
        }

        .work-cta .cta-title {
          font-size: var(--fs-2);
          font-weight: var(--fw-700);
          color: var(--neutral-900);
          margin-bottom: var(--space-md);
          position: relative;
          z-index: 1;
        }

        .work-cta .cta-text {
          font-size: var(--fs-4);
          color: var(--neutral-600);
          margin-bottom: var(--space-xl);
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          z-index: 1;
        }

        /* Tablet Styles */
        @media (min-width: 768px) {
          .work-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-xl);
          }

          .work-card-image {
            height: 200px;
          }

          .project-links {
            justify-content: flex-start;
          }
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          .work-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-xl);
          }

          .work-card-image {
            height: 220px;
          }

          .work-card-content {
            padding: var(--space-xl);
          }

          .project-title {
            font-size: var(--fs-3);
          }

          .project-description {
            font-size: var(--fs-5);
          }
        }

        /* Large Desktop Styles */
        @media (min-width: 1200px) {
          .work-grid {
            gap: var(--space-2xl);
          }

          .work-card-image {
            height: 240px;
          }
        }

        /* Animation for filter buttons */
        .filter-btn::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .filter-btn:active::after {
          width: 300px;
          height: 300px;
        }
      `}</style>
    </section>
  );
};

export default OurWork;
