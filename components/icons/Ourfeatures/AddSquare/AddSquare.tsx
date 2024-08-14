import { ISVG } from '../../../../types';
import styles from './AddSquare.module.css';

const AddSquare: React.FC<ISVG> = ({
  width = 14,
  height = 14,
  fill = 'none',
  viewBox = '0 0 14 14',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      className={styles.ourfeatures_addsquare}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FFCC01"
        d="M9.444 1.167H4.556c-2.124 0-3.39 1.266-3.39 3.389v4.882c0 2.13 1.266 3.395 3.39 3.395h4.882c2.124 0 3.39-1.265 3.39-3.389V4.556c.005-2.123-1.26-3.39-3.384-3.39zm-.11 6.27H7.436v1.896A.44.44 0 017 9.771a.44.44 0 01-.438-.438V7.438H4.667A.44.44 0 014.229 7a.44.44 0 01.438-.437h1.895V4.667A.44.44 0 017 4.229a.44.44 0 01.437.438v1.896h1.896A.44.44 0 019.771 7a.44.44 0 01-.438.438z"
      ></path>
    </svg>
  );
};
export default AddSquare;
