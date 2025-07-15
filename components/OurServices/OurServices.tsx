'use client';
import styles from './OurServices.module.css';
import Container from '@/hoc/Container';
import { useContext } from 'react';
import { AdaptiveContext } from '../../context/AdaptiveContext';
import OurServicesDesktop from './OurServicesDesktop';
import { useTranslations } from 'next-intl';

const OurServices = () => {
  const adaptive = useContext(AdaptiveContext);
  const t = useTranslations('Services');
  return (
    <>
      {(adaptive === 'mobile' || adaptive === 'tablet') && (
        <section className={styles.ourservices_section}>
          <Container className={styles.ourservices_container}>
            <p
              className={`${styles.ourservices_subtitle} subtitle`}
              id="services"
            >
              &#47;&#47;services
            </p>
            <h2 className={styles.ourservices_title}>{t('title')}</h2>

            <div className={styles.ourservices_wrap_general}>
              <ul
                className={`${styles.ourservices_list} ${styles.decor_scroll}`}
              >
                <li className={styles.ourservices_item}>
                  <div className={styles.ourservices_wrap_title}>
                    <h3 className={styles.ourservices_item_title_services}>
                      {t('lp')}
                    </h3>
                    <h3 className={styles.ourservices_item_title_price}>
                      {t('lpPrice')}
                    </h3>
                  </div>
                  <ul className={styles.ourservices_list_subtitle}>
                    <li
                      className={styles.ourservices_item_subtitle_technologies}
                    >
                      <h5>{t('lpDesign')}</h5>
                    </li>
                    <li
                      className={styles.ourservices_item_subtitle_technologies}
                    >
                      <h5>{t('lpLogo')}</h5>
                    </li>
                    <li
                      className={styles.ourservices_item_subtitle_technologies}
                    >
                      <h5>{t('lpLanding')}</h5>
                    </li>
                    <li
                      className={styles.ourservices_item_subtitle_technologies}
                    >
                      <h5>{t('lpWebsites')}</h5>
                    </li>
                    <li
                      className={styles.ourservices_item_subtitle_technologies}
                    >
                      <h5>{t('lpResearch')}</h5>
                    </li>
                  </ul>
                </li>
                <li className={styles.ourservices_item}>
                  <div className={styles.ourservices_wrap_title}>
                    <h3 className={styles.ourservices_item_title_services}>
                      {t('webApps')}
                    </h3>
                    <h3 className={styles.ourservices_item_title_price}>
                      {t('waPrice')}
                    </h3>
                  </div>
                  <ul className={styles.ourservices_list_subtitle}>
                    <li
                      className={styles.ourservices_item_subtitle_technologies}
                    >
                      <h5>{t('waDashboards')}</h5>
                    </li>
                    <li
                      className={styles.ourservices_item_subtitle_technologies}
                    >
                      <h5>{t('waBooking')}</h5>
                    </li>
                    <li
                      className={styles.ourservices_item_subtitle_technologies}
                    >
                      <h5>{t('waEcom')}</h5>
                    </li>
                  </ul>
                </li>
                <li className={styles.ourservices_item}>
                  <div className={styles.ourservices_wrap_title}>
                    <h3 className={styles.ourservices_item_title_services}>
                      {t('mobApps')}
                    </h3>
                    <h3 className={styles.ourservices_item_title_price}>
                      {t('maPrice')}
                    </h3>
                  </div>
                  <ul className={styles.ourservices_list_subtitle}>
                    <li
                      className={styles.ourservices_item_subtitle_technologies}
                    >
                      <h5>{t('maIOS')}</h5>
                    </li>
                    <li
                      className={styles.ourservices_item_subtitle_technologies}
                    >
                      <h5>{t('maHybrid')}</h5>
                    </li>
                    <li
                      className={styles.ourservices_item_subtitle_technologies}
                    >
                      <h5>{t('maEcom')}</h5>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className={styles.ourservices_wrap}>
                <h4 className={styles.ourservices_title_need}>
                  {t('contactTitle')}
                </h4>
                <p className={styles.ourservices_text}>{t('contactDesc')}</p>
                <button className={styles.ourservices_button} type="button">
                  {t('contactBtn')}
                </button>
              </div>
            </div>
          </Container>
        </section>
      )}

      {(adaptive === 'desktop' || adaptive === 'desktop-large') && (
        <OurServicesDesktop />
      )}
    </>
  );
};

export default OurServices;
