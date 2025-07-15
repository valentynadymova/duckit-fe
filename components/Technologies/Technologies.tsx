'use client';
import { useState } from 'react';
import styles from './Technologies.module.css';
import Container from '@/hoc/Container';
import Angular from '../icons/Technologies/Angular';
import ReactIcon from '../icons/Technologies/React';
import JavaScript from '../icons/Technologies/JavaScript';
import { useTranslations } from 'next-intl';
import Node from '../icons/Technologies/Node';
import ReactNative from '../icons/Technologies/ReactNative';

const Technologies = () => {
  const t = useTranslations('Technologies');
  const [selectedCategory, setSelectedCategory] = useState<
    'frontend' | 'backend' | 'app'
  >('frontend');

  const categories = [
    { key: 'frontend', labelKey: 'frontend' },
    { key: 'backend', labelKey: 'backend' },
    { key: 'app', labelKey: 'app' },
  ] as const;

  const technologies = {
    frontend: [
      {
        name: 'Angular',
        Icon: Angular,
        description: t('angular'),
      },
      {
        name: 'React',
        Icon: ReactIcon,
        description: t('react'),
      },
      {
        name: 'JavaScript',
        Icon: JavaScript,
        description: t('javascript'),
      },
    ],
    backend: [
      {
        name: 'Node.js',
        Icon: Node,
        description: t('node'),
      },
    ],
    app: [
      {
        name: 'React Native',
        Icon: ReactNative,
        description: t('reactnative'),
      },
    ],
  };

  return (
    <section className={styles.technologies_section}>
      <Container className={styles.technologies_container}>
        <p
          className={`${styles.technologies_subtitle} subtitle`}
          id="technologies"
        >
          &#47;&#47;technologies
        </p>
        <h2 className={styles.technologies_title}>{t('title')}</h2>

        <ul className={styles.technologies_list_button}>
          {categories.map(({ key, labelKey }) => (
            <li key={key} className={styles.technologies_item_button}>
              <button
                className={`${styles.technologies_button} ${selectedCategory === key ? styles.active : ''}`}
                onClick={() => setSelectedCategory(key)}
              >
                <span className={styles.technologies_item_span}>&bull;</span>
                {t(labelKey)}
              </button>
            </li>
          ))}
        </ul>

        <ul className={styles.technologies_list}>
          {technologies[selectedCategory].map(({ name, Icon, description }) => (
            <li key={name} className={styles.technologies_item}>
              <div className={styles.technologies_item_wrap}>
                <Icon />
                <h4 className={styles.technologies_item_title}>{name}</h4>
              </div>
              <p className={styles.technologies_item_text}>{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Technologies;
