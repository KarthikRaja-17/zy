'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  RobotOutlined,
  CodeOutlined,
  MobileOutlined,
  ReadOutlined,
  ProjectOutlined,
  GlobalOutlined
} from '@ant-design/icons';
import styles from './Services.module.css';

const services = [
  {
    icon: <CodeOutlined />,
    title: 'Custom Web Solutions',
    desc: 'Scalable web applications and enterprise-grade platforms built with modern stacks like React, Next.js, and Python Flask.',
  },
  {
    icon: <MobileOutlined />,
    title: 'App Development',
    desc: 'High-performance iOS and Android applications designed for seamless user experiences and robust functionality.',
  },
  {
    icon: <RobotOutlined />,
    title: 'AI & Smart Automation',
    desc: 'Leveraging Generative AI and intelligent workflows to streamline your business operations and reduce manual overhead.',
  },
  {
    icon: <ReadOutlined />,
    title: 'Academy & Internships',
    desc: 'Bridge the gap between college and career with our expert-led courses and hands-on internship programs for students.',
  },
  {
    icon: <ProjectOutlined />,
    title: 'UI/UX & Branding',
    desc: 'Crafting unique visual identities and intuitive interfaces that turn your startup vision into a compelling brand.',
  },
  {
    icon: <GlobalOutlined />,
    title: 'Digital Transformation',
    desc: 'Strategic IT consulting and SEO optimization to ensure your business stays ahead in an ever-evolving digital landscape.',
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
  const [marginTop, setMarginTop] = useState('-120px');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width <= 1024 && width > 768);

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
      <motion.div
        className={styles.sectionHeader}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
        variants={headerVariants}
        style={{ marginTop: isMobile ? '0px' : '-50px' }}
      >
        <span className={styles.sectionLabel}>Expertise & Education</span>
        <h2 className={styles.sectionTitle}>
          Our Core <span className={styles.gradientText}>Capacities</span>
        </h2>
        <p className={styles.sectionSub}>
          Delivering professional software services while empowering the next generation of tech talent through structured mentorship.
        </p>
      </motion.div>

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
            <div className={styles.cornerAccent} />
            <div className={styles.cardNumber}>0{i + 1}</div>
            <div className={styles.iconWrap}>{service.icon}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.desc}</p>
            <div className={styles.cardArrow}>Learn more</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}