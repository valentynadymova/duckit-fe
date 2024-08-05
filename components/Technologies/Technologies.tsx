'use client';
import styles from './Technologies.module.css';
import Container from '@/hoc/Container';
import Image from 'next/image';

const Technologies = () => {
  return (
    <section className={styles.technologies_section}>
      <Container className={styles.technologies_container}>
        <p
          className={`${styles.technologies_subtitle} subtitle`}
          id="technologies"
        >
          &#47;&#47;technologies
        </p>
        <h2 className={styles.technologies_title}>Stack Of Technologies</h2>
        <ul className={styles.technologies_list_button}>
          <li className={styles.technologies_item_button}>
            <button className={styles.technologies_button}>
              <span className={styles.technologies_item_span}>&bull;</span>
              Frontend&#95;Development
            </button>
          </li>
          <li className={styles.technologies_item_button}>
            <button className={styles.technologies_button}>
              <span className={styles.technologies_item_span}>&bull;</span>
              Backend&#95;Development
            </button>
          </li>
          <li className={styles.technologies_item_button}>
            <button className={styles.technologies_button}>
              <span className={styles.technologies_item_span}>&bull;</span>
              App&#95;Development
            </button>
          </li>
        </ul>

        <ul className={styles.technologies_list}>
          <li className={styles.technologies_item}>
            <div className={styles.technologies_item_wrap}>
              <Image
                className={styles.technologies_item_svg}
                alt=""
                width={32.45}
                height={34}
                src="images/angular.svg"
              />
              <h4 className={styles.technologies_item_title}>Angular</h4>
            </div>
            <p className={styles.technologies_item_text}>
              For building dynamic single&ndash;page applications&#44; offering
              features like two&ndash;way data binding and dependency
              injection&#46;
            </p>
          </li>

          <li className={styles.technologies_item}>
            <div className={styles.technologies_item_wrap}>
              <Image
                className={styles.technologies_item_svg}
                alt=""
                width={32}
                height={32}
                src="images/react.svg"
              />
              <h4 className={styles.technologies_item_title}>React</h4>
            </div>
            <p className={styles.technologies_item_text}>
              For building reusable user interfaces, favored for its
              component&ndash;based architecture and efficiency in
              single&ndash;page applications&#46;
            </p>
          </li>

          <li className={styles.technologies_item}>
            <div className={styles.technologies_item_wrap}>
              <Image
                className={styles.technologies_item_svg}
                alt=""
                width={32}
                height={32}
                src="images/javascript.svg"
              />
              <h4 className={styles.technologies_item_title}>Java Script</h4>
            </div>
            <p className={styles.technologies_item_text}>
              Dynamic programming language used for web development to create
              interactive elements and dynamic content on websites&#46;
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Technologies;
