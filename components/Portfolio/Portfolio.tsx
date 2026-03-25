'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRightOutlined,
  ThunderboltOutlined,
  RobotOutlined,
  AppstoreOutlined,
  GlobalOutlined
} from '@ant-design/icons';
import styles from './Portfolio.module.css';

const projects = [
  {
    id: 1,
    title: 'ZyFlow',
    category: 'Automation',
    result: 'No-code workflow automation that connects your tools and eliminates manual work - built for SMBs.',
    icon: <ThunderboltOutlined />,
    gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(124, 58, 237, 0.1))',
  },
  {
    id: 2,
    title: 'ZyDesk',
    category: 'AI Support',
    result: 'AI-powered helpdesk with smart ticket routing, auto-reply suggestions, and a no-code chatbot builder.',
    icon: <RobotOutlined />,
    gradient: 'linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(139, 92, 246, 0.1))',
  },
  {
    id: 3,
    title: 'ZySync',
    category: 'Productivity',
    result: 'Lightweight project management for teams - Kanban, Gantt, built-in chat, and AI task suggestions in one app.',
    icon: <AppstoreOutlined />,
    gradient: 'linear-gradient(135deg, rgba(196, 181, 253, 0.2), rgba(139, 92, 246, 0.1))',
  },
];

const categories = ['All', 'Automation', 'AI Support', 'Productivity'];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className={styles.section} style={{ marginTop: '-140px' }}>
      {/* Background Effects - Matching Other Sections */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        {/* Section Header - Matching Services/About/Process Style */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className={styles.sectionLabel}>
            <span className={styles.labelLine} />
            <span>What We're Building</span>
            <span className={styles.labelLine} />
          </span>
          <h2 className={styles.sectionTitle}>
            Our <span className={styles.gradientText}>Products</span>
          </h2>
          <p className={styles.sectionSub}>
            Innovative solutions designed to transform how businesses operate
          </p>
        </motion.div>

        {/* Filter Buttons - Enhanced Style */}
        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className={styles.projectsGrid}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className={styles.card}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ y: -12, transition: { duration: 0.4 } }}
              >
                {/* Background Gradient */}
                <div
                  className={styles.cardBg}
                  style={{ background: project.gradient }}
                />

                {/* Corner Accent */}
                <div className={styles.cornerAccent} />

                {/* Card Number */}
                <div className={styles.cardNumber}>0{project.id}</div>

                {/* Icon */}
                <div className={styles.iconWrap}>{project.icon}</div>

                {/* Content */}
                <div className={styles.cardContent}>
                  <span className={styles.catTag}>{project.category}</span>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardResult}>{project.result}</p>
                  <div className={styles.viewLink}>
                    <span>Learn More</span>
                    <ArrowRightOutlined className={styles.arrowIcon} />
                  </div>
                </div>

                {/* Hover Glow */}
                <div className={styles.cardGlow} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button className={styles.ctaButton}>
            <GlobalOutlined />
            <span>View All Projects</span>
            <ArrowRightOutlined />
          </button>
        </motion.div>
      </div>
    </section>
  );
}