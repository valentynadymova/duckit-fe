'use client';
import styles from './OurServices.module.css';
import Container from '@/hoc/Container';

const OurServices = () => {
  return (
    <section className={styles.ourservices_section}>
      <Container className={styles.ourservices_container}>
        <p className={styles.ourservices_subtitle}>&#47; &#47; services</p>
      </Container>
    </section>
  );
};

export default OurServices;
