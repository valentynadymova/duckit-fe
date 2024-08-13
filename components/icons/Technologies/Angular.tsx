import { ISVG } from '../../../types';
import styles from './TechnologiesMedia.module.css';

const Angular: React.FC<ISVG> = ({
  width = 32,
  height = 34,
  fill = 'none',
  viewBox = '0 0 32 34',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      className={styles.technologies_svg}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#DD0031"
        d="M16.227 0L0 5.644l2.475 20.927L16.227 34l13.753-7.429 2.475-20.927L16.227 0z"
      ></path>
      <path
        fill="#C3002F"
        d="M16.227 0v3.774-.017V34l13.753-7.429 2.475-20.927L16.227 0z"
      ></path>
      <path
        fill="#fff"
        d="M16.228 3.757L6.084 25.942h3.782l2.04-4.964h8.61l2.039 4.964h3.782L16.228 3.757zm2.963 14.161h-5.926l2.963-6.953 2.963 6.953z"
      ></path>
    </svg>
  );
};
export default Angular;
