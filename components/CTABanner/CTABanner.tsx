'use client';
import { useEffect, useState } from 'react';
import { Input, Button, Space } from 'antd';
import { motion } from 'framer-motion';
import { SendOutlined, CheckCircleFilled } from '@ant-design/icons';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  // All useState hooks first - always called, never conditional
  const [isMobile, setIsMobile] = useState(false);
  const [sectionStyle, setSectionStyle] = useState({ marginTop: '-70px' });

  // First useEffect - check mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Second useEffect - update section style based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setSectionStyle({ marginTop: '-40px' });
      } else if (width <= 768) {
        setSectionStyle({ marginTop: '-60px' });
      } else {
        setSectionStyle({ marginTop: '-70px' });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="cta" className={styles.section} style={{ marginTop: isMobile ? '40px' : '-100px' }}>
      {/* Background Effects - Conditional for mobile performance */}
      <div className={styles.gridOverlay} />
      {!isMobile && (
        <>
          <div className={styles.orb1} />
          <div className={styles.orb2} />
          <div className={styles.orb3} />
        </>
      )}

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: isMobile ? 40 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
          transition={{ duration: isMobile ? 0.6 : 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ marginTop: '-100px' }}
        >
          {/* Section Label */}
          <motion.span
            className={styles.sectionLabel}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className={styles.labelLine} />
            <span className={styles.labelText}>Get Started</span>
            <span className={styles.labelLine} />
          </motion.span>

          {/* Title */}
          <h2 className={styles.sectionTitle}>
            Ready to Transform Your{' '}
            <span className={styles.gradientText}>Business?</span>
          </h2>

          {/* Subtitle */}
          <p className={styles.sectionSub}>
            Tell us about your project and get a free consultation from our team -
            no commitment, no pressure, just honest advice.
          </p>

          {/* Input Form */}
          <motion.div
            className={styles.inputWrap}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className={styles.inputGroup}>
              <Input
                placeholder={isMobile ? "Your email" : "Enter your work email"}
                className={styles.input}
                prefix={<span className={styles.inputIcon}>@</span>}
              />
              <Button
                type="primary"
                className={styles.btn}
              >
                <span>{isMobile ? 'Start' : 'Get Started'}</span>
                <SendOutlined className={styles.btnIcon} />
              </Button>
            </div>
          </motion.div>

          {/* Footer Features */}
          <motion.div
            className={styles.footerFeatures}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className={styles.featureItem}>
              <CheckCircleFilled className={styles.featureIcon} />
              <span>No credit card</span>
            </div>
            <div className={styles.featureDivider} />
            <div className={styles.featureItem}>
              <CheckCircleFilled className={styles.featureIcon} />
              <span>Free consultation</span>
            </div>
            <div className={styles.featureDivider} />
            <div className={styles.featureItem}>
              <CheckCircleFilled className={styles.featureIcon} />
              <span>24h response</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}