'use client';
import styles from './OurServices.module.css';
import Container from '@/hoc/Container';

const OurServices = () => {
  return (
    <section className={styles.ourservices_section}>
      <Container className={styles.ourservices_container}>
        <p className={`${styles.ourservices_subtitle} subtitle`} id="services">
          &#47;&#47;services
        </p>
        <h2 className={styles.ourservices_title}>What We Can Do For You</h2>
        <ul className={styles.ourservices_list}>
          <li className={styles.ourservices_item}>
            <div className={styles.ourservices_wrap_title}>
              <h3 className={styles.ourservices_item_title_services}>
                Markentig
              </h3>
              <h3 className={styles.ourservices_item_title_price}>
                from &#36;1000
              </h3>
            </div>
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
            <div className={styles.ourservices_wrap_title}>
              <h3 className={styles.ourservices_item_title_services}>
                Landing Pages
              </h3>
              <h3 className={styles.ourservices_item_title_price}>
                from &#36;1500
              </h3>
            </div>
            <ul className={styles.ourservices_list_subtitle}>
              <li className={styles.ourservices_item_subtitle_technologies}>
                <h5>UI&#47;UX Design</h5>
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
          <li className={styles.ourservices_item}>
            <div className={styles.ourservices_wrap_title}>
              <h3 className={styles.ourservices_item_title_services}>
                Websites
              </h3>
              <h3 className={styles.ourservices_item_title_price}>
                from &#36;2000
              </h3>
            </div>
            <ul className={styles.ourservices_list_subtitle}>
              <li className={styles.ourservices_item_subtitle_technologies}>
                <h5>UI&#47;UX Design</h5>
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
          <li className={styles.ourservices_item}>
            <div className={styles.ourservices_wrap_title}>
              <h3 className={styles.ourservices_item_title_services}>
                Mobile Apps
              </h3>
              <h3 className={styles.ourservices_item_title_price}>
                from &#36;4000
              </h3>
            </div>
            <ul className={styles.ourservices_list_subtitle}>
              <li className={styles.ourservices_item_subtitle_technologies}>
                <h5>UI&#47;UX Design</h5>
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
        </ul>
        <div className={styles.ourservices_wrap}>
          <h4 className={styles.ourservices_title_need}>
            Not Sure What You Need&#63;
          </h4>
          <p className={styles.ourservices_text}>
            Our team is here to help you figure out the best solution for your
            business. Get in touch with us for personalized assistance and find
            the perfect fit for your needs&#46;
          </p>
          <button className={styles.ourservices_button}>Contact us</button>
        </div>
      </Container>
    </section>
  );
};

export default OurServices;
