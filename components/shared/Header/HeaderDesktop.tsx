/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import LogoDuck from '../../icons/Header/LogoDuck';
import { useTranslations } from 'next-intl';

const HeaderDesktop = () => {
  const t = useTranslations('Navi');
  return (
    <>
      <div>
        <Link href="/">
          <LogoDuck />
        </Link>
      </div>
      <nav className={styles.header_desk_wrap_nav}>
        <ul className={styles.header_desk_nav_list}>
          <li className={styles.header_desk_nav_item} tabIndex={0}>
            <Link href="/#about-us">
              <span>&#91;</span>
              {t('aboutus')}
              {/* <span className={styles.header_desk_nav_dash}>&#95;</span>
              us */}
              <span>&#93;</span>
            </Link>
          </li>
          <li className={styles.header_desk_nav_item} tabIndex={0}>
            <Link href="/#services">
              <span>&#91;</span>
              {t('services')}
              <span>&#93;</span>
            </Link>
          </li>
          <li className={styles.header_desk_nav_item} tabIndex={0}>
            <Link href="/#features">
              <span>&#91;</span>
              {t('features')}
              <span>&#93;</span>
            </Link>
          </li>
          <li className={styles.header_desk_nav_item} tabIndex={0}>
            <Link href="/#technologies">
              <span>&#91;</span>
              {t('technologies')}
              <span>&#93;</span>
            </Link>
          </li>
          <li className={styles.header_desk_nav_item} tabIndex={0}>
            <Link href="/#contact">
              <span>&#91;</span>
              {t('contact')}
              <span>&#93;</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link className={styles.header_contact_us_link} href="/#contact_us">
          &#47;{t('contactLink')}&#47;
        </Link>
      </div>
    </>
  );
};

export default HeaderDesktop;
