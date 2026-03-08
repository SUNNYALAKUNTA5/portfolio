import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { socialLinks } from '../../data/portfolioData';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <motion.div
          className={styles.footerContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.footerMain}>
            <div className={styles.footerBrand}>
              <h3 className={styles.footerTitle}>Sunny</h3>
              <p className={styles.footerSubtitle}>AI/ML Engineer & Full Stack Developer</p>
            </div>
            
            <div className={styles.footerQuickLinks}>
              <h4 className={styles.quickLinksTitle}>Quick Links</h4>
              <div className={styles.quickLinksGrid}>
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    className={styles.quickLink}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className={styles.footerSocial}>
              <h4 className={styles.socialTitle}>Connect</h4>
              <div className={styles.socialLinks}>
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
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
                  className={styles.socialLink}
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
                  className={styles.socialLink}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.2 }}
                >
                  <FaTwitter />
                </motion.a>
                <motion.a
                  href={socialLinks.email}
                  className={styles.socialLink}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.3 }}
                >
                  <FaEnvelope />
                </motion.a>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <div className={styles.footerCopyright}>
              <p>&copy; {currentYear} Sunny. Built with ❤️ using React & CSS Modules.</p>
            </div>
            
            <div className={styles.footerCredits}>
              <p>Made with passion for coding and innovation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;