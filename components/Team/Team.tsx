'use client';
import { Row, Col, Avatar } from 'antd';
import { LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import styles from './Team.module.css';

const team = [
  { name: 'Sarah Chen', role: 'CEO & AI Strategist', initials: 'SC', color: '#7b5cff' },
  { name: 'Marcus Reid', role: 'CTO & ML Engineer', initials: 'MR', color: '#00d4ff' },
  { name: 'Aisha Patel', role: 'Head of Research', initials: 'AP', color: '#ff6b9d' },
  { name: 'James Wu', role: 'Lead Data Scientist', initials: 'JW', color: '#ffd166' },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };

export default function Team() {
  return (
    <section id="team" className={styles.section}>
      <motion.div className={styles.header} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className={styles.label}>── OUR EXPERTS ──</span>
        <h2 className={styles.title}>Meet the <span className="gradient-text">Team</span></h2>
      </motion.div>

      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Row gutter={[24, 24]} justify="center">
          {team.map(member => (
            <Col xs={24} sm={12} lg={6} key={member.name}>
              <motion.div variants={item} className={styles.card} whileHover={{ y: -6 }}>
                <div className={styles.cardContent}>
                  <Avatar size={100} className={styles.avatar} style={{ background: `linear-gradient(135deg, ${member.color}, rgba(0,0,0,0))` }}>
                    {member.initials}
                  </Avatar>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                  <div className={styles.social}>
                    <LinkedinOutlined className={styles.socialIcon} />
                    <TwitterOutlined className={styles.socialIcon} />
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </section>
  );
}
