import { motion } from 'framer-motion'; //motion
import { personalInfo, currentlyLearning } from '../../data/portfolioData';
import styles from './About.module.css';

const About = () => {
  const highlights = [
    {
      label: "University",
      value: personalInfo.university,
      icon: "🎓"
    },
    {
      label: "Degree",
      value: personalInfo.degree,
      icon: "📚"
    },
    {
      label: "Year",
      value: personalInfo.year,
      icon: "📅"
    },
    {
      label: "Location",
      value: personalInfo.location,
      icon: "📍"
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <motion.div
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
        </motion.div>

        <div className={styles.aboutContent}>
          <motion.div
            className={styles.aboutImage}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.profileCard}>
              <div className={styles.profileGlowRing}></div>
              <div className={styles.profilePhoto}>
                {/* TODO: Replace with actual profile image */}
                <div className={styles.photoPlaceholder}>
                  <img src="/sunny.jpeg" alt="sunny" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  {/* <span className={styles.photoText}>S</span> */}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.aboutText}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className={styles.aboutSubtitle}>Get To Know Me</h3>
            <p className={styles.aboutDescription}>
              {personalInfo.bio}
            </p>

            <div className={styles.highlightsGrid}>
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className={styles.highlightCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={styles.highlightIcon}>{highlight.icon}</div>
                  <div className={styles.highlightContent}>
                    <span className={styles.highlightLabel}>{highlight.label}</span>
                    <span className={styles.highlightValue}>{highlight.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className={styles.currentlyLearning}>
              <h4 className={styles.learningTitle}>Currently Learning</h4>
              <div className={styles.learningTags}>
                {currentlyLearning.map((skill, index) => (
                  <motion.span
                    key={index}
                    className={styles.learningTag}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              className={styles.aboutCta}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
                Get In Touch
              </a>
              <a href="#contact" className="btn btn-ghost">
                View Contact Info
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;