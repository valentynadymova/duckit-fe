/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

const HeaderDesktop = () => {
  return (
    <>
      <nav className={styles.header_desk_wrap_navigation}>
        <div className={styles.header_desk_wrap_logo}>
          <Link className={styles.header_desk_logo_link} href="/">
            <Image
              className={styles.header_desk_logo_svg}
              alt="logo-duck"
              width={106}
              height={62}
              src="images/logo-duck.svg"
            />
          </Link>
        </div>
        <ul className={styles.header_desk_navigation_list}>
          <li className={styles.header_desk_navigation_item} tabIndex={0}>
            <Link
              className={styles.header_desk_navigation_link}
              href="/#about-us"
            >
              <span className={styles.header_desk_navigation_quote}>&#91;</span>
              About
              <span className={styles.header_desk_navigation_dash}>&#95;</span>
              us
              <span className={styles.header_desk_navigation_quote}>&#93;</span>
            </Link>
          </li>
          <li className={styles.header_desk_navigation_item} tabIndex={0}>
            <Link
              className={styles.header_desk_navigation_link}
              href="/#services"
            >
              <span className={styles.header_desk_navigation_quote}>&#91;</span>
              Services
              <span className={styles.header_desk_navigation_quote}>&#93;</span>
            </Link>
          </li>
          <li className={styles.header_desk_navigation_item} tabIndex={0}>
            <Link
              className={styles.header_desk_navigation_link}
              href="/#features"
            >
              <span className={styles.header_desk_navigation_quote}>&#91;</span>
              Features
              <span className={styles.header_desk_navigation_quote}>&#93;</span>
            </Link>
          </li>
          <li className={styles.header_desk_navigation_item} tabIndex={0}>
            <Link
              className={styles.header_desk_navigation_link}
              href="/#technologies"
            >
              <span className={styles.header_desk_navigation_quote}>&#91;</span>
              Technologies
              <span className={styles.header_desk_navigation_quote}>&#93;</span>
            </Link>
          </li>
          <li className={styles.header_desk_navigation_item} tabIndex={0}>
            <Link
              className={styles.header_desk_navigation_link}
              href="/#contact"
            >
              <span className={styles.header_desk_navigation_quote}>&#91;</span>
              Contact
              <span className={styles.header_desk_navigation_quote}>&#93;</span>
            </Link>
          </li>
        </ul>
        <div className={styles.header_desk_wrap_contact_us}>
          <Link
            className={styles.header_desk_contact_us_link}
            href="/#contact_us"
          >
            &#47;Contact_us&#47;
          </Link>
        </div>
      </nav>
    </>
  );
};

export default HeaderDesktop;
