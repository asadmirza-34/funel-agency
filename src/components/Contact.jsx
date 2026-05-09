import React, { useState } from 'react';
import '../styles/GlobalStyles.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
      }, 3000);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="contact-title animate-fade-in-up">
            Let's scale your brand, together
          </h2>

          <figure className="contact-banner animate-slide-in-left">
            <img 
              src="/src/assets/img/contact.png" 
              alt="Contact us illustration" 
              className="contact-image"
            />
          </figure>
        </div>

        <div className="contact-form-wrapper animate-slide-in-right">
          {!isSubmitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="input-wrapper">
                  <label htmlFor="name" className="input-label">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Type Name"
                    className={`input-field ${errors.name ? 'error' : ''}`}
                    required
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="input-wrapper">
                  <label htmlFor="phone" className="input-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Type Phone Number"
                    className="input-field"
                  />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="email" className="input-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Type Email Address"
                    className={`input-field ${errors.email ? 'error' : ''}`}
                    required
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="input-wrapper full-width">
                  <label htmlFor="message" className="input-label">
                    How can we help? *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className={`input-field ${errors.message ? 'error' : ''}`}
                    rows="5"
                    required
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          ) : (
            <div className="success-message">
              <div className="success-icon">
                <ion-icon name="checkmark-circle-outline"></ion-icon>
              </div>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for contacting us. We'll get back to you soon.</p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .contact {
          padding: var(--space-3xl) 0;
          background: var(--white);
        }

        .contact-content {
          text-align: center;
          margin-bottom: var(--space-2xl);
        }

        .contact-title {
          font-size: var(--fs-2);
          font-weight: var(--fw-700);
          color: var(--neutral-900);
          margin-bottom: var(--space-xl);
        }

        .contact-banner {
          margin-bottom: var(--space-xl);
        }

        .contact-image {
          width: 100%;
          max-width: 400px;
          height: auto;
          margin: 0 auto;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          transition: transform var(--transition-slow);
        }

        .contact-image:hover {
          transform: scale(1.02);
        }

        .contact-form-wrapper {
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-form {
          background: var(--neutral-50);
          padding: var(--space-2xl);
          border-radius: var(--radius-xl);
          border: 1px solid var(--neutral-200);
          box-shadow: var(--shadow-lg);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-lg);
          margin-bottom: var(--space-xl);
        }

        .input-wrapper {
          position: relative;
        }

        .input-wrapper.full-width {
          grid-column: 1 / -1;
        }

        .input-label {
          display: block;
          font-size: var(--fs-6);
          font-weight: var(--fw-600);
          color: var(--neutral-700);
          margin-bottom: var(--space-sm);
        }

        .input-field {
          width: 100%;
          padding: var(--space-md);
          background: var(--white);
          border: 2px solid var(--neutral-200);
          border-radius: var(--radius-md);
          font-size: var(--fs-5);
          color: var(--neutral-900);
          transition: all var(--transition-normal);
        }

        .input-field::placeholder {
          color: var(--neutral-400);
        }

        .input-field:focus {
          outline: none;
          border-color: var(--primary-green);
          box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.1);
        }

        .input-field.error {
          border-color: var(--bittersweet);
        }

        .error-message {
          display: block;
          font-size: var(--fs-6);
          color: var(--bittersweet);
          margin-top: var(--space-xs);
          animation: fadeIn 0.3s ease-out;
        }

        .submit-btn {
          width: 100%;
          padding: var(--space-md) var(--space-xl);
          font-size: var(--fs-5);
          font-weight: var(--fw-600);
          border-radius: var(--radius-md);
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left var(--transition-slow);
        }

        .submit-btn:hover::before {
          left: 100%;
        }

        .success-message {
          text-align: center;
          padding: var(--space-2xl);
          background: var(--neutral-50);
          border-radius: var(--radius-xl);
          border: 2px solid var(--primary-green);
          animation: fadeInUp 0.6s ease-out;
        }

        .success-message .success-icon {
          font-size: 3rem;
          color: var(--primary-green);
          margin-bottom: var(--space-md);
          animation: scaleIn 0.5s ease-out;
        }

        .success-message h3 {
          font-size: var(--fs-3);
          font-weight: var(--fw-600);
          color: var(--neutral-900);
          margin-bottom: var(--space-sm);
        }

        .success-message p {
          font-size: var(--fs-5);
          color: var(--neutral-600);
          margin: 0;
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

        /* Tablet Styles */
        @media (min-width: 768px) {
          .contact .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--space-2xl);
            align-items: start;
          }

          .contact-content {
            text-align: left;
            margin-bottom: 0;
          }

          .contact-banner {
            margin-bottom: var(--space-lg);
          }

          .contact-image {
            margin: 0;
          }

          .contact-form-wrapper {
            margin: 0;
          }

          .form-grid {
            grid-template-columns: 1fr 1fr;
          }

          .input-wrapper.full-width {
            grid-column: 1 / -1;
          }
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          .contact-title {
            font-size: var(--fs-2);
          }

          .contact-form {
            padding: var(--space-2xl);
          }

          .input-field {
            padding: var(--space-md);
          }
        }

        /* Large Desktop Styles */
        @media (min-width: 1200px) {
          .contact .container {
            gap: var(--space-3xl);
          }

          .contact-form {
            padding: var(--space-2xl);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
