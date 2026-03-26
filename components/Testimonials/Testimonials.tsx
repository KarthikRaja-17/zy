'use client';
import { useRef, useEffect, useState } from 'react';
import { Carousel, Avatar, Rate } from 'antd';
import { motion } from 'framer-motion';
import {
  LeftOutlined,
  RightOutlined,
  UserOutlined,
  StarFilled,
  QuestionOutlined,
} from '@ant-design/icons';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'You Could Be First',
    role: 'Your Company Name Here',
    rating: 5,
    text: 'We are just getting started and looking for our first clients. Be the one who gets premium attention, founder-level involvement, and a team that treats your project like their own.',
  },
  {
    name: 'Early Clients Get More',
    role: 'Founding Client Benefits',
    rating: 5,
    text: 'Our first clients get direct access to our founding team, priority support, discounted rates, and a long-term technology partner who grows with your business from day one.',
  },
  {
    name: 'Built on Trust First',
    role: 'The Zyvora Promise',
    rating: 5,
    text: 'We do not fake results or inflate numbers. We earn your trust through honest communication, clean code, on-time delivery, and real outcomes — every single engagement.',
  },
];

export default function Testimonials() {
  const carouselRef = useRef<any>(null);
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
    <section id="testimonials" className={styles.section} style={{ marginTop }}>
      {/* Background Effects - Conditional for mobile performance */}
      {!isMobile && (
        <>
          <div className={styles.orb1} />
          <div className={styles.orb2} />
        </>
      )}
      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        {/* Section Header - Matching Services/About/Process/Portfolio Style */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: isMobile ? 40 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
          transition={{ duration: isMobile ? 0.6 : 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className={styles.sectionLabel}>
            <span className={styles.labelLine} />
            <span className={styles.labelText}>Why Work With Us</span>
            <span className={styles.labelLine} />
          </span>
          <h2 className={styles.sectionTitle}>
            Be Part of Our <span className={styles.gradientText}>Story</span>
          </h2>
          <p className={styles.sectionSub}>
            Join our founding clients and experience the Zyvora difference
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className={styles.carouselWrap}
          initial={{ opacity: 0, y: isMobile ? 30 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: isMobile ? 0.6 : 0.8 }}
        >
          <Carousel
            ref={carouselRef}
            autoplay={!isMobile} // Disable autoplay on mobile for better UX
            autoplaySpeed={5000}
            dots={{ className: styles.dots }}
            effect="fade"
          >
            {testimonials.map((t, i) => (
              <div key={t.name}>
                <motion.div
                  className={styles.card}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                >
                  {/* Corner Accent */}
                  <div className={styles.cornerAccent} />

                  {/* Rating */}
                  <div className={styles.ratingWrap}>
                    {[...Array(t.rating)].map((_, idx) => (
                      <StarFilled key={idx} className={styles.starIcon} />
                    ))}
                  </div>

                  {/* Text */}
                  <p className={styles.text}>"{t.text}"</p>

                  {/* Divider */}
                  <div className={styles.divider} />

                  {/* Author */}
                  <div className={styles.author}>
                    <Avatar
                      size={isMobile ? 48 : 56}
                      className={styles.avatar}
                      icon={<UserOutlined />}
                    >
                      {t.name[0]}
                    </Avatar>
                    <div className={styles.authorInfo}>
                      <div className={styles.name}>{t.name}</div>
                      <div className={styles.role}>{t.role}</div>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className={styles.cardGlow} />
                </motion.div>
              </div>
            ))}
          </Carousel>

          {/* Navigation Arrows - Hidden on mobile */}
          {!isMobile && (
            <>
              <button
                className={`${styles.arrow} ${styles.arrowLeft}`}
                onClick={() => carouselRef.current?.prev()}
                aria-label="Previous testimonial"
              >
                <LeftOutlined />
              </button>
              <button
                className={`${styles.arrow} ${styles.arrowRight}`}
                onClick={() => carouselRef.current?.next()}
                aria-label="Next testimonial"
              >
                <RightOutlined />
              </button>
            </>
          )}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className={styles.trustIndicators}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className={styles.trustItem}>
            <span className={styles.trustNumber}>100%</span>
            <span className={styles.trustLabel}>Commitment</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <span className={styles.trustNumber}>24/7</span>
            <span className={styles.trustLabel}>Support</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <span className={styles.trustNumber}>0</span>
            <span className={styles.trustLabel}>Hidden Fees</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}