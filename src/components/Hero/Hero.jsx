import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import styles from './Hero.module.css';

const Hero = () => {
  const roles = [
    "AI/ML Dev",
    2000,
    "Full Stack Dev",
    2000,
    "Problem Solver",
    2000,
    "Tech Enthusiast",
    2000
  ];

  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          {/* Animated Background Blobs */}
          <div className={styles.heroBlobs}>
            <div className={`${styles.blob} ${styles.blob1}`}></div>
            <div className={`${styles.blob} ${styles.blob2}`}></div>
            <div className={`${styles.blob} ${styles.blob3}`}></div>
          </div>

          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className={styles.heroTitle}>
              Hi, I'm <span className={styles.highlight}>{personalInfo.name}</span> 👋
            </h1>

            <div className={styles.heroSubtitle}>
              <span className={styles.subtitleText}>I'm a </span>
              <TypeAnimation
                sequence={roles}
                wrapper="span"
                speed={50}
                style={{
                  color: '#7c3aed',
                  fontWeight: '800',
                  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                  background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                  whiteSpace: 'nowrap'
                }}
                repeat={Infinity}
              />
            </div>

            <p className={styles.heroDescription}>
              {personalInfo.bio}
            </p>

            <div className={styles.heroActions}>
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                View My Work
              </motion.a>

              <motion.a
                href={personalInfo.resumeUrl}
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              >
                Download Resume
              </motion.a>
            </div>

            <div className={styles.heroSocial}>
              <span className={styles.socialLabel}>Find me on:</span>
              <div className={styles.socialIcons}>
                <motion.a
                  href={socialLinks.github}
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
          </motion.div>

          <motion.div
            className={styles.heroImage}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={styles.profileCircle}>
              <div className={styles.profileGlow}></div>
              <div className={styles.profileAvatar}>
                {/* TODO: Replace with actual profile image */}
                <div className={styles.avatarPlaceholder}>
                  <img src="/sunny.jpeg" alt="sunny" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  {/* <span className={styles.avatarText}>S</span> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;