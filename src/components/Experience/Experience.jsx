import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data/portfolioData';
import { FaGraduationCap, FaTrophy, FaCertificate } from 'react-icons/fa';
import styles from './Experience.module.css';

const Experience = () => {
  const getExperienceIcon = (title) => {
    if (title.toLowerCase().includes('intern')) return <FaGraduationCap />;
    if (title.toLowerCase().includes('winner') || title.toLowerCase().includes('hackathon')) return <FaTrophy />;
    if (title.toLowerCase().includes('certification')) return <FaCertificate />;
    return <FaGraduationCap />;
  };

  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <motion.div
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Experience & Achievements</h2>
        </motion.div>

        <div className={styles.experienceContent}>
          <div className={styles.timeline}>
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={styles.timelineMarker}>
                  <div className={styles.markerIcon}>
                    {getExperienceIcon(exp.title)}
                  </div>
                  <div className={styles.markerLine}></div>
                </div>
                
                <div className={styles.timelineContent}>
                  <div className={styles.experienceCard}>
                    <div className={styles.experienceHeader}>
                      <h3 className={styles.experienceTitle}>{exp.title}</h3>
                      <span className={styles.experienceDate}>{exp.date}</span>
                    </div>
                    <h4 className={styles.experienceOrg}>{exp.organization}</h4>
                    <p className={styles.experienceDescription}>{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;