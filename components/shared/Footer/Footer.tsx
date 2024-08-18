'use client';
import Link from 'next/link';
import Container from '@/hoc/Container';
import styles from './Footer.module.css';
import '@/styles/reset.css';
import LogoDuck from '../../icons/Footer/LogoDuck';
import Facebook from '../../icons/Footer/Facebook';
import Instagram from '../../icons/Footer/Instagram';
import Telegram from '../../icons/Footer/Telegram';

const Footer = () => {
  return (
    <footer className={styles.footer_section}>
      <Container className={styles.footer_container}>
        <div className={styles.footer_wrap_general}>
          <div className={styles.footer_wrap_logo}>
            <Link className={styles.footer_logo_link} href="/">
              <LogoDuck />
            </Link>
            <p className={styles.footer_logo_text}>
              Web and Mobile Solutions for Your Success
            </p>
            <Link className={styles.footer_link_privacy} href="/">
              Privacy policy
            </Link>
          </div>
          <div className={styles.footer_wrap_nav_title}>
            <h5 className={styles.footer_nav_title}>Navigation</h5>
            <nav className={styles.footer_wrap_nav}>
              <ul className={styles.footer_nav_list}>
                <li className={styles.footer_nav_item} tabIndex={0}>
                  <Link href="/#about-us">
                    <span>&#91;</span>
                    About
                    <span className={styles.footer_nav_dash}>&#95;</span>
                    us
                    <span>&#93;</span>
                  </Link>
                </li>
                <li className={styles.footer_nav_item} tabIndex={0}>
                  <Link href="/#services">
                    <span>&#91;</span>
                    Services
                    <span>&#93;</span>
                  </Link>
                </li>
                <li className={styles.footer_nav_item} tabIndex={0}>
                  <Link href="/#features">
                    <span>&#91;</span>
                    Features
                    <span>&#93;</span>
                  </Link>
                </li>
                <li className={styles.footer_nav_item} tabIndex={0}>
                  <Link href="/#technologies">
                    <span>&#91;</span>
                    Technologies
                    <span>&#93;</span>
                  </Link>
                </li>
                <li className={styles.footer_nav_item} tabIndex={0}>
                  <Link href="/#contact">
                    <span>&#91;</span>
                    Contact
                    <span>&#93;</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.footer_wrap_adrress}>
            <h5 className={styles.footer_adrress_title} id="contact">
              Contacts
            </h5>
            <address className={styles.footer_adrress}>
              <span className={styles.contactus_address_span}>Email &#58;</span>
              <Link
                className={styles.contactus_address_link}
                href="mailto:duck_it@mail.com"
              >
                duck&#95;it@mail&#46;com
              </Link>
            </address>
            <address>
              <span className={styles.contactus_address_span}>
                Address &#58;
              </span>
              <Link className={styles.contactus_address_link} href="">
                4517 Washington Ave&#46; Manchester&#44; Kentucky 39495
              </Link>
            </address>
          </div>
          <div className={styles.footer_wrap_social}>
            <h5 className={styles.footer_social_title}>Social media</h5>
            <ul className={styles.footer_social_list}>
              <li className={styles.footer_social_item}>
                <address className={styles.footer_social_wrap_address}>
                  <Link
                    className={styles.footer_social_link}
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook />
                  </Link>
                </address>
              </li>
              <li className={styles.footer_social_item}>
                <address className={styles.footer_social_wrap_address}>
                  <Link
                    className={styles.footer_social_link}
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Telegram />
                  </Link>
                </address>
              </li>
              <li className={styles.footer_social_item}>
                <address className={styles.footer_social_wrap_address}>
                  <Link
                    className={styles.footer_social_link}
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram />
                  </Link>
                </address>
              </li>
            </ul>
          </div>
          <p className={styles.footer_social_text_company}>
            <span>&#169;</span>2024 Duck&#95;it&#46; All rights reserved&#46;
          </p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
