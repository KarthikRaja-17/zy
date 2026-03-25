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

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const stats = [
    { value: '50+', label: 'Projects Delivered', accent: false },
    { value: '100%', label: 'Client Satisfaction', accent: true },
    { value: '3', label: 'SaaS Products', accent: false },
  ];

  const floatingCards = [
    {
      title: 'Custom Software',
      value: 'We Build',
      sub: 'Web · Mobile · Enterprise',
      icon: <CodeOutlined />,
      type: 'progress',
    },
    {
      title: 'SaaS Products',
      value: 'Launching',
      sub: 'ZyFlow · ZyDesk · ZySync',
      icon: <RocketOutlined />,
      type: 'pulse',
    },
    {
      title: 'AI & Automation',
      value: 'Powered',
      sub: 'Smarter workflows',
      icon: <ThunderboltOutlined />,
      type: 'chart',
    },
  ];

  return (
    <section id="home" className={styles.hero}>
      {/* Background Effects */}
      {init && (
        <Particles
          id="tsparticles"
          className={styles.particles}
          options={{
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: 'grab' },
                onClick: { enable: true, mode: 'push' },
              },
              modes: {
                grab: { distance: 200, links: { opacity: 0.5 } },
                push: { quantity: 4 },
              },
            },
            particles: {
              color: { value: ['#a78bfa', '#7c3aed', '#c4b5fd'] },
              links: {
                enable: true,
                color: '#a78bfa',
                distance: 150,
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.8,
                random: true,
                outModes: 'out',
                attract: { enable: true, rotate: { x: 600, y: 1200 } }
              },
              number: {
                value: 80,
              },
              opacity: {
                value: { min: 0.1, max: 0.5 },
                animation: { enable: true, speed: 1 },
              },
              shape: { type: ['circle', 'triangle'] },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      )}

      <div className={styles.gridOverlay} />
      <div className={styles.radialGlow} />
      <div className={styles.orb + ' ' + styles.orb1} />
      <div className={styles.orb + ' ' + styles.orb2} />

      <div className={styles.container}>
        <Row gutter={[60, 40]} align="middle">

          {/* LEFT COLUMN */}
          <Col xs={24} lg={24}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
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

              {/* H1 */}
              <motion.h1
                className={styles.heading}
                initial={{ opacity: 0, y: 50 }}
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
                  />
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className={styles.subheading}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Zyvora is a next-generation IT company - we design custom
                software, build AI-powered automation, and develop SaaS products
                that help ambitious businesses grow faster and operate smarter.
              </motion.p>

              {/* Stats */}
              {/* <motion.div
                className={styles.statsRow}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className={styles.stat}>
                    <span className={`${styles.statValue} ${stat.accent ? styles.statValueAccent : ''}`}>
                      {stat.value}
                    </span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </motion.div> */}

              {/* CTA Buttons */}
              <motion.div
                className={styles.buttons}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                <Button
                  size="large"
                  className={styles.primaryBtn}
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                >
                  Explore Services
                </Button>
                <Button
                  size="large"
                  className={styles.secondaryBtn}
                  icon={<AppstoreOutlined />}
                >
                  View Products
                </Button>
              </motion.div>
            </motion.div>
          </Col>

          {/* RIGHT COLUMN - Floating Cards */}
          {/* <Col xs={0} lg={12}>
            <motion.div
              className={styles.visualArea}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className={styles.floatingCard}
                  animate={{
                    y: [0, -20, 0],
                    rotateY: [0, 5, 0],
                    rotateX: [0, -5, 0]
                  }}
                  transition={{
                    duration: 6 + i * 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.5,
                  }}
                >
                  <div className={styles.cardIcon}>{card.icon}</div>
                  <div className={styles.cardTitle}>{card.title}</div>
                  <div className={`${styles.cardValue} ${styles.gradientText}`}>
                    {card.value}
                  </div>
                  <div className={styles.cardSub}>{card.sub}</div>

                  {card.type === 'progress' && (
                    <div className={styles.miniProgress}>
                      <div className={styles.miniProgressFill} />
                    </div>
                  )}
                  {card.type === 'pulse' && <div className={styles.pulseDot} />}
                  {card.type === 'chart' && (
                    <div className={styles.miniChart}>
                      {[40, 65, 45, 80, 55, 70].map((h, idx) => (
                        <div
                          key={idx}
                          className={styles.chartBar}
                          style={{ height: `${h}%`, animationDelay: `${idx * 0.1}s` }}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </Col> */}

        </Row>
      </div>
    </section>
  );
}