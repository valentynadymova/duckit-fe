/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Burger from '../../icons/Burger';
import { links } from './getData';
import Portal from '../../../hoc/Portal';
import styles from './Header.module.css';
import Image from 'next/image';

interface IHeaderMobile {
  isOpen: boolean;
  onToggle: () => void;
}
const HeaderMobile: React.FC<IHeaderMobile> = ({ isOpen, onToggle }) => {
  return (
    <>
      <Link className={styles.header_logo_link} href="/">
        <Image
          className={styles.header_logo_svg}
          alt="logo-duck"
          width={90}
          height={53}
          src="images/logo-duck.svg"
        />
      </Link>
      <span className={styles.burger_icons} onClick={onToggle}>
        <Burger active={isOpen} />
      </span>

      {isOpen && (
        <Portal>
          <nav className={styles.header_mobile_wrap_navigation}>
            <ul className={styles.header_mobile_navigation_list}>
              <li className={styles.header_mobile_navigation_item} tabIndex={0}>
                <Link
                  className={styles.header_mobile_navigation_link}
                  href="/#about-us"
                >
                  <span className={styles.header_mobile_navigation_quote}>
                    &#91;
                  </span>
                  About
                  <span className={styles.header_mobile_navigation_dash}>
                    &#95;
                  </span>
                  us
                  <span className={styles.header_mobile_navigation_quote}>
                    &#93;
                  </span>
                </Link>
              </li>
              <li className={styles.header_mobile_navigation_item} tabIndex={0}>
                <Link
                  className={styles.header_mobile_navigation_link}
                  href="/#services"
                >
                  <span className={styles.header_mobile_navigation_quote}>
                    &#91;
                  </span>
                  Services
                  <span className={styles.header_mobile_navigation_quote}>
                    &#93;
                  </span>
                </Link>
              </li>
              <li className={styles.header_mobile_navigation_item} tabIndex={0}>
                <Link
                  className={styles.header_mobile_navigation_link}
                  href="/#features"
                >
                  <span className={styles.header_mobile_navigation_quote}>
                    &#91;
                  </span>
                  Features
                  <span className={styles.header_mobile_navigation_quote}>
                    &#93;
                  </span>
                </Link>
              </li>
              <li className={styles.header_mobile_navigation_item} tabIndex={0}>
                <Link
                  className={styles.header_mobile_navigation_link}
                  href="/#technologies"
                >
                  <span className={styles.header_mobile_navigation_quote}>
                    &#91;
                  </span>
                  Technologies
                  <span className={styles.header_mobile_navigation_quote}>
                    &#93;
                  </span>
                </Link>
              </li>
              <li className={styles.header_mobile_navigation_item} tabIndex={0}>
                <Link
                  className={styles.header_mobile_navigation_link}
                  href="/#contact"
                >
                  <span className={styles.header_mobile_navigation_quote}>
                    &#91;
                  </span>
                  Contact
                  <span className={styles.header_mobile_navigation_quote}>
                    &#93;
                  </span>
                </Link>
              </li>
            </ul>

            <div className={styles.header_mobile_wrap_contact_us}>
              <Link
                className={styles.header_mobile_contact_us_link}
                href="/#contact_us"
              >
                &#47;Contact_us&#47;
              </Link>
            </div>
          </nav>
        </Portal>
      )}
    </>
  );
};

export default HeaderMobile;
