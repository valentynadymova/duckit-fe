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
    ></svg>
  );
};
export default AddSquare;
