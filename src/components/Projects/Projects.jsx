import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <motion.div
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Featured Projects</h2>
        </motion.div>

        <div className={styles.projectsContent}>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={styles.projectCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={styles.projectImage}>
                  {/* TODO: Replace with actual project images */}
                  <div className={styles.projectPlaceholder}>
                    <span className={styles.projectTitleOverlay}>{project.title}</span>
                  </div>
                </div>
                
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  
                  <div className={styles.projectTech}>
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className={styles.projectLinks}>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.projectBtn} btn btn-primary`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.projectBtn} btn btn-secondary`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.projectsCta}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View All Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;