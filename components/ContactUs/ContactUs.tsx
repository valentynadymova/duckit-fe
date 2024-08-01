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
            <address className={styles.contactus_address}>
              <ul className={styles.contactus_address_list}>
                <li className={styles.contactus_address_item}>
                  <h5 className={styles.contactus_address_item_title}>
                    Chat to us:
                  </h5>
                  <p className={styles.contactus_address_item_text}>
                    Our friendly team is here to help
                  </p>
                  <a
                    className={styles.contactus_address_item_link}
                    href="mailto:duck_it@mail.com"
                  >
                    duck_it@mail.com
                  </a>
                </li>
                <li className={styles.contactus_address_item}>
                  <h5 className={styles.contactus_address_item_title}>
                    Call to us:
                  </h5>
                  <p className={styles.contactus_address_item_text}>
                    Mon-Fri from 8am-5pm
                  </p>
                  <a
                    className={styles.contactus_address_item_link}
                    href="tel:+487045550127"
                  >
                    +48 704-555-0127
                  </a>
                </li>
              </ul>
            </address>
          </div>
          <div className={styles.contactus_wrap_form_general}>
            <h2 className={styles.contactus_form_title}>How We Can Help?</h2>
            <div className={styles.contactus_wrap_link}></div>
            <form className={styles.contactus_form}></form>
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
