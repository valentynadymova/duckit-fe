/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Burger from '../../icons/Burger';
import { links } from './getData';
import Portal from '../../../hoc/Portal';
import styles from './Header.module.css';

// interface IHeader {
//     isActive: (href: string) => boolean;
// }

const HeaderMobile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  const logoOpen = () => {
    setOpen((prev) => false);
  };
  return (
    <>
      <div className={styles.header_wrap_logo}>
        <Link className={styles.header_logo_link} href="/">
          <svg className={styles.header_logo_svg} width="90" height="53">
            <use href=""></use>
          </svg>
        </Link>
      </div>
      <span className={styles.burger_icons} onClick={toggleOpen}>
        <Burger active={open} />
      </span>

      {open && (
        <Portal>
          <nav className={styles.navbar_mobile}>
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
                  <span className={styles.mobile_desk_navigation_quote}>
                    &#91;
                  </span>
                  Contact
                  <span className={styles.header_mobile_navigation_quote}>
                    &#93;
                  </span>
                </Link>
              </li>
            </ul>
            {/* <ul>
              {links.map((elem: any, i: any) => (
                <li onClick={toggleOpen} key={`link-item-${i}`}>
                  <Link href={elem.href}>{elem.name}</Link>
                </li>
              ))}
            </ul> */}
          </nav>
        </Portal>
      )}
    </>
  );
};

export default HeaderMobile;
