'use client';
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
  return (
    <section id="process" className={styles.section} style={{ marginTop: '-140px' }}>
      {/* Background Effects - Matching Services/About */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        {/* Section Header - Matching Services Style */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className={styles.sectionLabel}>
            <span className={styles.labelLine} />
            <span>How We Work</span>
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
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: 0.2 + i * 0.15,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ y: -12, transition: { duration: 0.4 } }}
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

              {/* Connector Arrow (except last) */}
              {i < steps.length - 1 && (
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
          <button className={styles.ctaButton}>
            <span>Start Your Project</span>
            <ArrowRightOutlined />
          </button>
        </motion.div>
      </div>
    </section>
  );
}