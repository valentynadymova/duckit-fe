import { ISVG } from '../../../../types';

const ShieldTick: React.FC<ISVG> = ({
  width = 20,
  height = 20,
  fill = 'none',
  viewBox = '0 0 20 20',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      // className={styles.ourfeatures_shieldtick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#646464"
        d="M15.45 3.433l-4.583-1.716c-.475-.175-1.25-.175-1.725 0L4.558 3.433c-.883.334-1.6 1.367-1.6 2.309v6.75c0 .675.442 1.566.984 1.966l4.583 3.425c.808.609 2.133.609 2.942 0l4.583-3.425c.542-.408.983-1.291.983-1.966v-6.75c.009-.942-.708-1.975-1.583-2.309zM12.9 8.1l-3.583 3.583a.618.618 0 01-.442.184.618.618 0 01-.442-.184L7.1 10.333a.629.629 0 010-.883.629.629 0 01.883 0l.9.9 3.142-3.142a.629.629 0 01.883 0 .631.631 0 01-.008.892z"
      ></path>
    </svg>
  );
};
export default ShieldTick;
