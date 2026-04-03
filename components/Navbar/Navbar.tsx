'use client';
import { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from './Navbar.module.css';

const navItems = ['Home', 'Services', 'About', 'Blog', 'Contact'];

// Move this outside component - it's not state-dependent
const getInitialLogoSize = () => {
  return { height: 200, width: 200 };
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  // Initialize with default, update in useEffect
  const [logoSize, setLogoSize] = useState(getInitialLogoSize());

  // Handle logo size updates in useEffect to avoid SSR issues
  useEffect(() => {
    const updateLogoSize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth <= 480) setLogoSize({ height: 120, width: 120 });
        else if (window.innerWidth <= 768) setLogoSize({ height: 150, width: 150 });
        else if (window.innerWidth <= 1024) setLogoSize({ height: 170, width: 170 });
        else setLogoSize({ height: 200, width: 200 });
      }
    };

    updateLogoSize();
    window.addEventListener('resize', updateLogoSize);
    return () => window.removeEventListener('resize', updateLogoSize);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    const targetId = item.toLowerCase();
    const element = document.getElementById(targetId);

    if (element) {
      const offset = isMobile ? 80 : 100;
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
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMobileOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
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
      style={{ marginLeft: isMobile ? '0px' : '-100px' }}
    >
      {/* Logo - Responsive positioning */}
      <motion.div
        className={styles.logoContainer}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link href="/">
          <img
            src="/z4.png"
            alt="Zyvora"
            className={styles.logoImage}
            style={{ height: 200, width: 200 }}
          />
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className={styles.navLinks}>
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

      {/* CTA Button - Desktop */}
      <motion.div
        className={styles.ctaContainer}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ marginRight: '10px' }}
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
        className={styles.mobileMenuBtn}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Button
          className={styles.hamburger}
          icon={mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
          onClick={() => setMobileOpen(!mobileOpen)}
          type="text"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        />
      </motion.div>

      {/* Mobile Drawer */}
      <Drawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        placement="right"
        width={isMobile && typeof window !== 'undefined' && window.innerWidth <= 480 ? '100%' : 340}
        closable={false}
        styles={{
          body: {
            background: 'linear-gradient(180deg, #080f1e 0%, #0a1225 100%)',
            padding: isMobile && typeof window !== 'undefined' && window.innerWidth <= 480 ? '40px 24px' : '60px 40px',
            borderLeft: '1px solid rgba(139, 92, 246, 0.15)'
          },
          mask: {
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)'
          }
        }}
        className={styles.mobileDrawer}
      >
        {/* Mobile Logo */}
        <motion.div
          className={styles.mobileLogo}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className={styles.gradientText}>Zyvora</span>
        </motion.div>

        {/* Mobile Navigation */}
        <nav className={styles.mobileNav}>
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
                    className={styles.activeIndicator}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile CTA */}
        <motion.div
          className={styles.mobileCta}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            className={styles.ctaBtn}
            size="large"
            block
            style={{
              height: isMobile && typeof window !== 'undefined' && window.innerWidth <= 480 ? '48px' : '56px',
              fontSize: isMobile && typeof window !== 'undefined' && window.innerWidth <= 480 ? '14px' : '15px'
            }}
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
        <div className={styles.decorativeLine} />
      </Drawer>
    </motion.header>
  );
}