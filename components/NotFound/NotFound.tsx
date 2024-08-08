'use client';
import styles from './NotFound.module.css';
import Link from 'next/link';
import Container from '@/hoc/Container';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className={styles.notfound_wrap_general}>
      <div className={styles.notfound_wrap_svg}>
        <p className={styles.notfound_text_svg}>4</p>
        <Image
          className={styles.notfound_svg_logo}
          alt="logo-duck"
          width={149.05}
          height={118.52}
          src="/images/duck-error-svg-360px.svg"
        />
        <p className={styles.notfound_text_svg}>4</p>
      </div>
      <h2 className={styles.notfound_title}>Page&#95;not&#95;Found</h2>
      <p className={styles.notfound_text}>
        Please check that you have entered in the correct address&#44; you could
        also return to the homepage and try again&#46;
      </p>
      <button className={styles.notfound_buttom}>Back to home page</button>
    </div>
  );
};

export default NotFound;
