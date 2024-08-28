'use client';
import Container from '@/hoc/Container';
import styles from './OurFeatures.module.css';
import Link from 'next/link';
import Additem from '../icons/Ourfeatures/Additem/Additem';
import AddSquare from '../icons/Ourfeatures/AddSquare/AddSquare';
import CodeCircle from '../icons/Ourfeatures/CodeCircle/CodeCircle';
import DocumentCode from '../icons/Ourfeatures/DocumentCode/DocumentCode';
import Driver from '../icons/Ourfeatures/Driver/Driver';
import Global from '../icons/Ourfeatures/Global/Global';
import Lamp from '../icons/Ourfeatures/Lamp/Lamp';
import Maximize3 from '../icons/Ourfeatures/Maximize3/Maximize3';
import People from '../icons/Ourfeatures/People/People';
import Profile from '../icons/Ourfeatures/Profile/Profile';
import Setting2 from '../icons/Ourfeatures/Setting2/Setting2';
import ShieldTick from '../icons/Ourfeatures/ShieldTick/ShieldTick';
import TrendUp from '../icons/Ourfeatures/TrendUp/TrendUp';

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

            <div className={styles.ourfeatures_wrap_img_scalability_general}>
              <ul className={styles.ourfeatures_img_scalability_list}>
                <li
                  className={`${styles.ourfeatures_item_trendup} ${styles.decor_trendup}`}
                >
                  <div className={styles.ourfeatures_trendup_svg}>
                    <TrendUp />
                  </div>
                  <p
                    className={`${styles.ourfeatures_text_trendup} ${styles.decor_square}`}
                  >
                    Increased&#95;Traffic
                  </p>
                </li>

                <li className={styles.ourfeatures_item_wrap_text_driver}>
                  <ul className={styles.ourfeatures_list_text_driver}>
                    <li className={styles.ourfeatures_item_driver}>
                      <div className={styles.driver_three}>
                        <div className={styles.driver_second}>
                          <div className={styles.driver_first}>
                            <Driver />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className={styles.ourfeatures_item_text_driver}>
                      <p className={styles.ourfeatures_text_driver}>
                        Stable&#95;Performance
                      </p>
                    </li>
                  </ul>
                </li>

                <li
                  className={`${styles.ourfeatures_item_addsquare} ${styles.decor_addsquare}`}
                >
                  <p
                    className={`${styles.ourfeatures_text_addsquare} ${styles.decor_rhombus}`}
                  >
                    New&#95;features
                  </p>
                  <div className={styles.ourfeatures_addsquare_svg}>
                    <AddSquare />
                  </div>
                </li>
              </ul>
            </div>
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
              <li
                className={`${styles.ourfeatures_item_subtitle_first} ${styles.decor_documentcode}`}
              >
                <DocumentCode />
                <p>Our&#95;development</p>
              </li>
              <li
                className={`${styles.ourfeatures_item_subtitle_second} ${styles.decor_additem}`}
              >
                <Additem />
                <p>New&#95;technologies</p>
              </li>
              <li className={styles.ourfeatures_item_subtitle_three}>
                <Setting2 />
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
            <div className={styles.ourfeatures_wrap_img_сomprehensive_general}>
              <ul className={styles.ourfeatures_img_comprehensive_list}>
                <li className={styles.ourfeatures_item_shieldtick}>
                  <ShieldTick />
                </li>
                <li className={styles.ourfeatures_item_codecircle}>
                  <div className={styles.ourfeatures_codecircle_border_three}>
                    <div className={styles.ourfeatures_codecircleborder_second}>
                      <div
                        className={styles.ourfeatures_codecircleborder_first}
                      >
                        <CodeCircle />
                      </div>
                    </div>
                  </div>
                </li>
                <li className={styles.ourfeatures_item_global}>
                  <Global />
                </li>
                <li className={styles.ourfeatures_item_maximize3}>
                  <Maximize3 />
                </li>
              </ul>
            </div>
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

            <div className={styles.ourfeatures_wrap_img_tailored_general}>
              <ul className={styles.ourfeatures_img_tailored_list}>
                <li
                  className={`${styles.ourfeatures_item_people} ${styles.decor_people}`}
                >
                  <div className={styles.ourfeatures_people_svg}>
                    <People />
                  </div>
                  <p className={styles.ourfeatures_text_people}>
                    Duck&#95;IT team
                  </p>
                </li>

                <li className={styles.ourfeatures_arrow_left}>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>

                <li className={styles.ourfeatures_item_wrap_text_lamp}>
                  <ul className={styles.ourfeatures_list_text_lamp}>
                    <li className={styles.ourfeatures_item_lamp}>
                      <div className={styles.circle_second}>
                        <div className={styles.circle_first}>
                          <div className={styles.outer_circle}>
                            <Lamp />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className={styles.ourfeatures_item_text_lamp}>
                      <p className={styles.ourfeatures_text_lamp}>
                        Customized&#95;solutions
                      </p>
                    </li>
                  </ul>
                </li>

                <li className={styles.ourfeatures_arrow_right}>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>

                <li
                  className={`${styles.ourfeatures_item_profile} ${styles.decor_profile}`}
                >
                  <div className={styles.ourfeatures_profile_svg}>
                    <Profile />
                  </div>
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
