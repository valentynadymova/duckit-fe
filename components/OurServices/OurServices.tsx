'use client';
import styles from './OurServices.module.css';
import Container from '@/hoc/Container';

const OurServices = () => {
  return (
    <section className={styles.ourservices_section}>
      <Container className={styles.ourservices_container}>
        <p className={`${styles.ourservices_subtitle} subtitle`}>
          &#47;&#47;services
        </p>
        <h2 className={styles.ourservices_title}>What We Can Do For You</h2>
        <ul className={styles.ourservices_list}>
          <li className={`${styles.ourservices_item} decor`}>
            <ul className={styles.ourservices_list_title}>
              <li className={styles.ourservices_item_title_services}>
                <h3>Markentig</h3>
              </li>
              <li className={styles.ourservices_item_title_price}>
                <h3>from $1000</h3>
              </li>
            </ul>
            <ul className={styles.ourservices_list_subtitle}>
              <li className={styles.ourservices_item_subtitle_technologies}>
                <h5>Presentation</h5>
              </li>
              <li className={styles.ourservices_item_subtitle_technologies}>
                <h5>Social Media</h5>
              </li>
              <li className={styles.ourservices_item_subtitle_technologies}>
                <h5>Packaging</h5>
              </li>
              <li className={styles.ourservices_item_subtitle_technologies}>
                <h5>Rebranding</h5>
              </li>
            </ul>
          </li>
          <li className={styles.ourservices_item}>
            <li className={styles.ourservices_item}>
              <ul className={styles.ourservices_list_title}>
                <li className={styles.ourservices_item_title_services}>
                  <h3>Landing Pages</h3>
                </li>
                <li className={styles.ourservices_item_title_price}>
                  <h3>from $1500</h3>
                </li>
              </ul>
              <ul className={styles.ourservices_list_subtitle}>
                <li className={styles.ourservices_item_subtitle_technologies}>
                  <h5>UI/UX Design</h5>
                </li>
                <li className={styles.ourservices_item_subtitle_technologies}>
                  <h5>Logo</h5>
                </li>
                <li className={styles.ourservices_item_subtitle_technologies}>
                  <h5>Research</h5>
                </li>
                <li className={styles.ourservices_item_subtitle_technologies}>
                  <h5>Wireframes</h5>
                </li>
                <li className={styles.ourservices_item_subtitle_technologies}>
                  <h5>Animation</h5>
                </li>
              </ul>
            </li>
          </li>
          <li className={styles.ourservices_item}>
            <li className={styles.ourservices_item}>
              <ul className={styles.ourservices_list_title}>
                <li className={styles.ourservices_item_title_services}>
                  <h3>Websites</h3>
                </li>
                <li className={styles.ourservices_item_title_price}>
                  <h3>from $2000</h3>
                </li>
              </ul>
              <ul className={styles.ourservices_list_subtitle}>
                <li className={styles.ourservices_item_subtitle_technologies}>
                  <h5>UI/UX Design</h5>
                </li>
                <li className={styles.ourservices_item_subtitle_technologies}>
                  <h5>Logo</h5>
                </li>
                <li className={styles.ourservices_item_subtitle_technologies}>
                  <h5>Research</h5>
                </li>
                <li className={styles.ourservices_item_subtitle_technologies}>
                  <h5>Wireframes</h5>
                </li>
                <li className={styles.ourservices_item_subtitle_technologies}>
                  <h5>Animation</h5>
                </li>
                <li className={styles.ourservices_item_subtitle_technologies}>
                  <h5>Development</h5>
                </li>
              </ul>
            </li>
          </li>
          <li className={styles.ourservices_item}>
            <li className={styles.ourservices_item}>
              <ul className={styles.ourservices_list_title}>
                <li className={styles.ourservices_item_title_services}>
                  <h3>Mobile Apps</h3>
                </li>
                <li className={styles.ourservices_item_title_price}>
                  <h3>from $4000</h3>
                </li>
              </ul>
              <ul className={styles.ourservices_list_subtitle}>
                <li className={styles.ourservices_item_subtitle_technologies}>
                  <h5>UI/UX Design</h5>
                </li>
                <li className={styles.ourservices_item_subtitle_technologies}>
                  <h5>Research</h5>
                </li>
                <li className={styles.ourservices_item_subtitle_technologies}>
                  <h5>Wireframes</h5>
                </li>
                <li className={styles.ourservices_item_subtitle_technologies}>
                  <h5>Development</h5>
                </li>
                <li className={styles.ourservices_item_subtitle_technologies}>
                  <h5>iOS</h5>
                </li>
                <li className={styles.ourservices_item_subtitle_technologies}>
                  <h5>Android</h5>
                </li>
                <li className={styles.ourservices_item_subtitle_technologies}>
                  <h5>Cross Platform</h5>
                </li>
              </ul>
            </li>
          </li>
        </ul>
        <div className={styles.ourservices_wrap}>
          <h4 className={styles.ourservices_title_need}>
            Not Sure What You Need?
          </h4>
          <p className={styles.ourservices_text}>
            Our team is here to help you figure out the best solution for your
            business. Get in touch with us for personalized assistance and find
            the perfect fit for your needs.
          </p>
          <button className={styles.ourservices_button}>Contact us</button>
        </div>
      </Container>
    </section>
  );
};

export default OurServices;
