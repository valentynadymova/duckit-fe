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
    >
      <path
        fill="#FFCC01"
        d="M9.542 1.167H4.654c-2.123 0-3.39 1.265-3.39 3.389v4.882c0 2.13 1.267 3.395 3.39 3.395h4.883c2.123 0 3.389-1.265 3.389-3.389V4.556c.006-2.124-1.26-3.39-3.384-3.39zm.403 5.559c0 .227-.18.408-.408.408a.406.406 0 01-.409-.408V6.62L7.542 8.207a.401.401 0 01-.327.117.388.388 0 01-.298-.18l-.595-.887-1.388 1.388a.406.406 0 01-.572 0 .412.412 0 010-.578L6.101 6.33a.401.401 0 01.326-.117.388.388 0 01.298.181l.595.887 1.23-1.23h-.104a.406.406 0 01-.409-.41c0-.227.181-.408.409-.408H9.53a.5.5 0 01.157.03c.1.04.181.122.222.221.023.053.03.105.03.158v1.085h.005z"
      ></path>
    </svg>
  );
};
export default TrendUp;
