import { ISVG } from '../../../types';
import styles from './NotFoundDuck.module.css';

const NotFoundDuck: React.FC<ISVG> = ({
  width = 149.051,
  height = 118.52,
  fill = 'none',
  viewBox = '0 0 149.051 118.52',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      className={styles.notfound_logo}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#fff" d="M134.613 59.589h14.912V74.42h-14.912V59.588z"></path>
      <path
        fill="#fff"
        d="M134.613 44.756h14.912V59.59h-14.912V44.756zM134.613 44.756h14.912c0-8.186-6.651-14.832-14.842-14.832h-.07v14.832zM119.701 29.994h14.912v14.832h-14.912V29.994z"
      ></path>
      <path
        fill="#fff"
        d="M104.789 44.756h14.912v14.832h-14.912V44.756zM104.789 44.756h14.912V29.994h-.07c-8.191 0-14.842 6.576-14.842 14.762zM75.034 44.756h14.912v14.832H75.034V44.756z"
      ></path>
      <path
        fill="#fff"
        d="M89.877 44.756h14.912v14.832H89.877V44.756zM60.122 44.756h14.912V59.59H60.122V44.756z"
      ></path>
      <path
        fill="#fff"
        d="M60.122 59.589h14.912V74.42H60.122V59.588zM75.034 74.351h14.912v14.832H75.034V74.351z"
      ></path>
      <path
        fill="#fff"
        d="M89.945 89.183h.07c8.192 0 14.842-6.646 14.842-14.832H89.945v14.832zM60.122 15.161h14.912v14.833H60.122V15.16z"
      ></path>
      <path
        fill="#fff"
        d="M60.122 15.161h14.912C75.034 6.975 68.384.33 60.192.33h-.07V15.16zM45.21.329h14.912V15.16H45.21V.33zM30.298.329H45.21V15.16H30.298V.33z"
      ></path>
      <path
        fill="#fff"
        d="M15.386 15.161h14.912V.33h-.07c-8.191 0-14.842 6.646-14.842 14.832z"
      ></path>
      <path
        fill="#fff"
        d="M15.386 15.161h14.912v14.833H15.386V15.16zM15.386 59.589h14.912V74.42H15.386V59.588z"
      ></path>
      <path
        fill="#fff"
        d="M15.386 44.756h14.912V59.59H15.386V44.756zM60.122 29.994h14.912v14.832H60.122V29.994z"
      ></path>
      <path fill="#fff" d="M15.386 29.994h14.912v14.832H15.386V29.994z"></path>
      <path fill="#F2CB12" d="M.475 44.756h14.912V59.59H.475V44.756z"></path>
      <path
        fill="#fff"
        d="M119.701 74.351h14.912v14.832h-14.912V74.351zM30.298 74.351H45.21v14.832H30.298V74.351zM104.789 89.184h14.912v14.832h-14.912V89.184zM75.034 104.016h14.912v14.832H75.034v-14.832z"
      ></path>
      <path
        fill="#fff"
        d="M89.877 104.016h14.912v14.832H89.877v-14.832zM60.122 104.016h14.912v14.832H60.122v-14.832zM45.21 89.184h14.912v14.832H45.21V89.184z"
      ></path>
    </svg>
  );
};
export default NotFoundDuck;
