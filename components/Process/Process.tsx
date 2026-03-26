'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  SearchOutlined,
  PartitionOutlined,
  CodeOutlined,
  RocketOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';
import styles from './Process.module.css';

const steps = [
  {
    num: '01',
    title: 'Discover & Understand',
    desc: 'We start by listening - understanding your business, goals, challenges, and what success looks like for you before writing a single line of code.',
    icon: <SearchOutlined />,
  },
  {
    num: '02',
    title: 'Plan & Architect',
    desc: 'We design the right solution - tech stack, architecture, timeline, and milestones - so you know exactly what gets built, when, and for how much.',
    icon: <PartitionOutlined />,
  },
  {
    num: '03',
    title: 'Build & Test',
    desc: 'Agile sprints with weekly demos. We build fast, test thoroughly, and keep you in the loop at every stage - no surprises at the finish line.',
    icon: <CodeOutlined />,
  },
  {
    num: '04',
    title: 'Launch & Support',
    desc: 'We deploy your product, handle go-live, and stay with you after - monitoring, maintaining, and improving as your business grows.',
    icon: <RocketOutlined />,
  },
];

export default function Process() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  // Initialize with default value instead of calling function that checks window
  const [marginTop, setMarginTop] = useState('-140px');

  // Handle resize for isMobile/isTablet
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width <= 1024 && width > 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle margin top updates separately
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) setMarginTop('-60px');
      else if (width <= 768) setMarginTop('-80px');
      else setMarginTop('-140px');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="process" className={styles.section} style={{ marginTop }}>
      {/* Background Effects - Conditional for mobile performance */}
      {!isMobile && (
        <>
          <div className={styles.orb1} />
          <div className={styles.orb2} />
        </>
      )}
      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        {/* Section Header - Matching Services Style */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: isMobile ? 40 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
          transition={{ duration: isMobile ? 0.6 : 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className={styles.sectionLabel}>
            <span className={styles.labelLine} />
            <span className={styles.labelText}>How We Work</span>
            <span className={styles.labelLine} />
          </span>
          <h2 className={styles.sectionTitle}>
            Our Simple <span className={styles.gradientText}>4-Step Process</span>
          </h2>
          <p className={styles.sectionSub}>
            A streamlined approach designed to deliver exceptional results on time and within budget
          </p>
        </motion.div>

        {/* Process Steps - Enhanced Cards */}
        <div className={styles.stepsGrid}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className={styles.stepCard}
              initial={{ opacity: 0, y: isMobile ? 40 : 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: isMobile ? "-30px" : "-50px" }}
              transition={{
                delay: 0.2 + i * 0.15,
                duration: isMobile ? 0.6 : 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={!isMobile ? { y: -12, transition: { duration: 0.4 } } : {}}
              whileTap={isMobile ? { scale: 0.98 } : {}}
            >
              {/* Corner Accent */}
              <div className={styles.cornerAccent} />

              {/* Step Number */}
              <div className={styles.stepNumber}>{step.num}</div>

              {/* Icon */}
              <div className={styles.iconWrap}>{step.icon}</div>

              {/* Content */}
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>

              {/* Connector Arrow (except last) - Hidden on mobile/tablet */}
              {!isMobile && !isTablet && i < steps.length - 1 && (
                <div className={styles.connector}>
                  <ArrowRightOutlined />
                </div>
              )}

              {/* Glow Effect */}
              <div className={styles.stepGlow} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <button
            className={styles.ctaButton}
          // whileHover={!isMobile ? { scale: 1.02 } : {}}
          // whileTap={{ scale: 0.98 }}
          >
            <span>Start Your Project</span>
            <ArrowRightOutlined />
          </button>
        </motion.div>
      </div>
    </section>
  );
}