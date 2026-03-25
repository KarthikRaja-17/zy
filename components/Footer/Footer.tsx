'use client';
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

  return (
    <footer id="footer" className={styles.footer}>
      {/* Background Effects */}
      <div className={styles.gridOverlay} />
      <div className={styles.glowOrb} />

      <div className={styles.container}>
        <Row gutter={[48, 48]}>
          {/* Brand */}
          <Col xs={24} lg={8}>
            <div className={styles.brand}>
              <Link href="/" className={styles.logo} style={{ marginTop: '-80px' }}>
                {/* <span className={styles.logoText}>Zyvora</span> */}
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
              <p className={styles.desc} style={{ marginTop: '-70px' }}>
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

          {/* Services */}
          <Col xs={12} sm={8} lg={5}>
            <h4 className={styles.heading}>Services</h4>
            <ul className={styles.list}>
              <li><Link href="#services">Custom Software</Link></li>
              <li><Link href="#services">Mobile Apps</Link></li>
              <li><Link href="#services">AI & Automation</Link></li>
              <li><Link href="#services">IT Consulting</Link></li>
              <li><Link href="#services">Managed Support</Link></li>
            </ul>
          </Col>

          {/* Products */}
          <Col xs={12} sm={8} lg={5}>
            <h4 className={styles.heading}>Products</h4>
            <ul className={styles.list}>
              <li><Link href="#portfolio">ZyFlow</Link></li>
              <li><Link href="#portfolio">ZyDesk</Link></li>
              <li><Link href="#portfolio">ZySync</Link></li>
              <li><Link href="#blog">Blog</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </Col>

          {/* Contact */}
          <Col xs={24} sm={8} lg={6}>
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