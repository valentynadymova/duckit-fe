'use client';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <section className={styles.contactus_section}>
      <div className={`${styles.contactus_container} ${styles.container}`}>
        <h2 className={styles.contactus_title}>Let's work together</h2>
      </div>
    </section>
  );
};

export default ContactUs;
