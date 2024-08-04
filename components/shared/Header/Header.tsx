'use client';

import { useContext, useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Suspense>
      <header
        className={`${styles.header} ${isOpen ? styles.header_background_open : ''}`}
      >
        <Container className={styles.header_container}>
          {(adaptive === 'mobile' || adaptive === 'tablet') && (
            <HeaderMobile isOpen={isOpen} onToggle={handleToggle} />
          )}
          {(adaptive === 'desktop' || adaptive === 'desktop-large') && (
            <HeaderDesktop />
          )}
        </Container>
      </header>
    </Suspense>
  );
};

export default Header;
