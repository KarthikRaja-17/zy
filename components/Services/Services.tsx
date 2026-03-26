'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  RobotOutlined,
  CodeOutlined,
  MobileOutlined,
  BulbOutlined,
  ToolOutlined,
  AppstoreOutlined
} from '@ant-design/icons';
import styles from './Services.module.css';

const services = [
  {
    icon: <CodeOutlined />,
    title: 'Custom Software Development',
    desc: 'Tailor-made web apps, enterprise portals, and digital platforms built end-to-end — from architecture to deployment.',
  },
  {
    icon: <MobileOutlined />,
    title: 'Mobile App Development',
    desc: 'Native iOS & Android apps and cross-platform builds that deliver a premium experience on every device.',
  },
  {
    icon: <RobotOutlined />,
    title: 'AI & Automation',
    desc: 'We identify automation opportunities and implement AI-powered workflows that save time and cut operational costs.',
  },
  {
    icon: <BulbOutlined />,
    title: 'IT Consulting & Strategy',
    desc: 'Strategic technology advisory - from architecture decisions to full digital transformation roadmaps.',
  },
  {
    icon: <ToolOutlined />,
    title: 'Managed IT & Support',
    desc: 'Ongoing maintenance, monitoring, and SLA-based support so your systems stay healthy while you focus on growth.',
  },
  {
    icon: <AppstoreOutlined />,
    title: 'SaaS Products',
    desc: 'We build for the world too - ZyFlow, ZyDesk, and ZySync are our own products launching soon for real business problems.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
};

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  // Initialize with default value instead of calling function that checks window
  const [marginTop, setMarginTop] = useState('-120px');

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
      if (width <= 480) setMarginTop('-260px');
      else if (width <= 768) setMarginTop('-280px');
      else setMarginTop('-120px');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="services" className={styles.section} style={{ marginTop }}>
      {/* Section Header */}
      <motion.div
        className={styles.sectionHeader}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
        variants={headerVariants}
        style={{ marginTop: isMobile ? '0px' : '-50px' }}
      >
        <span className={styles.sectionLabel}>What We Offer</span>
        <h2 className={styles.sectionTitle}>
          Our IT-Powered <span className={styles.gradientText}>Services</span>
        </h2>
        <p className={styles.sectionSub}>
          Six focused service lines built to move your business forward with cutting-edge technology
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: isMobile ? "-30px" : "-50px" }}
      >
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className={styles.card}
            variants={cardVariants}
            whileHover={!isMobile ? {
              y: -12,
              transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
            } : {}}
            whileTap={isMobile ? {
              scale: 0.98,
              transition: { duration: 0.2 }
            } : {}}
          >
            {/* Corner Accent */}
            <div className={styles.cornerAccent} />

            {/* Number */}
            <div className={styles.cardNumber}>0{i + 1}</div>

            {/* Icon */}
            <div className={styles.iconWrap}>{service.icon}</div>

            {/* Content */}
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.desc}</p>

            {/* CTA */}
            <div className={styles.cardArrow}>Learn more</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}