'use client';
import Container from '@/hoc/Container';
import styles from './OurFeatures.module.css';
import Image from 'next/image';
import Link from 'next/link';

const OurFeatures = () => {
  return (
    <section className={styles.ourfeatures_section}>
      <Container className={styles.ourfeatures_container}>
        <p className={`${styles.ourfeatures_subtitle} subtitle`} id="features">
          &#47;&#47;features
        </p>
        <h2 className={styles.ourfeatures_title}>Why Choose us </h2>
        <ul className={styles.ourfeatures_list}>
          <li className={styles.ourfeatures_item}>
            <h3 className={styles.ourfeatures_item_title}>Scalability</h3>
            <p className={styles.ourfeatures_item_text}>
              Our scalable web development solutions grow with your
              business&#46; Easily handle increased traffic and add new features
              without compromising performance&#46;
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
                srcSet="/images/img-320px/scalability-320px-1x.webp 1x,
                    /images/img-320px/scalability-320px-2x.webp 2x"
                type="image/webp"
                media="(min-width: 360px)"
              />
              <source
                srcSet="/images/img-320px/scalability-320px-1x.png 1x,
                    /images/img-320px/scalability-320px-2x.png 2x"
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
              Future&#45;proof architecture
            </h3>
            <p className={styles.ourfeatures_item_text}>
              Our web development ensures your site is built on a
              future&ndash;proof architecture&#44; adapting to new technologies
              and evolving needs&#46;
            </p>
            <ul className={styles.ourfeatures_list_subtitle}>
              <li className={styles.ourfeatures_item_subtitle_first}>
                <Image
                  alt="document-code"
                  width={32}
                  height={32}
                  src="images/document-code.svg"
                />
                <p>Our&#95;development</p>
              </li>
              <li className={styles.ourfeatures_item_subtitle_second}>
                <Image
                  alt="additem"
                  width={32}
                  height={32}
                  src="images/additem.svg"
                />
                <p>New&#95;technologies</p>
              </li>
              <li className={styles.ourfeatures_item_subtitle_three}>
                <Image
                  alt="setting"
                  width={32}
                  height={32}
                  src="images/setting-2.svg"
                />
                <p>Adapt&#95;to&#95;your&#95;eeds</p>
              </li>
            </ul>
          </li>
          <li className={styles.ourfeatures_item}>
            <h3 className={styles.ourfeatures_item_title}>
              Comprehensive tech stack
            </h3>
            <p className={styles.ourfeatures_item_text}>
              Our tech stack delivers top&ndash;notch websites with
              innovation&#44; performance&#44; security&#44; and
              scalability&#46;
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
                srcSet="/images/img-320px/comprehensive-320px-1x.webp 1x,
                    /images/img-320px/comprehensive-320px-2x.webp 2x"
                type="image/webp"
                media="(min-width: 360px)"
              />
              <source
                srcSet="/images/img-320px/comprehensive-320px-1x.png 1x,
                    /images/img-320px/comprehensive-320px-2x.png 2x"
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
              each client&#8217;s unique needs and goals&#44; ensuring
              satisfaction and success&#46;
            </p>
            {/* <picture>
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
                srcSet="/images/img-320px/tailored-320px-1x.webp 1x,
                    /images/img-320px/tailored-320px-2x.webp 2x"
                type="image/webp"
                media="(min-width: 360px)"
              />
              <source
                srcSet="/images/img-320px/tailored-320px-1x.png 1x,
                    /images/img-320px/tailored-320px-2x.png 2x"
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
            </picture> */}
            <div className={styles.ourfeatures_wrap_img_tailored_general}>

              <div className={styles.ourfeatures_wrap_img_tailored}>
                <ul className={styles.ourfeatures_img_tailored_list}>
               <li className={styles.ourfeatures_people_item}>
                <Image
                  className={styles.ourfeatures_img_people}
                  alt="people"
                  width={32}
                  height={32}
                  src="/images/people.png"
                />
                <p className={styles.ourfeatures_text_people}>Duck_IT team</p>
                  </li>
<li></li>
                <Image
                  className={styles.ourfeatures_img_arrow_left}
                  alt="arrow-left"
                  width={32}
                  height={32}
                  src="/images/arrow-left.png"
                  />
                  <li></li>
                <div className={styles.ourfeatures_wrap_lamp}>
                <Image
                  className={styles.ourfeatures_img_lamp}
                  alt="lamp-on"
                  width={72}
                  height={72}
                  src="/images/lamp-on.png"
                />
                <p className={styles.ourfeatures_text_lamp}>
                  Customized_solutions
              </p>
                </div>
              <li></li>
                <Image
                  className={styles.ourfeatures_img_arrow_right}
                  alt="arrow-right"
                  width={32}
                  height={32}
                  src="/images/arrow-right.png"
                />
<li></li>
                <div className={styles.ourfeatures_wrap_profile}>
                  <Image
                    className={styles.ourfeatures_img_profile}
                    alt="profile"
                    width={32}
                    height={32}
                    src="/images/profile.png"
                  />
                  <p className={styles.ourfeatures_text_profile}>Customer</p>
                </div>
</ul>
              </div>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default OurFeatures;
