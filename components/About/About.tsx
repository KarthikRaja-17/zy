'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  CheckCircleFilled,
  ArrowRightOutlined,
  GlobalOutlined,
  RocketOutlined,
  ThunderboltOutlined,
  CodeOutlined,
  MobileOutlined,
  RobotOutlined,
  BulbOutlined
} from '@ant-design/icons';
import styles from './About.module.css';

const features = [
  { icon: <CheckCircleFilled />, text: 'Services-first approach' },
  { icon: <CheckCircleFilled />, text: 'Full-stack team' },
  { icon: <CheckCircleFilled />, text: 'Transparent communication' },
  { icon: <CheckCircleFilled />, text: 'Built for scale' },
];

const stats = [
  { value: 3, suffix: '', label: 'Products', icon: <RocketOutlined /> },
  { value: 24, suffix: 'h', label: 'Response', icon: <ThunderboltOutlined /> },
  { value: 5, suffix: '+', label: 'Services', icon: <GlobalOutlined /> },
  { value: 100, suffix: '%', label: 'Commitment', icon: <CheckCircleFilled /> },
];

const skills = [
  { name: 'Custom Software', value: 95, icon: <CodeOutlined /> },
  { name: 'Mobile Apps', value: 90, icon: <MobileOutlined /> },
  { name: 'AI Automation', value: 88, icon: <RobotOutlined /> },
  { name: 'IT Consulting', value: 92, icon: <BulbOutlined /> },
];

// Counter hook
function useCounter(target: number, isActive: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isActive) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isActive, target]);
  return count;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className={styles.section} ref={ref} style={{ marginTop: '-120px' }}>
      {/* Background Effects - Matching Hero/Services */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />
      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        {/* CENTERED CONTENT */}
        <motion.div
          className={styles.centerContent}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Premium Label - Matching Services Style */}
          <motion.div
            className={styles.sectionLabel}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.labelLine} />
            <span className={styles.labelText}>About Zyvora</span>
            <span className={styles.labelLine} />
          </motion.div>

          {/* Main Title - Space Grotesk Display */}
          <h2 className={styles.sectionTitle}>
            We Build Technology
            <br />
            that <span className={styles.gradientText}>Solves Real Problems</span>
          </h2>

          {/* Description */}
          <p className={styles.sectionSub}>
            Zyvora is a next-generation technology company helping businesses build,
            scale, and lead through smart software. We combine deep technical expertise
            with a client-first mindset to deliver lasting impact.
          </p>

          {/* Feature Tags - Enhanced Glass Cards */}
          <div className={styles.featureTags}>
            {features.map((f, i) => (
              <motion.div
                key={i}
                className={styles.tag}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <span className={styles.tagIcon}>{f.icon}</span>
                <span className={styles.tagText}>{f.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button - Matching Services */}
          <motion.button
            className={styles.ctaButton}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explore Our Services</span>
            <ArrowRightOutlined className={styles.ctaIcon} />
          </motion.button>
        </motion.div>

        {/* Stats Grid - Premium Cards */}
        {/* <motion.div
          className={styles.statsGrid}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className={styles.statCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className={styles.cornerAccent} />
              <div className={styles.statNumber}>0{i + 1}</div>
              <div className={styles.iconWrap}>{stat.icon}</div>
              <div className={styles.statContent}>
                <span className={styles.statValue}>
                  {useCounter(stat.value, isInView)}
                  <span className={styles.statSuffix}>{stat.suffix}</span>
                </span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
              <div className={styles.statGlow} />
            </motion.div>
          ))}
        </motion.div> */}

        {/* Skills Section - Enhanced Glass Card */}
        <motion.div
          className={styles.skillsSection}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.skillsHeader}>
            <div className={styles.sectionLabel}>
              <span className={styles.labelLine} />
              <span>Core Expertise</span>
              <span className={styles.labelLine} />
            </div>
            <h3 className={styles.skillsTitle}>Technical Capabilities</h3>
          </div>

          <div className={styles.skillsGrid}>
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className={styles.skillItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
              >
                <div className={styles.skillHeader}>
                  <div className={styles.skillIconWrap}>{skill.icon}</div>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillValue}>{skill.value}%</span>
                  </div>
                </div>
                <div className={styles.skillBarTrack}>
                  <motion.div
                    className={styles.skillBarFill}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.value}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.7 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}