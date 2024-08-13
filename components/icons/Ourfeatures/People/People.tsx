import { ISVG } from '../../../../types';
import styles from './People.module.css';

const People: React.FC<ISVG> = ({
  height = '32',
  width = '32',
  fill = 'none',
  viewBox = '0 0 32 32',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      className={styles.ourfeatures_people}
      xmlns="http://www.w3.org/2000/svg"
    ></svg>
  );
};
export default People;
