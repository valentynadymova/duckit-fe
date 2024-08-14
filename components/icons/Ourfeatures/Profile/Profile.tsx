import { ISVG } from '../../../../types';
import styles from './Profile.module.css';

const Profile: React.FC<ISVG> = ({
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
      className={styles.ourfeatures_profile}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#F2CB12"
        d="M7.923 1.605a2.773 2.773 0 00-2.77 2.77c0 1.5 1.172 2.713 2.7 2.766a.47.47 0 01.128 0H8.022a2.764 2.764 0 002.672-2.765 2.773 2.773 0 00-2.771-2.77zM10.886 8.693c-1.627-1.085-4.281-1.085-5.92 0-.741.495-1.15 1.166-1.15 1.884 0 .717.409 1.382 1.144 1.872.816.549 1.89.823 2.963.823 1.073 0 2.147-.274 2.963-.823.735-.495 1.144-1.16 1.144-1.884-.006-.717-.409-1.382-1.144-1.872z"
      ></path>
    </svg>
  );
};
export default Profile;
