import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaBars,
  FaTimes 
} from 'react-icons/fa';
import { socialLinks } from '../../data/portfolioData';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <div className={styles.navbarContent}>
            {/* Logo */}
            {/* <div className={styles.navbarLogo}>
              <a href="#home" className={styles.logoLink} onClick={closeMenu}>
                <span className={styles.logoText}>S</span>
              </a>
            </div> */}

            {/* Desktop Navigation */}
            <div className={`${styles.navbarMenu} ${styles.desktopMenu}`}>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop Social Icons */}
            <div className={`${styles.navbarSocial} ${styles.desktopSocial}`}>
              <a href={socialLinks.github} rel="noopener noreferrer" className={styles.socialLink}>
                <FaGithub />
              </a>
              <a href={socialLinks.linkedin} rel="noopener noreferrer" className={styles.socialLink}>
                <FaLinkedin />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaTwitter />
              </a>
              <a href={socialLinks.email} className={styles.socialLink}>
                <FaEnvelope />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className={styles.navbarToggle} onClick={toggleMenu}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenuOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.mobileMenuContent}>
              {/* Mobile Logo */}
              {/* <div className={styles.mobileLogo}>
                <a href="#home" className={styles.logoLink} onClick={closeMenu}>
                  <span className={styles.logoText}>S</span>
                </a>
              </div> */}

              {/* Mobile Navigation */}
              <div className={styles.mobileNav}>
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={toggleMenu}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* Mobile Social Icons */}
              <div className={styles.mobileSocial}>
                <a href={socialLinks.github} rel="noopener noreferrer" className={styles.mobileSocialLink}>
                  <FaGithub />
                </a>
                <a href={socialLinks.linkedin} rel="noopener noreferrer" className={styles.mobileSocialLink}>
                  <FaLinkedin />
                </a>
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink}>
                  <FaTwitter />
                </a>
                <a href={socialLinks.email} className={styles.mobileSocialLink}>
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;