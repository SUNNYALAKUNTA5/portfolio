import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contact, socialLinks, personalInfo } from '../../data/portfolioData';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // TODO: Implement actual form submission logic here
    // For now, simulate a successful submission
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <motion.div
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>{contact.title}</h2>
          <p className={styles.sectionSubtitle}>{contact.description}</p>
        </motion.div>

        <div className={styles.contactContent}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className={styles.infoCard}>
              <h3>Get In Touch</h3>
              <p className={styles.infoDescription}>
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className={styles.contactDetails}>
                <div className={styles.detailItem}>
                  <FaEnvelope className={styles.detailIcon} />
                  <div>
                    <span className={styles.detailLabel}>Email</span>
                    <a href={`mailto:${personalInfo.email}`} className={styles.detailValue}>
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className={styles.detailItem}>
                  <FaMapMarkerAlt className={styles.detailIcon} />
                  <div>
                    <span className={styles.detailLabel}>Location</span>
                    <span className={styles.detailValue}>{personalInfo.location}</span>
                  </div>
                </div>
                
                <div className={styles.detailItem}>
                  <FaPhone className={styles.detailIcon} />
                  <div>
                    <span className={styles.detailLabel}>Phone</span>
                    <span className={styles.detailValue}>Available on request</span>
                  </div>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <h4>Connect With Me</h4>
                <div className={styles.socialIcons}>
                  <motion.a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.1 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.2 }}
                  >
                    <FaTwitter />
                  </motion.a>
                  <motion.a
                    href={socialLinks.email}
                    className={styles.socialIcon}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.3 }}
                  >
                    <FaEnvelope />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.contactForm}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.formCard}>
              <h3>Send Me a Message</h3>
              <p className={styles.formDescription}>
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className={styles.contactFormElement}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">{contact.formFields.name.label}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={contact.formFields.name.placeholder}
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">{contact.formFields.email.label}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={contact.formFields.email.placeholder}
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">{contact.formFields.message.label}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={contact.formFields.message.placeholder}
                    required
                    rows="5"
                    className={`${styles.formInput} ${styles.formTextarea}`}
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className={`${styles.formSubmit} btn btn-primary`}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {isSubmitting ? 'Sending...' : contact.submitText}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    className={styles.formSuccess}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {contact.successMessage}
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className={styles.formError}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {contact.errorMessage}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;