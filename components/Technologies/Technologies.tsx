'use client';
import styles from './Technologies.module.css';
import Container from '@/hoc/Container';

const Technologies = () => {
  return (
    <section className={styles.technologies_section}>
      <Container className={styles.technologies_container}>
        <p className={styles.technologies_subtitle}>&#47; &#47; technologies</p>
      </Container>
    </section>
  );
};

export default Technologies;
