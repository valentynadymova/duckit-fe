'use client';
import styles from './ContactUs.module.css';
import Container from '@/hoc/Container';

const ContactUs = () => {
  return (
    <section className={styles.contactus_section}>
      <Container className={styles.contactus_container}>
        <div className={styles.contactus_wrap_general}>
          <div className={styles.contactus_wrap_title_address}>
            <div className={styles.contactus_wrap_title}>
              <h2 className={styles.contactus_title}>Let`s Work Together</h2>
              <p className={styles.contactus_text}>
                Our team is always ready to assist you. For business inquiries
                and consultations, please drop us a message or reach out to us
                directly
              </p>
            </div>
            <address></address>
          </div>
          <div className={styles.contactus_wrap_form}>
            <form></form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
