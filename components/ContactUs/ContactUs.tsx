'use client';
import styles from './ContactUs.module.css';
import Container from '@/hoc/Container';
import Link from 'next/link';

const ContactUs = () => {
  return (
    <section className={styles.contactus_section}>
      <Container className={styles.contactus_container}>
        <div className={styles.contactus_wrap_general}>
          <div className={styles.contactus_wrap_title_address}>
            <div className={styles.contactus_wrap_title}>
              <h2 className={styles.contactus_title}>
                Let&#8217;s Work Together
              </h2>
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
                    Chat to us&#58;
                  </h5>
                  <p className={styles.contactus_address_item_text}>
                    Our friendly team is here to help
                  </p>
                  <Link
                    className={styles.contactus_address_item_link}
                    href="mailto:duck_it@mail.com"
                  >
                    duck&#95;it@mail&#46;com
                  </Link>
                </li>
                <li className={styles.contactus_address_item}>
                  <h5 className={styles.contactus_address_item_title}>
                    Call to us&#58;
                  </h5>
                  <p className={styles.contactus_address_item_text}>
                    Mon&#8211;Fri from 8am&#8211;5pm
                  </p>
                  <Link
                    className={styles.contactus_address_item_link}
                    href="tel:+487045550127"
                  >
                    &#43;48 704&#45;555&#45;0127
                  </Link>
                </li>
              </ul>
            </address>
          </div>
          <div className={styles.contactus_wrap_form_general}>
            <h2 className={styles.contactus_form_title}>How We Can Help?</h2>
            <form className={styles.contactus_form}></form>
            <p className={styles.contactus_form_text}>
              We will get back in touch with you within 24 hours
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
