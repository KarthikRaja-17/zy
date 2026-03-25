'use client';
import styles from './Marquee.module.css';

const logos = ['Google', 'Microsoft', 'Salesforce', 'Amazon', 'Meta', 'OpenAI', 'IBM', 'Oracle', 'NVIDIA', 'Stripe'];

export default function Marquee() {
  return (
    <section className={styles.marqueeSection}>
      <p className={styles.label}>Trusted by Industry Leaders</p>
      <div className={styles.track}>
        <div className={styles.strip}>
          {[...logos, ...logos].map((logo, i) => (
            <span key={i} className={styles.logoItem}>{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
