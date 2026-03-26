'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRightOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  UserOutlined,
  FileTextOutlined,
  CodeOutlined,
  RobotOutlined,
  MobileOutlined
} from '@ant-design/icons';
import styles from './Blog.module.css';

const posts = [
  {
    category: 'Software Development',
    title: 'Custom Software vs Off-the-Shelf: What\'s Right for Your Business?',
    excerpt: 'We break down when to build custom and when to buy - so you spend your budget where it actually matters.',
    readTime: '5 min',
    date: 'Mar 15, 2025',
    icon: <CodeOutlined />,
  },
  {
    category: 'AI & Automation',
    title: 'How Small Businesses Can Start Automating Without a Big Budget',
    excerpt: 'Practical automation wins any SMB can implement today - no data science team required.',
    readTime: '6 min',
    date: 'Mar 8, 2025',
    icon: <RobotOutlined />,
  },
  {
    category: 'Mobile Apps',
    title: 'React Native vs Flutter in 2025: Which Should You Build With?',
    excerpt: 'A straight-talking comparison to help you pick the right framework for your next mobile app.',
    readTime: '7 min',
    date: 'Mar 1, 2025',
    icon: <MobileOutlined />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

export default function Blog() {
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
    <section id="blog" className={styles.section} style={{ marginTop }}>
      {/* Background Effects - Conditional for mobile performance */}
      {!isMobile && (
        <>
          <div className={styles.orb1} />
          <div className={styles.orb2} />
        </>
      )}
      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        {/* Section Header - Matching Services/About/Process/Portfolio/Testimonials Style */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: isMobile ? 40 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
          transition={{ duration: isMobile ? 0.6 : 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className={styles.sectionLabel}>
            <span className={styles.labelLine} />
            <span className={styles.labelText}>Insights</span>
            <span className={styles.labelLine} />
          </span>
          <h2 className={styles.sectionTitle}>
            From the <span className={styles.gradientText}>Zyvora Blog</span>
          </h2>
          <p className={styles.sectionSub}>
            Expert insights on software development, AI, and digital transformation
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className={styles.blogGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? "-30px" : "-50px" }}
        >
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              className={styles.card}
              variants={cardVariants}
              whileHover={!isMobile ? { y: -12, transition: { duration: 0.4 } } : {}}
              whileTap={isMobile ? { scale: 0.98 } : {}}
            >
              {/* Corner Accent */}
              <div className={styles.cornerAccent} />

              {/* Cover Image Area */}
              <div className={styles.coverArea}>
                <div className={styles.coverGradient} />
                <div className={styles.iconWrap}>{post.icon}</div>
                <div className={styles.cardNumber}>0{i + 1}</div>
              </div>

              {/* Content */}
              <div className={styles.cardContent}>
                <span className={styles.tag}>{post.category}</span>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>

                {/* Meta Row */}
                <div className={styles.metaRow}>
                  <div className={styles.metaLeft}>
                    <div className={styles.avatar}>
                      <UserOutlined />
                    </div>
                    <div className={styles.metaText}>
                      <div className={styles.metaItem}>
                        <CalendarOutlined />
                        <span>{post.date}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <ClockCircleOutlined />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Read More Link */}
                <div className={styles.readMore}>
                  <span>Read Article</span>
                  <ArrowRightOutlined className={styles.arrowIcon} />
                </div>
              </div>

              {/* Glow Effect */}
              <div className={styles.cardGlow} />
            </motion.article>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button
            className={styles.ctaButton}
          // whileHover={!isMobile ? { scale: 1.02 } : {}}
          // whileTap={{ scale: 0.98 }}
          >
            <FileTextOutlined />
            <span>View All Articles</span>
            <ArrowRightOutlined />
          </button>
        </motion.div>
      </div>
    </section>
  );
}