'use client';
import styles from './Technologies.module.css';
import Container from '@/hoc/Container';

const Technologies = () => {
  return (
    <section className={styles.technologies_section}>
      <Container className={styles.technologies_container}>
        <p className={`${styles.technologies_subtitle} subtitle`}>
          &#47;&#47;technologies
        </p>
        <h2 className={styles.technologies_title}>Stack Of Technologies</h2>
        <ul className={styles.technologies_list_button}>
          <li className={styles.technologies_item_button}>
            <button className={styles.technologies_button}>
              <span className={styles.technologies_item_span}>&bull;</span>
              Frontend_Development
            </button>
          </li>
          <li className={styles.technologies_item_button}>
            <button className={styles.technologies_button}>
              <span className={styles.technologies_item_span}>&bull;</span>
              Backend_Development
            </button>
          </li>
          <li className={styles.technologies_item_button}>
            <button className={styles.technologies_button}>
              <span className={styles.technologies_item_span}>&bull;</span>
              App_Development
            </button>
          </li>
        </ul>

        <ul className={styles.technologies_list}>
          <li className={styles.technologies_item}>
            <div className={styles.technologies_item_wrap}>
              <svg
                className={styles.technologies_item_svg}
                width="32"
                height="32"
              >
                <use href=""></use>
              </svg>
              <h4 className={styles.technologies_item_title}>Angular</h4>
            </div>
            <p className={styles.technologies_item_text}>
              For building dynamic single-page applications, offering features
              like two-way data binding and dependency injection.
            </p>
          </li>
          <li>
            <li className={styles.technologies_item}>
              <div className={styles.technologies_item_wrap}>
                <svg
                  className={styles.technologies_item_svg}
                  width="32"
                  height="32"
                >
                  <use href=""></use>
                </svg>
                <h4 className={styles.technologies_item_title}>React</h4>
              </div>
              <p className={styles.technologies_item_text}>
                For building reusable user interfaces, favored for its
                component-based architecture and efficiency in single-page
                applications.
              </p>
            </li>
          </li>
          <li>
            <li className={styles.technologies_item}>
              <div className={styles.technologies_item_wrap}>
                <svg
                  className={styles.technologies_item_svg}
                  width="32"
                  height="32"
                >
                  <use href=""></use>
                </svg>
                <h4 className={styles.technologies_item_title}>Java Script</h4>
              </div>
              <p className={styles.technologies_item_text}>
                Dynamic programming language used for web development to create
                interactive elements and dynamic content on websites.
              </p>
            </li>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Technologies;
