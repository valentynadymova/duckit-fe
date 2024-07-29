'use client';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <div className={`${styles.hero_container} ${styles.container}`}>
        <h1 className={styles.hero_title}>
          Web and Mobile
          <span className={styles.hero_quotes}>&lt;</span>Solutions
          <span className={styles.hero_quotes}>&gt;;</span>
          for Your Success
          <span className={styles.hero_stop}>.</span>
        </h1>
        <p className={styles.hero_subtitle}>
          We specialize in creating unique websites and mobile applications
          tailored to your business needs
        </p>
        <button className={styles.hero_button}>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
