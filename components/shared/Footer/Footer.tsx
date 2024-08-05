'use client';
import Link from 'next/link';
import Container from '@/hoc/Container';
import styles from './Footer.module.css';
import '@/styles/reset.css';

const Footer = () => {
  return (
    <footer className={styles.footer_section}>
      <Container className={styles.footer_container}>
        <div className={styles.footer_wrap_general}>
          <div className={styles.footer_wrap_logo}>
            <Link className={styles.footer_logo_link} href="/">
              <svg className={styles.footer_logo_svg} width="106" height="62">
                <use href="/icons.svg#logo-duck"></use>
              </svg>
            </Link>
            <p className={styles.footer_logo_text}>
              Web and Mobile Solutions for Your Success
            </p>
            <Link className={styles.footer_link_privacy} href="/">
              Privacy policy
            </Link>
          </div>

          <nav className={styles.footer_wrap_navigation}>
            <h5 className={styles.footer_navigation_title}>Navigation</h5>

            <ul className={styles.footer_navigation_list}>
              <li className={styles.footer_navigation_item} tabIndex={0}>
                <Link
                  className={styles.footer_navigation_link}
                  href="/#about-us"
                >
                  <span className={styles.footer_navigation_quote}>&#91;</span>
                  About
                  <span className={styles.footer_navigation_dash}>&#95;</span>
                  us
                  <span className={styles.footer_navigation_quote}>&#93;</span>
                </Link>
              </li>
              <li className={styles.footer_navigation_item} tabIndex={0}>
                <Link
                  className={styles.footer_navigation_link}
                  href="/#services"
                >
                  <span className={styles.footer_navigation_quote}>&#91;</span>
                  Services
                  <span className={styles.footer_navigation_quote}>&#93;</span>
                </Link>
              </li>
              <li className={styles.footer_navigation_item} tabIndex={0}>
                <Link
                  className={styles.footer_navigation_link}
                  href="/#features"
                >
                  <span className={styles.footer_navigation_quote}>&#91;</span>
                  Features
                  <span className={styles.footer_navigation_quote}>&#93;</span>
                </Link>
              </li>
              <li className={styles.footer_navigation_item} tabIndex={0}>
                <Link
                  className={styles.footer_navigation_link}
                  href="/#technologies"
                >
                  <span className={styles.footer_navigation_quote}>&#91;</span>
                  Technologies
                  <span className={styles.footer_navigation_quote}>&#93;</span>
                </Link>
              </li>
              <li className={styles.footer_navigation_item} tabIndex={0}>
                <Link
                  className={styles.footer_navigation_link}
                  href="/#contact"
                >
                  <span className={styles.footer_navigation_quote}>&#91;</span>
                  Contact
                  <span className={styles.footer_navigation_quote}>&#93;</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.footer_wrap_adrress}>
            <h5 className={styles.footer_adrress_title}>Contacts</h5>
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
                    <svg
                      className={styles.footer_social_logo}
                      width="32"
                      height="32"
                    >
                      <use href="/icons.svg#facebook"></use>
                    </svg>
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
                    <svg
                      className={styles.footer_social_logo_svg}
                      width="32"
                      height="32"
                    >
                      <use href="/icons.svg#telegram"></use>
                    </svg>
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
                    <svg
                      className={styles.footer_social_logo}
                      width="32"
                      height="32"
                    >
                      <use href="/icons.svg#instagram"></use>
                    </svg>
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
