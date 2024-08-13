import { ISVG } from '../../../../types';
import styles from './Lamp.module.css';

const Lamp: React.FC<ISVG> = ({
  width = 72,
  height = 72,
  fill = 'none',
  viewBox = '0 0 72 72',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      className={styles.ourfeatures_lamp}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FFCC01"
        d="M46.13 13.08C43.01 6.78 36.98 2.13 29.99.6 22.67-1.02 15.17.72 9.44 5.34 3.68 9.93.41 16.8.41 24.15c0 7.77 4.65 15.9 11.67 20.61v2.49c-.03.84-.06 2.13.96 3.18 1.05 1.08 2.61 1.2 3.84 1.2h15.39c1.62 0 2.85-.45 3.69-1.29 1.14-1.17 1.11-2.67 1.08-3.48v-2.1c9.3-6.27 15.15-19.5 9.09-31.68zM34.28 60c-.18 0-.39-.03-.57-.09a33.603 33.603 0 00-18.39 0c-1.11.3-2.28-.33-2.58-1.44-.33-1.11.33-2.28 1.44-2.58a37.915 37.915 0 0120.7 0c1.11.33 1.77 1.47 1.44 2.58-.3.93-1.14 1.53-2.04 1.53z"
      ></path>
    </svg>
  );
};
export default Lamp;
