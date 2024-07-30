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
      <Link className={styles.header_logo} href="/">
        {/* <img className={styles.header_logo_img} /> */}
        <p>LOGO</p>
      </Link>
      <span className={styles.burger_icons} onClick={toggleOpen}>
        <Burger active={open} />
      </span>

      {open && (
        <Portal>
          <nav className={styles.navbar_mobile}>
            <ul>
              {links.map((elem: any, i: any) => (
                <li onClick={toggleOpen} key={`link-item-${i}`}>
                  <Link href={elem.href}>{elem.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </Portal>
      )}
    </>
  );
};

export default HeaderMobile;
