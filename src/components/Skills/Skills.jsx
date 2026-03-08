import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/portfolioData';
import { 
  FaPython, FaReact, FaNodeJs, FaDocker, FaLinux, FaFigma, FaGitAlt,
  FaJs, FaCss3, FaHtml5, FaBrain, FaCode, FaEye, FaCodeBranch, FaCodepen
} from 'react-icons/fa';
import styles from './Skills.module.css';

const Skills = () => {
  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'FaPython': return <FaPython />;
      case 'FaReact': return <FaReact />;
      case 'FaNodeJs': return <FaNodeJs />;
      case 'FaDocker': return <FaDocker />;
      case 'FaLinux': return <FaLinux />;
      case 'FaFigma': return <FaFigma />;
      case 'FaGitAlt': return <FaGitAlt />;
      case 'FaC': return <FaCodepen />;
      case 'FaJs': return <FaJs />;
      case 'FaCss3': return <FaCss3 />;
      case 'FaHtml5': return <FaHtml5 />;
      case 'FaBrain': return <FaBrain />;
      case 'FaCode': return <FaCode />;
      case 'FaEye': return <FaEye />;
      case 'FaCodeBranch': return <FaCodeBranch />;
      default: return <FaCode />;
    }
  };

  const skillCategories = [
    {
      id: 'languages',
      title: 'Languages',
      skills: skills.languages,
      gradient: 'linear-gradient(135deg, #f59e0b, #ec4899)'
    },
    {
      id: 'frameworks',
      title: 'Frameworks',
      skills: skills.frameworks,
      gradient: 'linear-gradient(135deg, #3b82f6, #7c3aed)'
    },
    {
      id: 'ai_ml',
      title: 'AI/ML',
      skills: skills.ai_ml,
      gradient: 'linear-gradient(135deg, #06b6d4, #10b981)'
    },
    {
      id: 'tools',
      title: 'Tools',
      skills: skills.tools,
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <motion.div
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Skills & Expertise</h2>
        </motion.div>

        <div className={styles.skillsContent}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className={styles.skillCategory}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className={styles.categoryHeader}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <div className={styles.categoryLine}></div>
              </div>
              
              <div className={styles.skillsGrid}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillCard}
                    style={{ '--gradient-color': category.gradient }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={styles.skillIcon}>
                      {getSkillIcon(skill.icon)}
                    </div>
                    <div className={styles.skillInfo}>
                      <h4 className={styles.skillName}>{skill.name}</h4>
                      <span className={styles.skillLevel}>{skill.level}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;