'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  RobotOutlined,
  CodeOutlined,
  MobileOutlined,
<<<<<<< HEAD
  BulbOutlined,
  ToolOutlined,
  AppstoreOutlined
=======
  ReadOutlined,
  ProjectOutlined,
  GlobalOutlined
>>>>>>> 3f63cff (content changed)
} from '@ant-design/icons';
import styles from './Services.module.css';

const services = [
  {
    icon: <CodeOutlined />,
<<<<<<< HEAD
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
=======
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
>>>>>>> 3f63cff (content changed)
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
<<<<<<< HEAD
  // Initialize with default value instead of calling function that checks window
  const [marginTop, setMarginTop] = useState('-120px');

  // Handle resize for isMobile/isTablet
=======
  const [marginTop, setMarginTop] = useState('-120px');

>>>>>>> 3f63cff (content changed)
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width <= 1024 && width > 768);
<<<<<<< HEAD
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle margin top updates separately
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
=======
      
>>>>>>> 3f63cff (content changed)
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
<<<<<<< HEAD
      {/* Section Header */}
=======
>>>>>>> 3f63cff (content changed)
      <motion.div
        className={styles.sectionHeader}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
        variants={headerVariants}
        style={{ marginTop: isMobile ? '0px' : '-50px' }}
      >
<<<<<<< HEAD
        <span className={styles.sectionLabel}>What We Offer</span>
        <h2 className={styles.sectionTitle}>
          Our IT-Powered <span className={styles.gradientText}>Services</span>
        </h2>
        <p className={styles.sectionSub}>
          Six focused service lines built to move your business forward with cutting-edge technology
        </p>
      </motion.div>

      {/* Services Grid */}
=======
        <span className={styles.sectionLabel}>Expertise & Education</span>
        <h2 className={styles.sectionTitle}>
          Our Core <span className={styles.gradientText}>Capacities</span>
        </h2>
        <p className={styles.sectionSub}>
          Delivering professional software services while empowering the next generation of tech talent through structured mentorship.
        </p>
      </motion.div>

>>>>>>> 3f63cff (content changed)
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
<<<<<<< HEAD
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
=======
            <div className={styles.cornerAccent} />
            <div className={styles.cardNumber}>0{i + 1}</div>
            <div className={styles.iconWrap}>{service.icon}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.desc}</p>
>>>>>>> 3f63cff (content changed)
            <div className={styles.cardArrow}>Learn more</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}