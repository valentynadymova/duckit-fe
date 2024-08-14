import { ISVG } from '../../../../types';
import styles from './TrendUp.module.css';

const TrendUp: React.FC<ISVG> = ({
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
      className={styles.ourfeatures_trendup}
      xmlns="http://www.w3.org/2000/svg"
    ></svg>
  );
};
export default TrendUp;
