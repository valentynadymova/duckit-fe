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
    >
      <path
        fill="#F2CB12"
        d="M26 4.333C14.04 4.333 4.333 14.04 4.333 26S14.04 47.667 26 47.667 47.667 37.96 47.667 26 37.96 4.333 26 4.333zm-7.518 24.852a1.635 1.635 0 010 2.297 1.607 1.607 0 01-1.149.476c-.411 0-.823-.151-1.148-.476l-4.333-4.334a1.635 1.635 0 010-2.296l4.333-4.334a1.635 1.635 0 012.297 0 1.635 1.635 0 010 2.297L15.297 26l3.185 3.185zm11.18-7.605l-4.334 10.118a1.63 1.63 0 01-1.495.975c-.216 0-.433-.043-.628-.13a1.614 1.614 0 01-.845-2.145l4.333-10.118a1.597 1.597 0 012.124-.845 1.647 1.647 0 01.845 2.145zm10.486 5.568l-4.333 4.334a1.607 1.607 0 01-1.148.476c-.412 0-.824-.151-1.149-.476a1.635 1.635 0 010-2.297L36.703 26l-3.185-3.185a1.635 1.635 0 010-2.297 1.635 1.635 0 012.297 0l4.333 4.334a1.635 1.635 0 010 2.296z"
      ></path>
    </svg>
  );
};
export default CodeCircle;
