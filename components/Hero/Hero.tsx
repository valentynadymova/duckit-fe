'use client';
import Container from '@/hoc/Container';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <Container className={styles.hero_container}>
        <h1 className={`${styles.hero_title} ${styles.decor_duck}`}>
          Web and Mobile
          <span className={styles.hero_span}> &lt;</span>Solutions
          <span className={styles.hero_span}>&gt; </span>
          for Your Success
          <span className={styles.hero_span}>&#46;</span>
        </h1>
        <p className={styles.hero_text}>
          We specialize in creating unique websites and mobile applications
          tailored to your business needs
        </p>
        <button className={styles.hero_button} type="button">
          Get Started
        </button>
        <p className={`${styles.aboutus_subtitle} subtitle`} id="about-us">
          &#47;&#47;about us
        </p>

        <h2 className={styles.aboutus_title}>Our Proven Track Record</h2>

        <ul className={styles.aboutus_list}>
          <li className={styles.aboutus_item}>
            <span className={styles.aboutus_span}>10&#43;</span>
            <h5 className={styles.aboutus_item_title}>Years of Experience</h5>
          </li>
          <li
            className={`${styles.aboutus_item} ${styles.aboutus_item_second}`}
          >
            <span className={styles.aboutus_span}>100&#43;</span>
            <h5 className={styles.aboutus_item_title}>Projects</h5>
          </li>
          <li className={styles.aboutus_item}>
            <span className={styles.aboutus_span}>99&#37;</span>
            <h5 className={styles.aboutus_item_title}>Customer Satisfaction</h5>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Hero;
