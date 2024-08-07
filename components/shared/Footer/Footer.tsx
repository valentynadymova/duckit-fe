'use client';
import Link from 'next/link';
import Container from '@/hoc/Container';
import styles from './Footer.module.css';
import '@/styles/reset.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer_section}>
      <Container className={styles.footer_container}>
        <div className={styles.footer_wrap_general}>
          <div className={styles.footer_wrap_logo}>
            <Link className={styles.footer_logo_link} href="/">
              <Image
                className={styles.footer_logo_svg}
                alt="logo-duck"
                width={106}
                height={62}
                src="images/logo-duck.svg"
              />
            </Link>
            <p className={styles.footer_logo_text}>
              Web and Mobile Solutions for Your Success
            </p>
            <Link className={styles.footer_link_privacy} href="/">
              Privacy policy
            </Link>
          </div>
          <nav className={styles.footer_wrap_nav}>
            <h5 className={styles.footer_nav_title}>Navigation</h5>
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
                    <Image
                      className={styles.footer_social_logo_svg}
                      alt="facebook"
                      width={32}
                      height={32}
                      src="images/facebook.svg"
                    />
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
                    <Image
                      className={styles.footer_social_logo_svg}
                      alt="telegram"
                      width={32}
                      height={32}
                      src="images/telegram.svg"
                    />
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
                    <Image
                      className={styles.footer_social_logo_svg}
                      alt="instagram"
                      width={32}
                      height={32}
                      src="images/instagram.svg"
                    />
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
