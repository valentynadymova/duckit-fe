'use client';

import { useContext } from 'react';
import { AdaptiveContext } from '../../../context/AdaptiveContext';
import Container from '../../../hoc/Container';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';
import styles from './Header.module.css';
import { Suspense } from 'react';

import '@/styles/reset.css';
import '@/styles/global.css';

const Header = () => {
  const adaptive = useContext(AdaptiveContext);

  return (
    <Suspense>
      <header className={styles.header}>
        <Container className={styles.header_container}>
          {(adaptive === 'mobile' || adaptive === 'tablet') && <HeaderMobile />}
          {(adaptive === 'desktop' || adaptive === 'desktop-large') && (
            <HeaderDesktop />
          )}
        </Container>
      </header>
    </Suspense>
  );
};

export default Header;
