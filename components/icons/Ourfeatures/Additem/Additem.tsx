import { ISVG } from '../../../../types';

const Additem: React.FC<ISVG> = ({
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
      // className={styles.ourfeatures_additem}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#fff"
        d="M17.907 7.24v1.787c-3.494.28-5.48 2.52-5.48 6.213v6.093H7.24c-3.053 0-4.573-1.52-4.573-4.573V7.24c0-3.053 1.52-4.573 4.573-4.573h6.093c3.054 0 4.574 1.52 4.574 4.573z"
      ></path>
      <path
        fill="#fff"
        d="M24.76 10.667h-6.093c-3.054 0-4.574 1.52-4.574 4.573v9.52c0 3.053 1.52 4.573 4.574 4.573h6.093c3.053 0 4.573-1.52 4.573-4.573v-9.52c0-3.053-1.52-4.573-4.573-4.573zM24.173 21H23v1.173c0 .547-.453 1-1 1-.547 0-1-.453-1-1V21h-1.173c-.547 0-1-.453-1-1 0-.547.453-1 1-1H21v-1.173c0-.547.453-1 1-1 .547 0 1 .453 1 1V19h1.173c.547 0 1 .453 1 1 0 .547-.453 1-1 1z"
      ></path>
    </svg>
  );
};
export default Additem;
