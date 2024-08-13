import { ISVG } from '../../../../types';
import styles from './Additem.module.css';

const Additem: React.FC<ISVG> = ({
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
      className={styles.ourfeatures_additem}
      xmlns="http://www.w3.org/2000/svg"
    ></svg>
  );
};
export default Additem;
