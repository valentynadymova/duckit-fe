import { ISVG } from '../../../types';
import styles from './Checkbox.module.css';

const Checkbox: React.FC<ISVG> = ({
  width = 10,
  height = 8,
  fill = 'none',
  viewBox = '0 0 10 8',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      className={styles.contact_us_checkbox_icon}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        // fill="#F4F4FD"
        d="M8.446.255A.917.917 0 0110 .901a.928.928 0 01-.242.649L4.864 7.704a.92.92 0 01-1.019.229.92.92 0 01-.306-.204L.293 4.466a.925.925 0 01-.226-1.024.925.925 0 01.87-.578.916.916 0 01.656.294L4.162 5.74 8.422.282a.329.329 0 01.025-.027h-.001z"
      ></path>
    </svg>
  );
};
export default Checkbox;
