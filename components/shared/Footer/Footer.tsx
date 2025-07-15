'use client';
import Link from 'next/link';
import Container from '@/hoc/Container';
import styles from './Footer.module.css';
import '@/styles/reset.css';
import LogoDuck from '../../icons/Footer/LogoDuck';
import Facebook from '../../icons/Footer/Facebook';
import Instagram from '../../icons/Footer/Instagram';
import Telegram from '../../icons/Footer/Telegram';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Navi');
  return (
    <footer className={styles.footer_section}>
      <Container className={styles.footer_container}>
        <div className={styles.footer_wrap_general}>
          <div className={styles.footer_wrap_logo_sub}>
            <div className={styles.footer_wrap_logo}>
              <div className={styles.footer_logo_link_text}>
                <Link className={styles.footer_logo_link} href="/">
                  <LogoDuck />
                </Link>
                <p className={styles.footer_logo_text}>{t('title')}</p>
              </div>

              <Link className={styles.footer_link_privacy} href="/">
                Privacy policy
              </Link>
            </div>

            <div className={styles.footer_wrap_sub}>
              <div className={styles.footer_wrap_nav_title}>
                <h5 className={styles.footer_nav_title}>{t('navigation')}</h5>
                <nav className={styles.footer_wrap_nav}>
                  <ul className={styles.footer_nav_list}>
                    <li className={styles.footer_nav_item} tabIndex={0}>
                      <Link href="/#about-us">
                        <span>&#91;</span>
                        {t('aboutus')}
                        <span>&#93;</span>
                      </Link>
                    </li>
                    <li className={styles.footer_nav_item} tabIndex={0}>
                      <Link href="/#services">
                        <span>&#91;</span>
                        {t('services')}
                        <span>&#93;</span>
                      </Link>
                    </li>
                    <li className={styles.footer_nav_item} tabIndex={0}>
                      <Link href="/#features">
                        <span>&#91;</span>
                        {t('features')}
                        <span>&#93;</span>
                      </Link>
                    </li>
                    <li className={styles.footer_nav_item} tabIndex={0}>
                      <Link href="/#technologies">
                        <span>&#91;</span>
                        {t('technologies')}
                        <span>&#93;</span>
                      </Link>
                    </li>
                    <li className={styles.footer_nav_item} tabIndex={0}>
                      <Link href="/#contact">
                        <span>&#91;</span>
                        {t('contact')}
                        <span>&#93;</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className={styles.footer_wrap_adrress}>
                <h5 className={styles.footer_adrress_title} id="contact">
                  {t('contacts')}
                </h5>
                <address>
                  <span className={styles.contactus_address_span}>
                    Email &#58;
                  </span>
                  <Link
                    className={styles.contactus_address_link}
                    href="mailto:duck_it@mail.com"
                  >
                    duck&#95;it@mail&#46;com
                  </Link>
                </address>
                <address className={styles.footer_adrress}>
                  <span className={styles.contactus_address_span}>
                    {t('address')} &#58;
                  </span>
                  <Link className={styles.contactus_address_link} href="">
                    Poznań&#46; Poland&#44;
                  </Link>
                </address>
              </div>
              <div className={styles.footer_wrap_social}>
                <h5 className={styles.footer_social_title}>Social media</h5>
                <ul className={styles.footer_social_list}>
                  <li className={styles.footer_social_item}>
                    <address className={styles.footer_social_wrap_address}>
                      <Link
                        className={styles.footer_social_link}
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook />
                      </Link>
                    </address>
                  </li>
                  <li className={styles.footer_social_item}>
                    <address className={styles.footer_social_wrap_address}>
                      <Link
                        className={styles.footer_social_link}
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Telegram />
                      </Link>
                    </address>
                  </li>
                  <li className={styles.footer_social_item}>
                    <address className={styles.footer_social_wrap_address}>
                      <Link
                        className={styles.footer_social_link}
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram />
                      </Link>
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className={styles.footer_social_text_company}>
            <span>&#169;</span>2024 Duck&#95;it&#46; All rights reserved&#46;
          </p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
