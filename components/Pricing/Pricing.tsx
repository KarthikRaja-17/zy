'use client';
import { useState } from 'react';
import { Switch, Button, Row, Col } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import styles from './Pricing.module.css';

const plans = [
  {
    name: 'Starter', monthlyPrice: 299, yearlyPrice: 239,
    features: ['3 AI Models','10,000 API Calls/month','Basic Analytics Dashboard','Email Support','2 Integrations'],
    cta: 'Get Started', featured: false,
  },
  {
    name: 'Professional', monthlyPrice: 799, yearlyPrice: 639,
    features: ['Unlimited AI Models','500,000 API Calls/month','Advanced Analytics + Reports','Priority 24/7 Support','Unlimited Integrations','Custom Model Training'],
    cta: 'Start Free Trial', featured: true,
  },
  {
    name: 'Enterprise', monthlyPrice: null, yearlyPrice: null,
    features: ['Everything in Professional','Dedicated Infrastructure','Custom AI Development','SLA Guarantee','On-premise Deployment','Dedicated Success Manager'],
    cta: 'Contact Sales', featured: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className={styles.section}>
      <motion.div className={styles.header} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className={styles.label}>── PRICING ──</span>
        <h2 className={styles.title}>Simple, Transparent <span className="gradient-text">Pricing</span></h2>
        <div className={styles.toggle}>
          <span className={!annual ? styles.activeToggle : styles.inactiveToggle}>Monthly</span>
          <Switch checked={annual} onChange={setAnnual} style={{ background: annual ? '#7b5cff' : '#333' }} />
          <span className={annual ? styles.activeToggle : styles.inactiveToggle}>Annual <span className={styles.saveBadge}>Save 20%</span></span>
        </div>
      </motion.div>

      <Row gutter={[24, 24]} justify="center">
        {plans.map((plan, i) => (
          <Col xs={24} md={12} lg={8} key={plan.name}>
            <motion.div
              className={`${styles.card} ${plan.featured ? styles.featured : ''}`}
              initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.15 }} whileHover={{ y: -6 }}
            >
              {plan.featured && <div className={styles.popularBadge}>Most Popular</div>}
              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.price}>
                {plan.monthlyPrice
                  ? <><span className={`${styles.priceNum} gradient-text`}>${annual ? plan.yearlyPrice : plan.monthlyPrice}</span><span className={styles.pricePer}>/mo</span></>
                  : <span className={`${styles.priceNum} gradient-text`}>Custom</span>
                }
              </div>
              <ul className={styles.featureList}>
                {plan.features.map(f => (
                  <li key={f} className={styles.featureItem}>
                    <CheckOutlined className={styles.checkIcon} /> {f}
                  </li>
                ))}
              </ul>
              <Button
                block size="large"
                className={plan.featured ? styles.primaryBtn : styles.outlineBtn}
              >
                {plan.cta}
              </Button>
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
}
