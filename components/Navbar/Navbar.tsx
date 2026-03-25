'use client';
import { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Navbar.module.css';

const navItems = ['Home', 'Services', 'About', 'Blog', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    const targetId = item.toLowerCase();
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    setMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      const sections = navItems.map(item => item.toLowerCase());
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <motion.header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1
      }}
    >
      {/* Logo */}
      <motion.div
        style={{ marginLeft: '50px', marginTop: '17px' }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link href="/">
          <img
            src="/z4.png"
            alt="Zyvora"
            style={{
              height: '200px',
              width: '200px',
              cursor: 'pointer'
            }}
          />
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className={styles.navLinks} style={{ marginLeft: '40px' }}>
        {navItems.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1 + (index * 0.1),
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <Link
              href={`#${item.toLowerCase()}`}
              className={`${styles.navLink} ${activeSection === item.toLowerCase() ? styles.active : ''}`}
              onClick={(e) => handleNavClick(e, item)}
            >
              {item}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ marginRight: '-150px' }}
      >
        <Button
          className={styles.ctaBtn}
          size="large"
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Get Started
        </Button>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Button
          className={styles.hamburger}
          icon={mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
          onClick={() => setMobileOpen(!mobileOpen)}
          type="text"
        />
      </motion.div>

      {/* Mobile Drawer */}
      <Drawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        placement="right"
        width={340}
        closable={false}
        styles={{
          body: {
            background: 'linear-gradient(180deg, #080f1e 0%, #0a1225 100%)',
            padding: '60px 40px',
            borderLeft: '1px solid rgba(139, 92, 246, 0.15)'
          },
          mask: {
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)'
          }
        }}
      >
        {/* Mobile Logo */}
        <motion.div
          style={{
            marginBottom: '50px',
            fontSize: '32px',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            letterSpacing: '-0.02em'
          }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className={styles.gradientText}>Zyvora</span>
        </motion.div>

        {/* Mobile Navigation */}
        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          {navItems.map((item, i) => (
            <motion.div
              key={item}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.15 + (i * 0.08),
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className={`${styles.mobileLink} ${activeSection === item.toLowerCase() ? styles.active : ''}`}
                onClick={(e) => handleNavClick(e, item)}
                style={{
                  color: activeSection === item.toLowerCase() ? '#a78bfa' : undefined,
                  fontWeight: activeSection === item.toLowerCase() ? 600 : 500
                }}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    layoutId="activeIndicator"
                    style={{
                      position: 'absolute',
                      left: '-28px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '4px',
                      height: '24px',
                      background: 'linear-gradient(180deg, #8b5cf6, #a78bfa)',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ marginTop: '50px' }}
        >
          <Button
            className={styles.ctaBtn}
            size="large"
            block
            style={{ height: '56px', fontSize: '15px' }}
            onClick={() => {
              setMobileOpen(false);
              setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }, 300);
            }}
          >
            Get Started
          </Button>
        </motion.div>

        {/* Decorative Line */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '40px',
          right: '40px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.4), transparent)'
        }} />
      </Drawer>
    </motion.header>
  );
}