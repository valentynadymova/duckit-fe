'use client';
import styles from './ContactUs.module.css';
import Container from '@/hoc/Container';

const ContactUs = () => {
  return (
    <section className={styles.contactus_section}>
      <Container className={styles.contactus_container}>
        <h2 className={styles.contactus_title}>Let`s work together</h2>
      </Container>
    </section>
  );
};

export default ContactUs;
