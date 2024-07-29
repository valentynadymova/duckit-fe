'use client';
import Link from 'next/link';
import Container from '@/hoc/Container';
import styles from './Footer.module.css';
import '@/styles/reset.css';

const Footer = () => {
  return (
    <footer className={styles.footer_section}>
      <div className={`${styles.footer_container} ${styles.container}`}>
        <svg>
          <use href=""></use>
        </svg>
        <p></p>
        <link></link>
      </div>
    </footer>
  );
};
export default Footer;
