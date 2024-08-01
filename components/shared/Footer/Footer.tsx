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
            <svg className={styles.footer_logo} width="106" height="62">
              <use href=""></use>
            </svg>
            <p>Web and Mobile Solutions for Your Success</p>
            <a>Privacy policy</a>
          </div>
          <nav className={styles.footer_navigation}>
            <p>Navigation</p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
          <address className={styles.footer_adrress}></address>
          <div className={styles.footer_wrap_social}>
            <p>Social media</p>
            <ul>
              <li>
                <svg
                  className={styles.footer_social_logo}
                  width="32"
                  height="32"
                >
                  <use href=""></use>
                </svg>
              </li>
              <li>
                <svg
                  className={styles.footer_social_logo}
                  width="32"
                  height="32"
                >
                  <use href=""></use>
                </svg>
              </li>
              <li>
                <svg
                  className={styles.footer_social_logo}
                  width="32"
                  height="32"
                >
                  <use href=""></use>
                </svg>
              </li>
            </ul>
          </div>
          <p>
            <span>&#169;</span>2024 Duck_it. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
