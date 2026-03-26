'use client';
import { useEffect, useState } from 'react';
import { Row, Col, Button, Tag } from 'antd';
import { ArrowRightOutlined, AppstoreOutlined, CodeOutlined, RocketOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { TypeAnimation } from 'react-type-animation';
import styles from './Hero.module.css';

export default function Hero() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  // Handle resize
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

  // Set mounted state to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);


  // Memoize particles config to prevent re-renders
  const getParticlesConfig = () => ({
    background: { color: { value: 'transparent' } },
    fpsLimit: isMobile ? 30 : 60,
    interactivity: {
      events: {
        onHover: { enable: !isMobile, mode: 'grab' },
        onClick: { enable: true, mode: 'push' },
      },
      modes: {
        grab: { distance: 200, links: { opacity: 0.5 } },
        push: { quantity: isMobile ? 2 : 4 },
      },
    },
    particles: {
      color: { value: ['#a78bfa', '#7c3aed', '#c4b5fd'] },
      links: {
        enable: true,
        color: '#a78bfa',
        distance: isMobile ? 120 : 150,
        opacity: isMobile ? 0.15 : 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: isMobile ? 0.5 : 0.8,
        random: true,
        outMode: 'out',
        attract: { enable: !isMobile, rotate: { x: 600, y: 1200 } }
      },
      number: {
        value: isMobile ? 40 : isTablet ? 60 : 80,
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: { enable: true, speed: 1 },
      },
      shape: { type: ['circle', 'triangle'] },
      size: { value: { min: 1, max: isMobile ? 2 : 3 } },
    },
    detectRetina: !isMobile,
  });

  // Show loading state until mounted - but DON'T return early
  // Instead, conditionally render content
  return (
    <section id="home" className={styles.hero}>
      {/* Background Effects - Conditional rendering for mobile */}
      {mounted && init && !isMobile && (
        <Particles
          id="tsparticles"
          className={styles.particles}
          options={getParticlesConfig()}
        />
      )}

      {/* Simplified background for mobile */}
      {mounted && isMobile && <div className={styles.mobileGradientBg} />}

      <div className={styles.gridOverlay} />
      <div className={styles.radialGlow} />

      {/* Hide orbs on small mobile for performance */}
      {mounted && !isMobile && (
        <>
          <div className={styles.orb + ' ' + styles.orb1} />
          <div className={styles.orb + ' ' + styles.orb2} />
        </>
      )}

      <div className={styles.container}>
        {!mounted ? (
          // Loading placeholder - same structure, no hooks called after this
          <div style={{ height: '100vh' }} />
        ) : (
          <Row gutter={[isMobile ? 24 : 60, isMobile ? 32 : 40]} align="middle" justify="center">
            {/* LEFT COLUMN - Full width on mobile */}
            <Col xs={24} lg={16} xl={16}>
              <motion.div
                initial={{ opacity: 0, y: isMobile ? 40 : 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: isMobile ? 0.8 : 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <Tag className={styles.badge}>
                    <span>✦</span>
                    <span>Build Smart. Scale Fast. Solve Real.</span>
                  </Tag>
                </motion.div>

                {/* H1 - Responsive font size via CSS */}
                <motion.h1
                  className={styles.heading}
                  initial={{ opacity: 0, y: isMobile ? 30 : 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  We Build.{' '}
                  <span className={styles.gradientText}>
                    <TypeAnimation
                      sequence={[
                        'You Grow.', 2500,
                        'You Scale.', 2000,
                        'You Lead.', 2000,
                        'You Win.', 2000,
                      ]}
                      wrapper="span"
                      repeat={Infinity}
                      cursor={true}
                      speed={isMobile ? 40 : 50}
                    />
                  </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                  className={styles.subheading}
                  initial={{ opacity: 0, y: isMobile ? 25 : 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Zyvora is a next-generation IT company - we design custom
                  software, build AI-powered automation, and develop SaaS products
                  that help ambitious businesses grow faster and operate smarter.
                </motion.p>

                {/* Stats - Optional on mobile */}


                {/* CTA Buttons - Stack on mobile */}
                <motion.div
                  className={styles.buttons}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: isMobile ? 0.9 : 1.1, duration: 0.8 }}
                >
                  <Button
                    size={isMobile ? "middle" : "large"}
                    className={styles.primaryBtn}
                    icon={<ArrowRightOutlined />}
                    iconPosition="end"
                  >
                    {isMobile ? 'Services' : 'Explore Services'}
                  </Button>
                  <Button
                    size={isMobile ? "middle" : "large"}
                    className={styles.secondaryBtn}
                    icon={<AppstoreOutlined />}
                  >
                    {isMobile ? 'Products' : 'View Products'}
                  </Button>
                </motion.div>
              </motion.div>
            </Col>

            {/* RIGHT COLUMN - Floating Cards - Hidden on mobile/tablet */}
            {!isMobile && (
              <Col xs={0} lg={8} xl={8}>
                <motion.div
                  className={styles.techVisual}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* Central Core */}
                  <div className={styles.centralCore}>
                    <motion.div
                      className={styles.coreGlow}
                      animate={{
                        boxShadow: [
                          '0 0 60px rgba(139, 92, 246, 0.5)',
                          '0 0 100px rgba(139, 92, 246, 0.8)',
                          '0 0 60px rgba(139, 92, 246, 0.5)',
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className={styles.coreInner}>
                      <div className={styles.logoContainer}>
                        <img
                          src="/logo-1.png"
                          alt="Zyvora Logo"
                          className={styles.logoImage}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Orbital Rings */}
                  <div className={styles.orbitalRing1} />
                  <div className={styles.orbitalRing2} />
                  <div className={styles.orbitalRing3} />

                  {/* Floating Particles */}
                  <div className={styles.floatingParticles}>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={styles.particle}
                        style={{
                          left: `${20 + (i * 10)}%`,
                          top: `${20 + ((i % 3) * 25)}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>

                  {/* Connection Lines */}
                  <svg className={styles.connectionLines} viewBox="0 0 400 400">
                    <motion.path
                      d="M200,200 L100,100"
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ delay: 1.2, duration: 1.5 }}
                    />
                    <motion.path
                      d="M200,200 L300,100"
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ delay: 1.4, duration: 1.5 }}
                    />
                    <motion.path
                      d="M200,200 L100,300"
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ delay: 1.6, duration: 1.5 }}
                    />
                    <motion.path
                      d="M200,200 L300,300"
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ delay: 1.8, duration: 1.5 }}
                    />
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
                        <stop offset="50%" stopColor="#a78bfa" stopOpacity="1" />
                        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>

                </motion.div>
              </Col>
            )}
          </Row>
        )}
      </div>
    </section>
  );
}