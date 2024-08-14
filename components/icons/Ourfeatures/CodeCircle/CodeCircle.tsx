import { ISVG } from '../../../../types';
import styles from './CodeCircle.module.css';

const CodeCircle: React.FC<ISVG> = ({
  width = 52,
  height = 52,
  fill = 'none',
  viewBox = '0 0 52 52',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      className={styles.ourfeatures_codecircle}
      xmlns="http://www.w3.org/2000/svg"
    ></svg>
  );
};
export default CodeCircle;
