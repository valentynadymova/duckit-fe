import { ISVG } from '../../../../types';

const DocumentCode: React.FC<ISVG> = ({
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
      // className={styles.ourfeatures_documencode}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FFCC01"
        d="M21.333 2.667H10.667C6 2.667 4 5.333 4 9.333v13.334c0 4 2 6.666 6.667 6.666h10.666C26 29.333 28 26.667 28 22.667V9.333c0-4-2-6.666-6.667-6.666zM14.04 21.96a1.006 1.006 0 010 1.413c-.2.2-.453.294-.707.294a.989.989 0 01-.706-.294L9.96 20.707a1.006 1.006 0 010-1.414l2.667-2.666a1.006 1.006 0 011.413 0 1.006 1.006 0 010 1.413L12.08 20l1.96 1.96zm8-1.253l-2.667 2.666c-.2.2-.453.294-.706.294a.989.989 0 01-.707-.294 1.006 1.006 0 010-1.413L19.92 20l-1.96-1.96a1.006 1.006 0 010-1.413 1.006 1.006 0 011.413 0l2.667 2.666a1.006 1.006 0 010 1.414zm2.627-8.374H22a3.665 3.665 0 01-3.667-3.666V6c0-.547.454-1 1-1 .547 0 1 .453 1 1v2.667c0 .92.747 1.666 1.667 1.666h2.667c.546 0 1 .454 1 1 0 .547-.454 1-1 1z"
      ></path>
    </svg>
  );
};
export default DocumentCode;
