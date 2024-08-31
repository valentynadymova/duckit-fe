import { ISVG } from '../../../types';
import styles from './Checkbox.module.css';

const Checkbox: React.FC<ISVG> = ({
  width = 22,
  height = 22,
  fill = 'none',
  viewBox = '0 0 22 22',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      className={styles.contact_us_checked_icon}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28 0H4C1.8 0 0 1.8 0 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm0 28H4V4h24v24z"></path>
    </svg>
  );
};
export default Checkbox;
