'use client';
import { useEffect, useState } from 'react';
import { Row, Col, Divider } from 'antd';
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(false);

  // All hooks at the top, unconditional
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer id="footer" className={styles.footer}>
      {/* Background Effects */}
      <div className={styles.gridOverlay} />
      {!isMobile && <div className={styles.glowOrb} />}

      <div className={styles.container}>
        <Row
          gutter={[
            { xs: 32, sm: 40, md: 48 },
            { xs: 40, sm: 48, md: 48 }
          ]}
        >
          {/* Brand Column */}
          <Col xs={24} md={12} lg={8}>
            <div className={styles.brand}>
              <Link
                href="/"
                className={styles.logo}
                style={{ marginTop: isMobile ? '-40px' : '-90px' }}
              >
                <img
                  src="/z4.png"
                  alt="Zyvora"
                  className={styles.logoImage}
                />
              </Link>
              <p
                className={styles.desc}
                style={{ marginTop: isMobile ? '-30px' : '-70px' }}
              >
                Next-generation IT services and software products - built for businesses that want to grow faster, operate smarter, and lead with technology.
              </p>
              <div className={styles.socials}>
                <a href="#" className={styles.socialLink} aria-label="GitHub">
                  <GithubOutlined />
                </a>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                  <LinkedinOutlined />
                </a>
                <a href="#" className={styles.socialLink} aria-label="Twitter">
                  <TwitterOutlined />
                </a>
                <a href="#" className={styles.socialLink} aria-label="YouTube">
                  <YoutubeOutlined />
                </a>
              </div>
            </div>
          </Col>

          {/* Services Column */}
          <Col xs={12} sm={12} md={6} lg={5}>
            <h4 className={styles.heading}>Services</h4>
            <ul className={styles.list}>
              <li><Link href="#services">Custom Software</Link></li>
              <li><Link href="#services">Mobile Apps</Link></li>
              <li><Link href="#services">AI & Automation</Link></li>
              <li><Link href="#services">IT Consulting</Link></li>
              <li><Link href="#services">Managed Support</Link></li>
            </ul>
          </Col>

          {/* Products Column */}
          <Col xs={12} sm={12} md={6} lg={5}>
            <h4 className={styles.heading}>Products</h4>
            <ul className={styles.list}>
              <li><Link href="#portfolio">ZyFlow</Link></li>
              <li><Link href="#portfolio">ZyDesk</Link></li>
              <li><Link href="#portfolio">ZySync</Link></li>
              <li><Link href="#blog">Blog</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </Col>

          {/* Contact Column */}
          <Col xs={24} sm={24} md={12} lg={6}>
            <h4 className={styles.heading}>Contact</h4>
            <ul className={styles.list}>
              <li className={styles.contactItem}>
                <MailOutlined className={styles.contactIcon} />
                <span>hello@zyvora.com</span>
              </li>
              <li className={styles.contactItem}>
                <MailOutlined className={styles.contactIcon} />
                <span>support@zyvora.com</span>
              </li>
              <li className={styles.contactItem}>
                <ClockCircleOutlined className={styles.contactIcon} />
                <span>We respond within 24 hours</span>
              </li>
              <li className={styles.contactItem}>
                <EnvironmentOutlined className={styles.contactIcon} />
                <span>Chennai, Tamil Nadu, India</span>
              </li>
            </ul>
          </Col>
        </Row>

        <Divider className={styles.divider} />

        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {currentYear} <span className={styles.brandHighlight}>Zyvora</span> IT Solutions. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="#">Privacy Policy</Link>
            <span className={styles.linkDivider} />
            <Link href="#">Terms of Service</Link>
            <span className={styles.linkDivider} />
            <Link href="#">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}