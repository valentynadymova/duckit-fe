'use client';
import Container from '@/hoc/Container';
import styles from './OurFeatures.module.css';

const OurFeatures = () => {
  return (
    <section className={styles.ourfeatures_section}>
      <Container className={styles.ourfeatures_container}>
        <p className={`${styles.ourfeatures_subtitle} subtitle`}>
          &#47;&#47;features
        </p>
        <h2 className={styles.ourfeatures_title}>Why Choose us </h2>
        <ul className={styles.ourfeatures_list}>
          <li className={styles.ourfeatures_item}>
            <h3 className={styles.ourfeatures_item_title}>Scalability</h3>
            <p className={styles.ourfeatures_item_text}>
              Our scalable web development solutions grow with your business.
              Easily handle increased traffic and add new features without
              compromising performance.
            </p>
            <picture>
              <source
                srcSet=" 1x,
                     2x"
                type="image/webp"
                media="(min-width: 1440px)"
              />
              <source
                srcSet=" 1x,
                     2x"
                type="image/png"
                media="(min-width: 1440px)"
              />
              <source
                srcSet=" 1x,
                     2x"
                type="image/webp"
                media="(min-width: 768px)"
              />
              <source
                srcSet=" 1x,
                     2x"
                type="image/png"
                media="(min-width: 768px)"
              />
              <source
                srcSet=" 1x,
                     2x"
                type="image/webp"
                media="(min-width: 360px)"
              />
              <source
                srcSet=" 1x,
                     2x"
                type="image/png"
                media="(min-width: 360px)"
              />
              <img
                src=""
                alt=""
                width=""
                height=""
                className={styles.ourfeatures_img}
                loading="lazy"
              />
            </picture>
          </li>
          <li className={styles.ourfeatures_item}>
            <h3 className={styles.ourfeatures_item_title}>
              Future-proof architecture
            </h3>
            <p className={styles.ourfeatures_item_text}>
              Our web development ensures your site is built on a future-proof
              architecture, adapting to new technologies and evolving needs.
            </p>
            <ul className={styles.ourfeatures_list_subtitle}>
              <li className={styles.ourfeatures_item_subtitle_first}>
                <svg
                  className={styles.ourfeatures_item_subtitle_svg}
                  width="32"
                  height="32"
                >
                  <use href=""></use>
                </svg>
                <p>Our_development</p>
              </li>
              <li className={styles.ourfeatures_item_subtitle_second}>
                <svg
                  className={styles.ourfeatures_item_subtitle_svg}
                  width="32"
                  height="32"
                >
                  <use href=""></use>
                </svg>
                <p>New_technologies</p>
              </li>
              <li className={styles.ourfeatures_item_subtitle_three}>
                <svg
                  className={styles.ourfeatures_item_subtitle_svg}
                  width="32"
                  height="32"
                >
                  <use href=""></use>
                </svg>
                <p>Adapt_to_your_needs</p>
              </li>
            </ul>
          </li>
          <li className={styles.ourfeatures_item}>
            <h3 className={styles.ourfeatures_item_title}>
              Comprehensive tech stack
            </h3>
            <p className={styles.ourfeatures_item_text}>
              Our tech stack delivers top-notch websites with innovation,
              performance, security, and scalability.
            </p>
            <picture>
              <source
                srcSet=" 1x,
                     2x"
                type="image/webp"
                media="(min-width: 1440px)"
              />
              <source
                srcSet=" 1x,
                     2x"
                type="image/png"
                media="(min-width: 1440px)"
              />
              <source
                srcSet=" 1x,
                     2x"
                type="image/webp"
                media="(min-width: 768px)"
              />
              <source
                srcSet=" 1x,
                     2x"
                type="image/png"
                media="(min-width: 768px)"
              />
              <source
                srcSet=" 1x,
                     2x"
                type="image/webp"
                media="(min-width: 360px)"
              />
              <source
                srcSet=" 1x,
                     2x"
                type="image/png"
                media="(min-width: 360px)"
              />
              <img
                src=""
                alt=""
                width=""
                height=""
                className={styles.ourfeatures_img}
                loading="lazy"
              />
            </picture>
          </li>
          <li className={styles.ourfeatures_item}>
            <h3 className={styles.ourfeatures_item_title}>
              Tailored solutions
            </h3>
            <p className={styles.ourfeatures_item_text}>
              We specialize in crafting customized websites that precisely meet
              each client`s unique needs and goals, ensuring satisfaction and
              success.
            </p>
            <picture>
              <source
                srcSet=" 1x,
                     2x"
                type="image/webp"
                media="(min-width: 1440px)"
              />
              <source
                srcSet=" 1x,
                     2x"
                type="image/png"
                media="(min-width: 1440px)"
              />
              <source
                srcSet=" 1x,
                     2x"
                type="image/webp"
                media="(min-width: 768px)"
              />
              <source
                srcSet=" 1x,
                     2x"
                type="image/png"
                media="(min-width: 768px)"
              />
              <source
                srcSet=" 1x,
                     2x"
                type="image/webp"
                media="(min-width: 360px)"
              />
              <source
                srcSet=" 1x,
                     2x"
                type="image/png"
                media="(min-width: 360px)"
              />
              <img
                src=""
                alt=""
                width=""
                height=""
                className={styles.ourfeatures_img}
                loading="lazy"
              />
            </picture>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default OurFeatures;
