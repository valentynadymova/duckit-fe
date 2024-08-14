import { ISVG } from '../../../../types';
import styles from './Lamp.module.css';

const Lamp: React.FC<ISVG> = ({
  width = 32,
  height = 32,
  fill = 'none',
  viewBox = '0 0 32 32',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      className={styles.ourfeatures_lamp}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#F2CB12"
        d="M25.613 8.48c-1.386-2.8-4.066-4.867-7.173-5.547-3.253-.72-6.587.054-9.133 2.107a10.63 10.63 0 00-4.014 8.36c0 3.453 2.067 7.067 5.187 9.16v1.107c-.013.373-.027.946.427 1.413.466.48 1.16.533 1.706.533h6.84c.72 0 1.267-.2 1.64-.573.507-.52.494-1.187.48-1.547v-.933c4.134-2.787 6.734-8.667 4.04-14.08zM20.347 29.333a.84.84 0 01-.254-.04c-2.68-.76-5.493-.76-8.173 0-.493.134-1.013-.146-1.147-.64a.92.92 0 01.64-1.146 16.852 16.852 0 019.2 0 .926.926 0 01.64 1.146.964.964 0 01-.906.68z"
      ></path>
    </svg>
  );
};
export default Lamp;
