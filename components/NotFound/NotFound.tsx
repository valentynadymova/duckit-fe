'use client';
import styles from './NotFound.module.css';
import Link from 'next/link';
import Container from '@/hoc/Container';
import NotFoundDuck from '../icons/NotFoundDuck/NotFoundDuck';
import { useTranslations } from 'next-intl';

const NotFound = () => {
  const t = useTranslations('Notfound');
  return (
    <div className={styles.notfound_wrap_general}>
      <div className={styles.notfound_wrap_svg}>
        <p className={styles.notfound_text_svg}>4</p>
        <NotFoundDuck />
        <p className={styles.notfound_text_svg}>4</p>
      </div>
      <h2 className={styles.notfound_title}>Page&#95;not&#95;Found</h2>
      <p className={styles.notfound_text}>{t('message')}</p>
      <Link className={styles.notfound_buttom} href="/">
        {t('button')}
      </Link>
    </div>
  );
};

export default NotFound;
