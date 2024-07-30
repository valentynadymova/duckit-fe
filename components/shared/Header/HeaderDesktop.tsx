/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { links } from './getData';
import styles from './Header.module.css';

const HeaderDesktop = () => {
  return (
    <>
      <Link href="/">
        <img src="" />
      </Link>
      <nav>
        <ul>
          {links.map((elem, i) => (
            <li key={'link-item-' + i}>
              <Link href={elem.href}>{elem.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default HeaderDesktop;
