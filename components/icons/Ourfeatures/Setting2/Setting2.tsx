import { ISVG } from '../../../../types';
import styles from './Setting2.module.css';

const Setting2: React.FC<ISVG> = ({
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
      className={styles.ourfeatures_setting2}
      xmlns="http://www.w3.org/2000/svg"
    ></svg>
  );
};
export default Setting2;
