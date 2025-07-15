/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Burger from '../../icons/Burger';
import { links } from './getData';
import Portal from '../../../hoc/Portal';
import styles from './Header.module.css';
import LogoDuck from '../../icons/Header/LogoDuck';
import { useTranslations } from 'next-intl';

interface IHeaderMobile {
  isOpen: boolean;
  onToggle: () => void;
}
const HeaderMobile: React.FC<IHeaderMobile> = ({ isOpen, onToggle }) => {
  const t = useTranslations('Navi');
  return (
    <>
      <Link href="/">
        <LogoDuck />
      </Link>
      <span className={styles.burger_icons} onClick={onToggle}>
        <Burger active={isOpen} />
      </span>

      {isOpen && (
        <Portal>
          <nav className={styles.header_mob_tab_wrap_nav}>
            <ul>
              <li className={styles.header_mob_tab_nav_item} tabIndex={0}>
                <Link href="/#about-us">
                  <span>&#91;</span>
                  {t('aboutus')}
                  <span>&#93;</span>
                </Link>
              </li>
              <li className={styles.header_mob_tab_nav_item} tabIndex={0}>
                <Link href="/#services">
                  <span>&#91;</span>
                  {t('services')}
                  <span>&#93;</span>
                </Link>
              </li>
              <li className={styles.header_mob_tab_nav_item} tabIndex={0}>
                <Link href="/#features">
                  <span>&#91;</span>
                  {t('features')}
                  <span>&#93;</span>
                </Link>
              </li>
              <li className={styles.header_mob_tab_nav_item} tabIndex={0}>
                <Link href="/#technologies">
                  <span>&#91;</span>
                  {t('technologies')}
                  <span>&#93;</span>
                </Link>
              </li>
              <li className={styles.header_mob_tab_nav_item} tabIndex={0}>
                <Link href="/#contact">
                  <span>&#91;</span>
                  {t('contact')}
                  <span>&#93;</span>
                </Link>
              </li>
            </ul>
            <div>
              <Link
                className={styles.header_contact_us_link}
                href="/#contact_us"
              >
                &#47;{t('contactLink')}&#47;
              </Link>
            </div>
          </nav>
        </Portal>
      )}
    </>
  );
};

export default HeaderMobile;
