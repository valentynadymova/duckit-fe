'use client';
import Container from '@/hoc/Container';
import styles from './OurFeatures.module.css';

const OurFeatures = () => {
  return (
    <section className={styles.ourfeatures_section}>
      <Container className={styles.ourfeatures_container}>
        <p className={styles.ourfeatures_subtitle}> &#47; &#47; features</p>
      </Container>
    </section>
  );
};

export default OurFeatures;
