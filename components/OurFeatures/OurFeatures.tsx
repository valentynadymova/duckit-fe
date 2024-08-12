'use client';
import Container from '@/hoc/Container';
import styles from './OurFeatures.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Lamp from '../icons/Features/Lamp';

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

            <Lamp
              width={72}
              height={72}
              fill={'#f2cb12'}
              viewBox={'0 0 72 72'}
            />

            <div className={styles.ourfeatures_wrap_img_tailored_general}>
              <ul className={styles.ourfeatures_img_tailored_list}>
                <li
                  className={`${styles.ourfeatures_item_people} ${styles.decor_people}`}
                >
                  <Image
                    className={styles.ourfeatures_img_people}
                    alt="people"
                    width={32}
                    height={32}
                    src="/images/people.svg"
                  />
                  <p className={styles.ourfeatures_text_people}>Duck_IT team</p>
                </li>
                <li className={styles.ourfeatures_arrow_left}>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
                <li className={styles.ourfeatures_item_lamp}>
                  <div className={styles.circle_second}>
                    <div className={styles.circle_first}>
                      <div className={styles.outer_circle}>
                        <Image
                          className={styles.ourfeatures_img_lamp}
                          alt="lamp-on"
                          width={72}
                          height={72}
                          src="/images/lamp-on.svg"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <p className={styles.ourfeatures_text_lamp}>
                    Customized&#95;solutions
                  </p>
                </li>
                <li className={styles.ourfeatures_arrow_right}>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
                <li
                  className={`${styles.ourfeatures_item_profile} ${styles.decor_profile}`}
                >
                  <Image
                    className={styles.ourfeatures_img_profile}
                    alt="profile"
                    width={32}
                    height={32}
                    src="/images/profile.svg"
                  />
                  <p className={styles.ourfeatures_text_profile}>Customer</p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default OurFeatures;
